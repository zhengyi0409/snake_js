let SnakeLayer;
let Gamethis;
let SmallMap = require("SmallMap");

const SCORE_RANK_NUM = 10;

cc.Class({
    extends: cc.Component,
    properties: {
        lengthLab: {
            default: null,
            type: cc.Label,
            displayName: "长度文本"
        },
        killLab: {
            default: null,
            type: cc.Label,
            displayName: "击败文本"
        },
        smallMap: {
            default: null,
            type: SmallMap,
            displayName: "小地图组件"
        },
        scoreRank: {
            default: null,
            type: cc.Node,
            displayName: "分数组件"
        },

        timecountdowm:{
            default:null,
            type:cc.Label,
            displayName: "timecountdowm",
        },

        //(zhengyi连麦处理)
        maiOther:{
            default:null,
            type: cc.Button,
        },

        //(zhengyi连麦处理)
        maiSelf:{
            default:null,
            type: cc.Button,
        },

        //(zhengyi连麦处理)
        maiFrameRes: {
            default: [],
            type: cc.SpriteFrame,
        },

        killTips: {
            default: null,
            type: cc.Node,
            displayName: "killTips"
        },

        richTextTips: {
            default: null,
            type: cc.Node,
            displayName: "richTextTips"
        },

        itemMaiNode: { // item template to instantiate other items
            default: null,
            type: cc.Node,
            displayName: "itemMaiNode",
        },

        _dt: 0,
        _nameLabels: [],
        _scoreLabels: [],
        _rankLabels:[],
        _maiStatus:[], //(zhengyi连麦处理)
        _bestNameLable:"",
        _bestScoreLable:0,
        _bestScore:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.curRestTime = 0;
        this.startTime = 0;

        this.maiOtherType = true
        this.maiSelfType = true

        for (let i = 0; i < SCORE_RANK_NUM; i++) {
            let node = this.scoreRank.getChildByName("Cell_"+ i);
            this._nameLabels.push(node.getChildByName("Name").getComponent(cc.Label));
            this._scoreLabels.push(node.getChildByName("Score").getComponent(cc.Label));
            this._rankLabels.push(node.getChildByName("Rank").getComponent(cc.Label));
        }

        this._bestNameLable = this.node.getChildByName("NormalUI").getChildByName("bestScore").getChildByName("name").getComponent(cc.Label);
        this._bestScoreLable = this.node.getChildByName("NormalUI").getChildByName("bestScore").getChildByName("score").getComponent(cc.Label);

        Notification.on("setTimeRest", this.setTimeRest, this);
        Notification.on("setTimes", this.setTimes, this);
        Notification.on("recordBestScore", this.recordBestScore, this);
        Notification.on("setbesScore", this.setbesScore, this);
        Notification.on("setScore", this.setScore, this);

        //(zhengyi连麦处理)
        Notification.on("setmaiOtherStatus", this.setmaiOtherStatus, this);
        Notification.on("setmaiSelfStatus", this.setmaiSelfStatus, this);
        Notification.on("setmaiPlay", this.setmaiPlay, this)
        Notification.on("setmaiStatus", this.setmaiStatus, this)
        Notification.on("setmaiDestory", this.setmaiDestory, this)

        if (GAME_MODE == 0) {
            this.node.getChildByName("timeBg").active = false
            this.maiOther.node.active = false
            this.maiSelf.node.active = false
        }

        // 分辨率处理
        var frameSizess = cc.view.getFrameSize();
        if(frameSizess.width / frameSizess.height >= 2){
            var scoreNode = this.scoreRank.parent
            scoreNode.scale = 0.8
            var bestScoreNode = this.node.getChildByName("NormalUI").getChildByName("bestScore")
            bestScoreNode.scale = 0.8
        }

    },

    start () {
        SnakeLayer = cc.director.getScene().getChildByName("Game").getComponent("Game").snakeLayer;
        Gamethis = cc.director.getScene().getChildByName("Game").getComponent("Game") ;
    },

    update (dt) {
        this._dt += dt;
        if (this._dt < 1) return;

        this._dt = 0;
        let node, snake, score = 0, idx;
        let snakes = SnakeLayer.getChildren();
        function sortFun(a, b) {
            if (a.getComponent("Snake").getComponent("Snake")._score > b.getComponent("Snake").getComponent("Snake")._score) {
                return -1;
            }
            else if (a.getComponent("Snake").getComponent("Snake")._score < b.getComponent("Snake").getComponent("Snake")._score) {
                return 1
            }
            else {
                return 0;
            }
        }
        snakes.sort(sortFun);

        for (let i = 0; i < SCORE_RANK_NUM; i++) {
            snake = snakes[i];
            this.setRankInfo(i, snake);

            // 地图相关 zhengyi
            if (i == 0 && snake)
                this.smallMap.updateDotState(snake.getComponent("Snake")._gid, snake.getComponent("Snake")._isSelf, true, false);
        }

        for (let i = 0; i < snakes.length; i++) {
            node = snakes[i];
            snake = node.getComponent("Snake");
            if (snake._isSelf) {
                this.lengthLab.string = Math.floor(snake._score);
                this.killLab.string = snake._kill;
                this._bestScore = snake._score;
            }

            // 地图相关暂时屏蔽 zhengyi
            if(GAME_MODE == 0){
                this.smallMap.updateDotPosition(snake._gid, snake.getWorldPosition())
            }else{
                this.smallMap.updateDotPosition(snake._gid, snake.m_BodyPosList_Show[0])
            }
            this.smallMap.updateDotState(snake._gid, snake._isSelf, false, false)
        }
    },

    //(zhengyi连麦处理)
    setRankInfo (idx, snake) {
        if (snake) {
            let snakeComponent = snake.getComponent("Snake")
            snakeComponent.rank = idx + 1
            this._nameLabels[idx].string = Utils.cutstr(5,snakeComponent.gname)
            this._scoreLabels[idx].string = Math.floor(snakeComponent._score)
            this._rankLabels[idx].string = idx + 1

            // 语音时麦的显示
            if(GAME_MODE == 1){
                if(this._maiStatus[snakeComponent.uid] == null){
                    this._maiStatus[snakeComponent.uid] = cc.instantiate(this.itemMaiNode);
                    this._maiStatus[snakeComponent.uid].parent = this.scoreRank.parent.getChildByName("Cell_mai")
                    //this._maiStatus[snakeComponent.uid].active = true
                }
                this._maiStatus[snakeComponent.uid].position = cc.v2(220,- 15 - idx * 30)
            }
        }else{
            this._nameLabels[idx].string = "--"
            this._scoreLabels[idx].string = "--"
            this._rankLabels[idx].string = ""
        }
    },

    setmaiPlay(snake){
        console.log("---------------------------------------------------- Mai js ActiveUseruserId:" + snake.uid + " 为活跃用户，正在说话")
        if(this._maiStatus[snake.uid]){
            this._maiStatus[snake.uid].scale = 1
            var anim = this._maiStatus[snake.uid].getComponent(cc.Animation)
            anim.play('maiAnim')
        }
    },

    // 麦动画至灰，只针对玩家自己 （1连麦失败、2开麦、3闭麦）
    setmaiStatus(snake){
        if(this._maiStatus[snake.uid]){
            if(snake._maiStatus == 2){
                //this._maiStatus[snake.uid].color = cc.Color.WHITE
                //this._maiStatus[snake.uid].active = true
            }else if(snake._maiStatus == 3 || snake._maiStatus == 1){
                //this._maiStatus[snake.uid].color = cc.Color.GRAY
                //this._maiStatus[snake.uid].active = false
            }
        }
    },

    setmaiDestory(snake){
        //console.log("----------------------------------------------- setmaiDestory")
        if(this._maiStatus[snake.uid]){
            var anim = this._maiStatus[snake.uid].getComponent(cc.Animation)
            anim.stop('maiAnim')
            this._maiStatus[snake.uid].destroy()
            this._maiStatus[snake.uid] = null
        }
    },


    timeFormat (s) {
        let min = Math.floor(s / 60);
        let sec = s % 60;
        return Utils.doubleDigit(min) + ":" + Utils.doubleDigit(sec);
    },

    setTimeRest (data) {
        //cc.log("time = " + data["time"] + " countdown = " + data["countdown"]);
        let time = data["time"];
        let countdown = data["countdown"];
        this.curRestTime = time;
        this.startTime = Utils.getTimeSec();
        this.timeTTF = this.node.getChildByName("timeBg").getChildByName("timeTTF").getComponent(cc.Label);
        //this.timeTTF.node.active = true;
        this.timeTTF.string = this.timeFormat(time);
        this.schedule(this.updateRestTime, 1);
    },

    setTimes (time) {
        this.timeTTF.string = time;
    },

    setScore(){
        let Game = cc.director.getScene().getChildByName("Game").getComponent("Game");
        if (Game._selfSnake) {
            this.lengthLab.string = Math.floor(Game._selfSnake._score);
            this.killLab.string = Game._selfSnake._kill;
            this._bestScore = Game._selfSnake._score;
        }
    },

    // 设置最高纪录
    setbesScore(name){
        name = Utils.cutstr(5,name);
        this._bestNameLable.string = name;

        var bestscore = null
        if(cc.sys.os === cc.sys.OS_ANDROID){
            if(GAME_MODE == 0){ // 单机
                bestscore = HISTORY_SCORE_STAND_DATA
            }else{
                bestscore = HISTORY_SCORE_DATA
            }
        }else{
            if(GAME_MODE == 0){ // 单机
                bestscore = cc.sys.localStorage.getItem("HISTORY_SCORE_STAND");
            }else{
                bestscore = cc.sys.localStorage.getItem("HISTORY_SCORE");
            }
        }
        if(bestscore == null){
            bestscore = 0;
        }
        bestscore = parseInt(bestscore);
        if(bestscore >= 0){
            this._bestScoreLable.node.active = true
            this._bestScoreLable.string = bestscore;
        }
    },

    // 保存最高纪录
    recordBestScore(){
        var bestscore = cc.sys.localStorage.getItem("BEST_SCORE");
        if(bestscore == null){
            bestscore = 0;
        }
        bestscore = parseInt(bestscore);
        if(bestscore < this._bestScore){
            cc.sys.localStorage.setItem("BEST_SCORE",this._bestScore);
        }
    },

    updateRestTime () {
        //cc.log("-----------------------------------curRestTime = " + this.curRestTime + " startTime = " + this.startTime);
        if (this.curRestTime > 0 && this.startTime > 0) {
            let udTime = Utils.getTimeSec() - this.startTime;
            if (udTime > 0) {
                this.curRestTime = this.curRestTime - udTime;
                if (this.curRestTime >= 0) {
                    let s = this.curRestTime;
                    let time = this.timeFormat(s);
                    this.timeTTF.string = time;
                    this.startTime = Utils.getTimeSec();

                    if(this.curRestTime <= 5){
                        if(this.curRestTime > 1){
                            AudioMgr.playEffect("countdown",false);
                        }else{
                            AudioMgr.playEffect("countdown2",false);
                        }

                        this.timecountdowm.node.active = true;
                        this.timecountdowm.string = this.curRestTime;

                        if(this.curRestTime == 0){
                            if(GAME_MODE == 0){
                                Gamethis.exitGame("error");
                            }
                        }
                    }

                }
            }
        }
    },

    onDestroy () {
        Notification.removeListenersByObj(this);
    },

   //控制其它玩家的音频流(zhengyi连麦处理)
    maiOtherCall(){
        AudioMgr.playEffect("button")
        console.log("----------------------------------------- maiOtherCall")
        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            let frame = this.maiOther.node.getChildByName("img").getComponent(cc.Sprite)
            if(this.maiOtherType){
                this.maiOtherType = false
                frame.spriteFrame = this.maiFrameRes[5]
            }else{
                this.maiOtherType = true
                frame.spriteFrame = this.maiFrameRes[4]
            }
        }else{
            if(this.maiOtherType){
                this.maiOtherType = false

            }else{
                this.maiOtherType = true
            }
            GameCallPlatform.muteAllRemoteAudioStreams(this.maiOtherType)
        }
    },

    //控制自己的音频流（自己开关麦）(zhengyi连麦处理)
    maiSelfCall(){
        AudioMgr.playEffect("button")
        console.log("----------------------------------------- maiSelfCall")
        GameCallPlatform.muteSelfAudioStreams(!this.maiSelfType)

        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            if(!this.maiSelfType){
                Notification.dispatch("maiStatus", {userId : ID, status : 2});
            }else{
                Notification.dispatch("maiStatus", {userId : ID, status : 3});
            }
        }
    },


    //音频按钮状态 1开启，2关闭 (zhengyi连麦处理)
    setmaiOtherStatus(status){
        console.log("----------------------------------------- Mai setmaiOtherStatus")
        let frame = this.maiOther.node.getChildByName("img").getComponent(cc.Sprite)
        if(status == 2){
            this.maiOtherType = false
            frame.spriteFrame = this.maiFrameRes[5]
        }else{
            this.maiOtherType = true
            frame.spriteFrame = this.maiFrameRes[4]
        }
    },

    //连麦按钮状态（1连麦失败、2开麦、3闭麦）(zhengyi连麦处理)
    setmaiSelfStatus(status){
        console.log("----------------------------------------- Mai setmaiSelfStatus")
        let frame = this.maiSelf.node.getChildByName("img").getComponent(cc.Sprite)
        if(status == 1){
            this.maiSelfType = false
            frame.spriteFrame = this.maiFrameRes[3]
        }else if(status == 2){
            this.maiSelfType = true
            frame.spriteFrame = this.maiFrameRes[2]
        }else if(status == 3){
            this.maiSelfType = false
            frame.spriteFrame = this.maiFrameRes[3]
        }
    }

});
