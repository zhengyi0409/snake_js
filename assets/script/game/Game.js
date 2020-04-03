/**
 * 网络战斗的流程是从app版的c++代码理解过来的，为了与服务器对应，不得修改流程（除非服务器改动）
 * c++端缺少注释，有些流程、逻辑、公式没看明白，所以自己重写了一些逻辑和公式。但是服务器和客户端的流程、公式又是一致的，所以同步出现了一些问题
 * 简略流程图：
 * CMD_SESSION_START（客户端） -> CS_CMD_SESSION_NTF（服务器） ->
 * CMD_SYNC_REG(CMD_GET_FOOD,CMD_NICKNAME_UPDATE几乎同步)（客户端） -> CMD_SYNC_REG_ACK(CMD_FOOD_NTF和CMD_NICKNAME_UPDATE_NTF)（服务器）->
 * CMD_SYNC_TRACE（服务器） -> CS_CMD_FRAMEINFO（服务器）(每帧下发)
 * 自己的蛇死亡会下发CS_CMD_SLITHER_DEAD_NTF
 * 死亡食物和加速食物会下发CMD_SYNC_FOOD
 */
require("../network/Socket");

let GameUI = require("GameUI");
let GameMap = require("Map");
let Camera = require("CameraControl");
let Joystick = require("Joystick");
let FoodMgr = require("FoodMgr");

const POOL_INIT_BODY_COUNT = 3;     //身体对象池初始化的数量
const PI_PRAMA = 180 / Math.PI;     //公式计算参数0
const PI_PRAMA1 = Math.PI / 180;    //公式计算参数1
const SPEED_MULT_NORMAL = 1;//正常行走的倍率
const SPEED_MULT_SPEEDUP = 2;//加速行走的倍率
const SPEED_FOOD_SCORE = 0.2;

window.upfreamTips = false;
window.upfreamPosX = null;
window.upfreamPosY = null;


cc.Class({
    extends: cc.Component,

    properties: {
        gameUI: {               //战斗界面UI
            default: null,
            type: GameUI
        },
        map:  {                 //地图
            default: null,
            type: GameMap
        },
        snakeLayer: {           //存放蛇的层
            default: null,
            type: cc.Node
        },
        camera:  {              //摄像头
            default: null,
            type: Camera
        },
        joystick:  {            //摇杆
            default: null,
            type: Joystick
        },
        foodMgr: {              //食物管理组件
            default: null,
            type: FoodMgr
        },

        smallMap:{             // 小地图
            default: null,
            type: cc.Node
        },

        loading:{
            default:null,
            type: cc.Node
        },

        backloading:{
            default:null,
            type: cc.Node
        },

        // dian1:{
        //     default:null,
        //     type: cc.Node
        // },
        // dian2:{
        //     default:null,
        //     type: cc.Node
        // },
        // dian3:{
        //     default:null,
        //     type: cc.Node
        // },

        reportItem: { // item template to instantiate other items
            default: null,
            type: cc.Node,
            displayName: "reportItem",
        },

        reportView:{
            default:null,
            type:cc.Node,
            displayName: "reportView",
        },

        reportScrollView: {
            default: null,
            type: cc.ScrollView,
            displayName: "reportScrollView",
        },

        loadingLabel:{
            default:null,
            type: cc.Label
        },

        reviveBtn:{
            default:null,
            type: cc.Button
        },

        returnBtn:{
            default:null,
            type: cc.Button
        },

        backBtn:{
            default:null,
            type: cc.Button
        },

        aliveLable:{
            default:null,
            type: cc.Node
        },

        // 网络状态提示
        netTips:{
            default:null,
            type:cc.Node,
            displayName: "netTips",
        },

        netconnectTips:{
            default:null,
            type:cc.Label,
            displayName: "netconnectTips",
        },

        loadingBar:{
            default:null,
            type:cc.ProgressBar,
            displayName: "loadingBar",
        },

        // 段位frame
        danFrame:{
            default: [],
            type: cc.SpriteFrame,
            displayName: "danFrame",
        },

        roomTips:{
            default: null,
            type: cc.Node,
        },

        speed_normal: 4.8,      //普通速度 4.8
        speed_up: /*9.2*/9.6,          //加速后速度

        _prefabs: {             //预制件集
            default: {},
        },
        _ids: null,             //蛇的id集合 
        _snakeBodyPool: null,   //蛇身的对象池
        _dt : 0,                //计时器1
        _dt2 : 0,               //计时器2
        _frameStartTime : 0,    //c++搬过来的逻辑变量，不明
        _lastRecvFrame : -1,    //c++搬过来的逻辑变量，接受的上一帧id
        _lastRefreshDelayInfo : 0,  //c++搬过来的逻辑变量，不明
        _delayAccum : 0,        //c++搬过来的逻辑变量，不明
        _delayCount : 0,        //c++搬过来的逻辑变量，不明
        _lastCheckNetTime : 0,  //c++搬过来的逻辑变量，不明
        _snakeNames : {           //蛇名的集合
            default: {},
        },
        _snakeUid : {             //蛇uid的集合
            default: {},
        },
        _snakeHeadImg : {         //蛇头像的集合
            default: {},
        },
        _snakeSex : {         //蛇性别的集合
            default: {},
        },
        _snakes : {             //蛇的集合联网版
            default: {},
        },

        _snakesByUid : {             //蛇的集合联网版　(zhengyi连麦处理)
            default: {},
        },

        m_arrSnake:[],               //蛇的集合单机版
        _selfSnake : null,          //
        _msgPacks: [],               //网络包列表
        _killRate: 0.1,              //击杀得分比例
        _killSnakeId: 0,             //初始化仇人ID
        _firstKeyFrame:false,
        m_dNormalSpeed:0,
        m_dAccelerateSpeed:0,
        m_dTurnSpeed:0,
        m_dTurnSpeed_Stand:0,
        curAngle:Math.PI/2,
        dianNum:1,
        _connectServerCb:null,
        _joinRoomCb:null,
        _gameOver:false,
        _netState:null,
        _reConnect:true,
        _requestSnake:null,
        _resultData:[],
        _historyScore:0,   // 历史最佳得分(联网)
        _historyScoreStand:0,   // 历史最佳得分(单机)
        _netconnectNode:null,
        _isAliveTag:false,             // 是否复活
        _isAdAliveTag:false,
        _snakeSelfData : {             //蛇自身数据
            default: {},
        },
        _reportViewItemNode:[],       // 战报界面item
        _followStateData:null,
        _stateData:null,

        //(zhengyi连麦处理)
        _selfMaiStatus:3,                    //（1连麦失败、2开麦、3闭麦）
        _startMultiLianMaiTag:false,        // 连麦初始化，只能一次


        // 测试
        _playerUid:null,
        _ceshinum:0,
    },

    onLoad () {
        var self = this;
        //服务器1秒25帧,每帧计算2次,每帧1/25秒
        //客户端1秒50帧,每帧计算1次,每帧1/50秒
        //客户端执行2帧1/25秒相当于服务端执1帧
        cc.game.setFrameRate(60); // 之前帧率是60

        this._startMultiLianMaiTag = false
        G_VoiceGameExit = false
        this._isAliveTag = false
        this._isAdAliveTag = false

        // 网络信号提示
        var canvas = cc.director.getScene().getChildByName("Canvas");
        this._wifiCall = function () {
            //console.log("-------------------------------------------------- _wifiCall")
            let color = null;
            const latency = GameCallPlatform.GetNetSpeed();
            if (latency < 100) {
                color = cc.Color.GREEN;
            }
            else if (latency <= 200) {
                color = new cc.Color((0xff911a & 0xFF0000) >> 16, (0xff911a & 0xFF00) >> 8, 0xff911a & 0xFF);
            }
            else {
                color = cc.Color.RED;
            }
            canvas.getChildByName("NormalUI").getChildByName("img_wifi").color = color;
            canvas.getChildByName("NormalUI").getChildByName("txt_wifi").color = color;
            canvas.getChildByName("NormalUI").getChildByName("txt_wifi").getComponent(cc.Label).string = latency + "ms";
        }
        this.schedule(this._wifiCall,1.0,cc.macro.REPEAT_FOREVER, 0.01);

        cc.game.on(cc.game.EVENT_HIDE, function(){
            console.log("----------------------------------------- 进入后台");
            BACKSTAGE = true;
        },this);

        cc.game.on(cc.game.EVENT_SHOW, function(){
            if(BACKSTAGE == false){
                console.log("---------------------------------------- 没有进入后台EVENT_SHOW,直接return")
                return;
            }else{
                console.log("---------------------------------------- 后台回来")
                BACKSTAGE = false
                if(self._isAdAliveTag){
                    console.log("---------------------------------------- 看完广告后台回来重新生成蛇")
                    self._isAdAliveTag = false
                    let snake = self.newSnake(self.selfDieData["sid"], self.selfDieData["gid"], true);
                    self.joystick._target = snake.node;
                    self.map._selfSnake = snake;
                    self.camera._target = snake;
                    self._selfSnake = snake;
                    Notification.dispatch("cammerZoom");
                }else{
                    // 每次后台回来复活一次
                    if(self._selfSnake._score >= 50){
                        self._selfSnake._score = self._selfSnake._score / 2
                    }
                    let messge = new slither_pb.CS_Snake();
                    messge.setCmdid(ProtoEnum.CMD_SESSION_RESTART);
                    let pb_data = messge.serializeBinary();
                    Socket.requestPB(ProtoEnum.CMD_SESSION_RESTART, ID,ROOM_ID,pb_data);
                }
            }
        },this);


        if (GAME_MODE == 0){
            let collisionMgr = cc.director.getCollisionManager();
            collisionMgr.enabled = false;
            //collisionMgr.enabledDebugDraw = true;
            //collisionMgr.enabledDrawBoundingBox = true;
            canvas.getChildByName("NormalUI").getChildByName("img_wifi").active = false
            canvas.getChildByName("NormalUI").getChildByName("txt_wifi").active = false
        }

        this._netconnectNode = canvas.getChildByName("netTips");
        this._netconnectNode.active = false;
        this._netconnectNode.setLocalZOrder(1000); // 最上层
        this.loading.active = true;
        this.loadingBar.node.getChildByName("bar").active = false
        this.loading.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log("-------------------------- loading is Mouse down");
        });

    },

    start () {
        Notification.on(ProtoEnum.CMD_NICKNAME_UPDATE_NTF + "", this.onChangeNickName, this);
        Notification.on(ProtoEnum.CMD_SYNC_REG_ACK + "", this.onSyncReg, this);
        Notification.on(ProtoEnum.CMD_SYNC_FOOD + "", this.onSyncFood, this);
        Notification.on(ProtoEnum.CMD_SYNC_TRACE + "", this.onSyncTrace, this);
        Notification.on(ProtoEnum.CMD_FOOD_NTF + "", this.onFoodNtf, this);
        Notification.on(ProtoEnum.CMD_USER_HEARTBEAT_ACK + "", this.onHeartbeatAck, this);
        Notification.on(ProtoEnum.CMD_USER_LOGIN_ACK + "", this.onLoginCb, this);

        Notification.on(slither_pb.CS_CMD_ID.CS_CMD_SESSION_NTF + "msg", this.onSessionNtf, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TEAM_SESSION_NTF + "msg", this.onSessionNtf, this);

        Notification.on(slither_pb.CS_CMD_ID.CS_CMD_FRAMEINFO + "msg", this.onFrameInfo, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TIME_RESPONSE_EX + "msg", this.onAdjustTime4Udp, this);
        Notification.on(slither_pb.CS_CMD_ID.CS_CMD_EAT_FOOD_NTF + "msg", this.onEatFoodNtf, this);
        Notification.on(slither_pb.CS_CMD_ID.CS_CMD_SLITHER_DEAD_NTF + "msg", this.onSlitherDeadNtf, this);

        Notification.on(ProtoEnum.CMD_OFFLINE_NTF + "", this.onOffLine, this);
        //Notification.on(ProtoEnum.CMD_GAME_RESULT_NTF + "", this.onGameResult, this);
        Notification.on(ProtoEnum.CMD_SLITHER_RESULT_NTF + "", this.onGameResult, this);

        Notification.on(ProtoEnum.CMD_TEAM_RESULT_NTF + "", this.onTeamResult, this);
        Notification.on(ProtoEnum.CMD_TEAM_FIGHT_NTF + "", this.onTeamFight, this);
        Notification.on(ProtoEnum.CMD_TEAM_NUMBER_NTF + "", this.onTeamNumber, this);

        Notification.on(ProtoEnum.CMD_SESSION_RESTART + "", this.onRestart, this);
        Notification.on(ProtoEnum.CMD_NICKNAME_UPDATE_ACK + "", this.updateName, this);

        this.node.on("E_GAME_LOADPREFAB_DONE", this.onInit, this);
        Notification.on("E_GAME_SNAKEDIE", this.onSnakeDie, this);

        Notification.on("netConnect", this.netConnect, this);
        Notification.on("netBreak", this.netBreak, this);
        Notification.on("commonDialog", this.exitCommonDialog, this);     // 退出回调

        Notification.on("maiStatus", this.maiStatus, this);
        Notification.on("maiTalkingPlayer", this.maiTalkingPlayer, this);
        Notification.on("showAdCall", this.showAdCall, this);
        Notification.on("setFollowState", this.setFollowState, this);
        Notification.on("setStagesInfo", this.setStagesInfo, this);
        Notification.on("setBestGameData", this.setBestGameData, this);

        // 延迟0.1秒后执行，为了loading界面显示出来
        this.scheduleOnce(function() {
            this.onLaodResources();
            if(cc.sys.os === cc.sys.OS_WINDOWS){
                if (GAME_MODE == 1){
                    this.onCheckNetStatus();
                }
            }
        }, 0.2);

        // 获取玩家最高分数
        if(cc.sys.os === cc.sys.OS_ANDROID){
            console.log("---------------------------------------- Bestscore 获取玩家最高分数 GAME_ID:" + GAME_ID)
            GameCallPlatform.getSingleGameData(GAME_ID)
        }
    },

    // 检测网络状态
    onCheckNetStatus(){
        // 如果15秒没有收到心跳就进行重联
        if(this._netState == null){
            this._netState = function () {
                if(Socket.isConnect == false){
                    //cc.log("---------------------------------- Game 心跳停止，进行重联");
                    if(GAME_TYPE == 3){
                        this.exitGame("voiceroom")
                    }else{
                        this.exitGame("error");
                    }
                }else{
                    //cc.log("---------------------------------- Game 心跳正常")
                }
            }
            this.schedule(this._netState,15);
        }
    },


    //登录tcp回调
    onLoginCb (data) {
        if (data.rcode == 0) {
            console.log("------------------------------- Game onLoginCb rcode = 0,服务器已连接上！");
            Socket.isConnect = true;
            this.netTips.active = false;
            this.onLaodResources(); // 测试 zhengyi
        }else if(data.rcode == 2) { //重定向,重新连接服务器
            console.log("------------------------------- Game onLoginCb rcode = 2,重新连接服务器，请稍等！");
            Socket.isConnect = false;
            Socket.connect(1, ID, 1,data.ip,data.port);
            IP_TCP = data.ip;
            PORT_TCP = data.port;
            IP_UDP = IP_TCP;
            PORT_UDP = PORT_TCP;
        }
    },

    // 加载一些资源
    onLaodResources(){
        this._snakeBodyPool = {};
        this.loadingLabel.string = "正在加载资源，请稍等！"  //预加载蛇的预制件
        let self = this;
        self._prefabs.snakes = {};
        self._ids = [];
        cc.loader.loadResDir("prefabs/game", function (err, assets) {
            assets.forEach(element => {
                if (element.name == "SnakeBody") {
                    self._prefabs.body = element;
                } else if (element.name == "SpeedUpNode") {
                    self._prefabs.speedup = element;
                }else if(element.name == "gqsprite" || element.name == "playerview"){

                } else {
                    var last = element.name.substring(element.name.length - 3);
                    if(last != "new"){   // zhengyi
                        let id = element.name.slice(5);
                        self._prefabs.snakes[id] = element;
                        self._ids.push(id);
                    }
                }
            });
            self.node.emit("E_GAME_LOADPREFAB_DONE");
        });
        //预计算sin cos的值，存表
        this._sinTable = (function() {
            let table = {};
            for (let i = -720; i <= 720; i++) {
                table[i] = Utils.fixedFloat(Math.sin(i * Math.PI / 180), 5);
            }
            return table;
        })();
        this._cosTable = (function() {
            let table = {};
            for (let i = -720; i <= 720; i++) {
                table[i] = Utils.fixedFloat(Math.cos(i * Math.PI / 180), 5);
            }
            return table;
        })();
    },

    onInit () {
        // 预创建蛇身的对象池(分帧处理)
        // 以秒为单位的时间间隔
        var interval = 0.05;
        // 重复次数
        var repeat = 53;
        // 开始延时
        var delay = 0;
        var id = 0;
        this.dianNum = 1;

        this.schedule(function() {
            id += 1;
            if(id == 15){
                id = 16
            }
            this.loadingLabel.string = "资源加载中" + Math.floor(id / 54 * 100) + "%";
            this.loadingBar.node.getChildByName("bar").active = true
            this.loadingBar.progress = id / 54
            let ids = id;
            let prefab = this._prefabs.snakes[ids];
            let snake = cc.instantiate(prefab);
            let snakeComponent = snake.getComponent("Snake");
            for (let j = 0; j < snakeComponent.bodyFrames.length; j++) {
                let key = ids + "_" + j;
                this._snakeBodyPool[key] = new cc.NodePool(); // 对象池
                for (let k = 0; k < POOL_INIT_BODY_COUNT; k++) {
                    let node = cc.instantiate(this._prefabs.body);
                    node.name = "body_" + j;
                    let sp = node.getComponent(cc.Sprite);
                    sp.spriteFrame = snakeComponent.bodyFrames[j];
                    this._snakeBodyPool[key].put(node);
                }
            }
            if(id == 55){
                if (GAME_MODE == 1){
                    this.loadingLabel.string = "正在进入房间";
                }
                this.onStartSnake();
            }
        }, interval, repeat, delay);

    },

    onStartSnake(){
        if (GAME_MODE == 0) {
            let count = 0;
            let newAISnakeCb;
            if(this.loading.active) {
                this.loading.active = false;
                this.loading.off(cc.Node.EventType.TOUCH_START);
                AudioMgr.playMusic("bgm"); // 背景音效
            }
            newAISnakeCb = function() {
                if (count < 9) { // 9
                    let ranID = Math.round(Math.random() * (this._ids.length-1));
                    this.newSnake(this._ids[ranID], count + 1, false);
                    count++;
                } else {
                    this.unschedule(newAISnakeCb);
                }
            }
            //定时创建AI蛇
            this.schedule(newAISnakeCb, 1);

            let sid = SNAKE_ID
            this.newSnake(sid, 0, true);
        } else {
            let time = 15;
            var timelable = this.loading.getChildByName("timelable").getComponent(cc.Label)
            timelable.node.active = true
            timelable.string = "(" + time + "s)"
            this._joinRoomCb = function() {
                time --;
                var timelable = this.loading.getChildByName("timelable").getComponent(cc.Label)
                timelable.node.active = true
                timelable.string = "(" + time + "s)"
                if(time == 0){
                    // 15秒后还没收到服务器CS_CMD_FRAMEINFO数据则返回主界面
                    this.unschedule(this._joinRoomCb);
                    this.loadingLabel.string = "请稍后重试！"
                    this.scheduleOnce(function(){
                        this.exitGame("onStartSnake_error")
                    }, 2.0)
                }
            }
            this.schedule(this._joinRoomCb, 1.0);
            this.onGameInitReq()
        }
    },

    // 请求游戏开始
    onGameInitReq(){
        if(GAME_TYPE == 1){
            console.log("zhengyi ------------------------------------ Game 请求加入房间 SNAKE_ID:" + SNAKE_ID + " ID:" + ID)
            Socket.request(ProtoEnum.CMD_SESSION_START, 0,ID, 0, {type : SNAKE_ID, head : 0})
        }else if(GAME_TYPE == 0){
            console.log("zhengyi ------------------------------------ Game 组队请求加入房间")
            this.Req_TeamSatrt(TEAM_ID)
        } else if(GAME_TYPE == 2){
            console.log("zhengyi ------------------------------------ Game 被邀请加入房间")
            this.onSessionNtf(G_OnSessionNtfData)
        } else if(GAME_TYPE == 3){
            console.log("zhengyi ------------------------------------ Game 语音房加入房间")
            GameCallPlatform.initGameSpeakerAndMicUi()
            this.Req_GameStart()
            this.Req_GameOptions()
        }
    },

    // 语音房开始游戏
    Req_GameStart(){
        let messge = new games_pb.MsgGamesStartReq()
        messge.setUid(ID);
        let pb_data = messge.serializeBinary();
        Socket.requestPB(common_pb.GAMES_CMD.CMD_GAMES_START_REQ, ID, 0, pb_data, "", "");
    },

    // 设置皮肤
    Req_GameOptions(){
        let messge = new games_pb.MsgGamesOptionsReq()
        messge.setType(0)               //0为皮肤，其他待定
        messge.setArgs1(SNAKE_ID)
        let pb_data = messge.serializeBinary();
        Socket.requestPB(common_pb.GAMES_CMD.CMD_GAMES_OPTIONS_REQ, ID, 0, pb_data, "", "");
    },


    // re 开始游戏
    Req_TeamSatrt(team_id){
        if(team_id){
            let msg = new slither_pb.CS_Snake();
            msg.setCmdid(slither_pb.CS_CMD_ID.CS_CMD_TEAM_START);

            let reqMsg = new slither_pb.CS_TeamStart_Req()
            reqMsg.setTeamid(team_id)
            msg.setTeamstart(reqMsg)

            let pb_data = msg.serializeBinary();
            Socket.requestPB(slither_pb.CS_CMD_ID.CS_CMD_TEAM_START,ID,ROOM_ID,pb_data)
        }else{
            console.log("---------------------------------- Req_TeamSatrt team_id is null")
        }
    },


    onSessionNtf (msg) {
        let dialog = cc.director.getScene().getChildByName("Canvas").getChildByName("ReviveDialog");
        if (dialog.active) {
            dialog.active = false;
        }
        let data = msg.getSessionntf();
        UID = data.getUid();
        ROOM_ID = data.getRoomid();
        if (data.hasIp()) {
            IP_UDP = data.getIp();
        }
        PORT_UDP = data.getPort();
        console.log("zhengyi ------------------------------------ Game 加入房间成功　ROOM_ID:"　+ ROOM_ID + " IP_UDP:" + IP_UDP + " PORT_UDP:" + PORT_UDP + " UID:" + UID);
        this.m_dNormalSpeed = data.getSpeed1();　// 4.8
        this.m_dAccelerateSpeed = data.getSpeed2(); // 4.4
        this.m_dTurnSpeed = data.getTurnspeed1(); // 0.22
        this.m_dTurnSpeed_Stand = data.getTurnspeed2(); //0.22
        this.curAngle = Math.PI / 2;

        Socket.request(ProtoEnum.CMD_NICKNAME_UPDATE, 0, ID, 0, {nickname :GameConfig.getInstance().myName});
        this.requestAdjustTime4Udp();
        this._lastAdjuetTime = this.getCurMilliseconds();

        //请求注册蛇
        this.requestSnake();

        //请求战场食物
        this.scheduleOnce(function() {
            for (let i = 0; i < 64; i++) {
                Socket.request(ProtoEnum.CMD_GET_FOOD, 0, ID, ROOM_ID, {index : i});
            }
        }, 1);

        let dataTime = {"time" : data.getTime(), "countdown" : data.getCountdown()};
        Notification.dispatch("setTimeRest", dataTime); // 开启倒计时
    },

    //请求注册蛇----- 播放音效
    requestSnake () {
        console.log("------------------------------------ requestSnake 请求注册蛇 UID = " + UID + " ROOM_ID = " + ROOM_ID + " IP_UDP = " + IP_UDP + " PORT_UDP = " + PORT_UDP);
        Socket.udpRequest(ProtoEnum.CMD_SYNC_REG, 0, UID, ROOM_ID, {}, PORT_UDP);
        this._requestSnake = function () {
            console.log("------------------------------------ requestSnake 重新请求注册蛇 UID = " + UID + " ROOM_ID = " + ROOM_ID + " IP_UDP = " + IP_UDP + " PORT_UDP = " + PORT_UDP);
            Socket.udpReset();
            Socket.udpRequest(ProtoEnum.CMD_SYNC_REG, 0, UID, ROOM_ID, {}, PORT_UDP);
        }
        this.schedule(this._requestSnake,1.0);
    },

    //注册蛇网络回调
    onSyncReg () {
        console.log("------------------------------------ onSyncReg 注册蛇网络回调");
        AudioMgr.playMusic("bgm"); // 背景音效
        this.unschedule(this._requestSnake);
    },

    onHeartbeatAck(){
        //console.log("------------------------------------ Game 收到心跳");
        //Socket.isConnect = true;
    },

    update (dt) {
        // 单机版
        if (GAME_MODE == 0){
            let iSnakeSize = this.m_arrSnake.length;
            for (let m = 0; m < iSnakeSize; m++) {
                let sm = this.m_arrSnake[m];
                if(!Utils.isEmptyObject(sm)){
                    let attackid = 0;
                    sm.CheckCollider(this.m_arrSnake, attackid);
                }
            }
            return;
        }

        // 联网版
        if (!this._firstKeyFrame) return;

        let curTime = this.getCurMilliseconds();
        if (curTime - this._lastAdjuetTime > 3000) {
            this._lastAdjuetTime = curTime;
            this.requestAdjustTime4Udp();
        }

        if (curTime - this._lastRefreshDelayInfo > 1000) {
            if (this._delayCount > 0) {
                //todo: network state tip
            }
            this._lastRefreshDelayInfo = curTime;
            this._delayCount = 0;
            this._delayAccum = 0;
        }

        if (this._lastCheckNetTime != 0) {
            if (curTime - this._lastRecvTime > 5000) {
                //todo: network disconnect
                this.netDisconnect();
                this._lastRecvTime = 0x7fffff;
            } else if (this._lastRecvTime == 0x7fffff) {
                return;
            }
        } else {
            this._lastRecvTime = curTime;
        }
        this._lastCheckNetTime = curTime;

        if (!Utils.isEmptyObject(this._selfSnake) && this._selfSnake._m_iStatus == eSnakeStatus_Dead) {
            if (this._deadMsg) {
                //自身的蛇
                Notification.dispatch("E_GAME_SNAKEDEAD", {id : this._deadMsg.getId(), isOut : true,killer : this._killSnakeId},this._snakes[this._deadMsg.getId()]);
                this.setResultData(this._snakes);
                Notification.dispatch("setmaiStop", this._selfSnake); // 如果在说话关闭说话动画

                this._snakesByUid[ID] = null
                var id = this._deadMsg.getId()
                this._snakes[id] = null;
                this._selfSnake._canRecycle = false;
                this._selfSnake.recycle();
                Notification.dispatch("E_GAME_SNAKEDIE", this._selfSnake);
                this._deadMsg = null;
                this.m_lSelfDeadTime = 0;
            }
            else if (this.m_lSelfDeadTime != 0) {
                if (curTime - this.m_lSelfDeadTime > 3000) {
                    this.SnakeMgr_CheckSelfDead(0, "");
                    this.m_lSelfDeadTime = 0;
                }
            } 
        }

        if (curTime - this._lastRecvTime > 300) return;

        if (curTime - this.m_lLastCheckGeneralAITime > 3000) {
            this.m_lLastCheckGeneralAITime = curTime;
        }

        this.updateSelf();
        this.updateSnakes();

        if(!Utils.isEmptyObject(this._selfSnake) && this._selfSnake._m_iStatus == eSnakeStatus_Normal){
            //每2帧发送一次自身的位置
            this._dt++;
            if (this._dt >= 2) {
                this._dt = 0;
                let s = this._selfSnake;
                let a;
                if (450-s._netAngle < 90) {
                    a = Math.round((90-s._netAngle)*PI_PRAMA1*100);
                } else {
                    a = Math.round((450-s._netAngle)*PI_PRAMA1*100);
                }

                let math_score = Math.floor(s._score);
                let data = {
                    i : s._gid,
                    a : a,
                    k : s._width,
                    l : s._length,
                    s : s._speedUpFlag ? 2 : 1,
                    z : math_score
                };
                //console.log("update ----------------------------- 每2帧发送 i:" + data.i + " a:" + data.a + " k:" + data.k + " l:" + data.l + " s:" + data.s + " z:" + data.z);
                Socket.udpRequest(ProtoEnum.CMD_SYNC_POS, 0, UID, ROOM_ID, data, PORT_UDP);
            }

            //每6帧发送一次自身所吃的食物
            this._dt2++;
            if (this._dt2 >= 6) {
                this._dt2 = 0;
                let s = this._selfSnake;
                if (s._eatList.length > 0) {
                    //console.log("update ----------------------------- 每6帧发送 index:" + s._gridIdx + " foods:" + s._eatList);
                    Socket.request(ProtoEnum.CMD_EAT_FOOD, 0, ID, ROOM_ID, {index : s._gridIdx, foods : s._eatList});
                    s._eatList = [];
                }
            }
        }

    },

    updateSelf(){
        if (!Utils.isEmptyObject(this._selfSnake) && this._selfSnake._m_iStatus != eSnakeStatus_Dead &&  this._selfSnake.curSpeed > SPEED_MULT_NORMAL ){
            if ( this._selfSnake._score >= 6) {
                this._selfSnake.updateScore2( -SPEED_FOOD_SCORE);
            }
        }
    },

    updateSnakes(){
        if( Utils.isEmptyObject(this._snakes)){
            return;
        }
        for (const id in this._snakes) {
            let snake = this._snakes[id];
            if(Utils.isEmptyObject(snake)){
                continue;
            }
            //自己蛇死了才不更新，别人的蛇死了，只要还有帧数据，就继续更新
            if (id == UID  && snake._m_iStatus == eSnakeStatus_Dead) {
                continue;
            }
            snake.render();
        }
    },


    onDestroy () {
        Notification.removeListenersByObj(this);
    },

    //新建一条蛇--单机
    newSnake (sid, id, isSelf) {
        //cc.log("-------------------------------------------newSnake sid: " + sid);
        if(Utils.isEmptyObject(this._prefabs.snakes[sid]) && isSelf){
            console.log("----------------------------------- newSnake 创建单机蛇异常 ERROR !!!");
            return;
        }

        let node = cc.instantiate(this._prefabs.snakes[sid]);
        this.snakeLayer.addChild(node);
        let snake = node.getComponent("Snake");
        snake._sid = sid;
        snake._gid = id;
        snake.head.position = snake.node.convertToNodeSpaceAR(cc.v2(Math.random() * 3200 + 800, Math.random() * 3200 + 800));
        snake.m_camera = this.camera;
        if (isSelf) {
            snake.gname = GameConfig.getInstance().myName;
            this.joystick._target = node;
            snake._isSelf = isSelf;
            this.map._selfSnake = snake;
            this.camera._target = snake;
            this._selfSnake = snake;
            // 原长复活
            if(this._isAliveTag){
                snake._score = Math.floor(this.selfDieData["score"])
            }
            Notification.dispatch("setbesScore",snake.gname);
        }
        else {
            snake.gname = Utils.getRandomName();
        }

        this.m_arrSnake[snake._gid] = snake;
        return snake;
    },

    //新建一条蛇--网络
    newSnakeByNet (msg) {
        console.log("---------------------------------------------- newSnakeByNet");
        let info = msg.getInfoList();       //indo的结构参考proto SC_Snake
        let gid = info[0];
        let sid = info[5];
        let trace = this._otherTrace[gid];
        // 新资源  // zhengyi
        // let ranID = sid;
        // if(sid > 10 ){
        //     ranID = Math.ceil(sid / 55 * 10);
        // }
        // if(ranID == 0)
        //     ranID = 1;
        // else if(ranID > 10)
        //     ranID = 10;
        // sid = ranID + "_new";

        let node = cc.instantiate(this._prefabs.snakes[sid]);
        this.snakeLayer.addChild(node);

        let snake = node.getComponent("Snake");
        snake._sid = sid;
        snake._gid = gid;
        snake.gname = this._snakeNames[gid] || "undefined";
        snake.uid = this._snakeUid[gid] || "undefined";
        snake.image = this._snakeHeadImg[gid] || "undefined";
        snake.sex = this._snakeSex[gid] || "undefined";
        snake.rank = 1; // 初始化默认为1
        let info1 = snake.score2_w_l();
        snake._width = info1[0];

        let angle = msg.getLastangle();
        snake.head.position = snake.node.convertToNodeSpaceAR(cc.v2(info[3]/1000, info[4]/1000));
        //snake.head.position = cc.v2(info[3]/1000,info[4]/1000);
        snake.head.rotation = 90 - Math.round(angle*PI_PRAMA);
        snake.initData(snake._width,0, msg.getLastangle(), msg.getLastangle(), snake.head.x, snake.head.y,info[7]);
        snake.m_camera = this.camera;
        //设置一些组件的目标对象
        if (gid == UID) { // 每一局中的唯一编号
            console.log("---------------------------------------------- newSnakeByNet self");
            this._isAdAliveTag = false
            this.aliveLable.active = false;
            this.joystick._target = node;
            snake._isSelf = true;
            this.map._selfSnake = snake;
            this.camera._target = snake;
            this._selfSnake = snake;
            if(this._isAliveTag){ // 原长复活
                if(this.selfDieData["score"] >= 100){
                    snake._score = Math.floor(this.selfDieData["score"] / 2)
                }else{
                    snake._score = info[1];
                }
            }else{
                snake._score = info[1];
            }

            Notification.dispatch("setbesScore",snake.gname);
            Notification.dispatch("cammerZoom");

            //(zhengyi连麦处理) 连麦初始化
            if(GAME_TYPE != 3 && this._startMultiLianMaiTag == false){
                console.log("------------------------------------------- 连麦初始化 ROOM_ID:" + ROOM_ID);
                this._startMultiLianMaiTag = true
                GameCallPlatform.startMultiLianMai(ROOM_ID)
            }
        }else{
            snake._score = info[1];
            this._playerUid = snake.uid
        }

        snake._trace = trace;
        snake._speedUp = (info[2] == 2);
        snake._wudiTime = info[6] + 4;  // (原始 _wudiTime = 1)
        if (trace) {
            this._otherTrace[gid] = null;
        }

        return snake;
    },

    //获取当前毫秒数
    getCurMilliseconds () {
        let date = new Date();
        return date.getSeconds() * 1000 + date.getMilliseconds();
    },

    //修正udp的时间
    requestAdjustTime4Udp () {
        let msg = new slither_pb.CS_Snake();
        msg.setCmdid(slither_pb.CS_CMD_ID.CS_CMD_TIME_REQUEST_EX);
        let reqMsg = new slither_pb.CS_AdjustTime_ReqEX();
        reqMsg.setTime1(this.getCurMilliseconds());
        msg.setAdjusttimereqex(reqMsg);

        let buff = msg.serializeBinary();
        Socket.udpRequestPB(slither_pb.CS_CMD_ID.CS_CMD_TIME_REQUEST_EX, UID,buff);
    },

    //检测所有蛇的死亡情况 (网络版)
    checkDeads (msg) {
        //其他蛇
        let list = msg.getDeadinfosList();
        for (let i = 0; i < list.length; i++) {
            let id = list[i].getId();
            let attackerid = list[i].getAttacker();
            //cc.log("---------------------------------------dead_id = " + id + " attackerid = " + attackerid);
            if (this._snakes[attackerid] && this._snakes[id] && id != UID) {
                let killscore = this._snakes[id]._score * this._killRate;
                if (killscore < 20) {
                    killscore = 20;
                }
                this._snakes[attackerid].killAction(killscore);
            }
            // 其他蛇
            if (this._snakes[id] && id != UID) {
                this._otherTrace[id] = null;
                Notification.dispatch("E_GAME_SNAKEDEAD", {id : id, isOut : true,killer : attackerid},this._snakes[id]);
            }
            //todo: killer snake
        }
    },

    //更新所有蛇的状态
    updateSnakeParams (msg) {
        //console.log("-------------------------------------------- updateSnakeParams");
        let list = msg.getInfosList();
        let self = this;
        list.forEach(info => {
            let arr = info.getInfoList();
            if(UID == arr[FrameIdx.ID]){
                //console.log("----------------------------------------- updateSnakeParams self gid:" + arr[FrameIdx.ID])
            }else{
                //console.log("----------------------------------------- updateSnakeParams other gid:" + arr[FrameIdx.ID])
            }
            let snake = self._snakes[arr[FrameIdx.ID]];
            if (snake) {
                //cc.log("id = " + arr[FrameIdx.ID] + " score = " + arr[FrameIdx.SCORE] + " speed = " + arr[FrameIdx.SPEED]
                   // + " wudi = " + arr[FrameIdx.PROTECT] + " x = " + arr[FrameIdx.X] + " y = " + arr[FrameIdx.Y]
                   // + " skin = " + arr[FrameIdx.SKINTYPE] + " len = " + arr[FrameIdx.LENGTH]
                   // + " angle = " + info.getLastangle() + " angle2 = " +　info.getLastangle()*PI_PRAMA);
                let p =  snake.node.convertToNodeSpaceAR(cc.v2(arr[FrameIdx.X] / 1000, arr[FrameIdx.Y] / 1000));
                //let p = cc.v2(arr[FrameIdx.X] / 1000, arr[FrameIdx.Y] / 1000);
                //cc.log("----------------网络下发数据 cur_x = " + p.x + " cur_y = " + p.y );
                //cc.log("----------------本地计算数据 cur_x = " + snake.head.x + " cur_y = " + snake.head.y );

                if (snake._isDead) {        //蛇死了，把服务器同步下发的轨迹清空
                    self._otherTrace[snake._gid] = null;
                } else {
                    if (!snake._isSelf) {   //其他蛇同步分数，自身蛇客户端自己计算分数
                        snake._score = arr[FrameIdx.SCORE];
                        snake._speedUpFlag = (arr[FrameIdx.SPEED] == 2);
                        //cc.log("-------------------------------------------- this._score: " + snake._score);
                    }
                    snake.m_fBodyLength_Svr = arr[FrameIdx.LENGTH] / 1000;
                    snake.AddBodyPosSvr_Head(p.x,p.y);
                    snake.directTo(info.getLastangle());
                    snake.setSpeed(arr[FrameIdx.SPEED]);

                    //if (arr[FrameIdx.PROTECT] == 0) {      //取消无敌
                        //snake.cancelInvicible();
                    //}
                }
            } else {
                if(this.loading.active) { // 创建自己蛇的时候关闭loading界面
                    this.unschedule(this._joinRoomCb);
                    this.loading.active = false;
                    this.loading.off(cc.Node.EventType.TOUCH_START);
                }

                let snake = this.newSnakeByNet(info);
                self._snakes[arr[FrameIdx.ID]] = null;
                self._snakes[arr[FrameIdx.ID]] = snake;

                this._snakesByUid[snake.uid] = null
                this._snakesByUid[snake.uid] = snake
            }
        });

    },

    setDieData(snake){
        let sid = snake._sid;
        let gid = snake._gid;
        if (snake._isSelf){
            this.selfDieData = {
                "sid" : sid,
                "gid" : gid,
                "score" : snake._score,
                "kill" : snake._kill
            };
        }
    },

    //蛇死后的处理
    onSnakeDie (snake) {
        let sid = snake._sid;
        let gid = snake._gid;
        if (snake._isSelf){
            this.selfDieData = {
                "sid" : sid,
                "gid" : gid,
                "score" : snake._score,
                "kill" : snake._kill
            };
        }
        if (GAME_MODE == 0) {
            //单机版，则是自动复活
            if (snake._isSelf) {
                if(cc.sys.os === cc.sys.OS_ANDROID){
                    let socre = Math.round(this._selfSnake._score)
                    if(HISTORY_SCORE_STAND_DATA < socre){
                        HISTORY_SCORE_STAND_DATA = socre;
                    }
                    this.uploadBestGameData(HISTORY_SCORE_STAND_DATA,HISTORY_SCORE_DATA)
                }else{
                    this._historyScoreStand = cc.sys.localStorage.getItem("HISTORY_SCORE_STAND");
                    if(this._historyScoreStand == null){
                        this._historyScoreStand = 0;
                    }
                    this._historyScoreStand = parseInt(this._historyScoreStand)
                    let socre = Math.round(this._selfSnake._score)
                    if(this._historyScoreStand < socre){
                        this._historyScoreStand = socre;
                        cc.sys.localStorage.setItem("HISTORY_SCORE_STAND",this._historyScoreStand);
                    }
                }


                var selfname = snake.gname
                this.joystick._target = null;
                this.map._selfSnake = null;
                this.camera._target = null;
                this.m_arrSnake[snake._gid] = null;
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    let dialog = cc.director.getScene().getChildByName("Canvas").getChildByName("ReviveDialog");
                    dialog.active = true;
                    let len = dialog.getChildByName("ReviveDialogBg").getChildByName("SnakeLength").getChildByName("str1").getComponent(cc.Label);
                    let kill = dialog.getChildByName("ReviveDialogBg").getChildByName("KillLength").getChildByName("str2").getComponent(cc.Label);
                    let lable = dialog.getChildByName("ReviveDialogBg").getChildByName("ReviveBtn").getChildByName("lable").getComponent(cc.Label);
                    let name = dialog.getChildByName("ReviveDialogBg").getChildByName("nameBg").getChildByName("name").getComponent(cc.Label);
                    len.string =  Math.floor(this.selfDieData["score"]);
                    kill.string = this.selfDieData["kill"];
                    lable.string = "原长复活"
                    name.string = selfname
                }, this)));
            } else {
                let newSnakeFuncall = function (target, snake){
                    let snake_gid = snake._gid;
                    snake.recycle();
                    this.m_arrSnake[snake_gid] = null;
                    let ranID = Math.round(Math.random() * (this._ids.length-1));
                    this.newSnake(ranID,snake_gid, false);
                }
                var callFunc = cc.callFunc(newSnakeFuncall, this, snake);
                snake.node.runAction(cc.sequence(cc.delayTime(1), callFunc));
            }
        } else {
            //联网版，自身蛇弹出复活框
            if (snake._isSelf) {
                console.log("--------------------------------------- 蛇死亡后弹出");
                this._selfSnake = null;
                this.joystick._target = null;
                this.map._selfSnake = null;
                this.camera._target = null;

                let dialog = cc.director.getScene().getChildByName("Canvas").getChildByName("ReviveDialog");
                dialog.active = false
                let len = dialog.getChildByName("ReviveDialogBg").getChildByName("SnakeLength").getChildByName("str1").getComponent(cc.Label);
                let kill = dialog.getChildByName("ReviveDialogBg").getChildByName("KillLength").getChildByName("str2").getComponent(cc.Label);
                let lable = dialog.getChildByName("ReviveDialogBg").getChildByName("ReviveBtn").getChildByName("lable").getComponent(cc.Label);
                let name = dialog.getChildByName("ReviveDialogBg").getChildByName("nameBg").getChildByName("name").getComponent(cc.Label);
                len.string =  Math.floor(this.selfDieData["score"]);
                kill.string = this.selfDieData["kill"];
                lable.string = "复活"
                name.string = snake.gname

                // 2秒后自动复活
                this.aliveLable.active = true;
                this.scheduleOnce(function() {
                    console.log("---------------------------------------------- 复活操作");
                    this._isAliveTag = true
                    let messge = new slither_pb.CS_Snake();
                    messge.setCmdid(ProtoEnum.CMD_SESSION_RESTART);
                    let pb_data = messge.serializeBinary();
                    Socket.requestPB(ProtoEnum.CMD_SESSION_RESTART, ID,ROOM_ID,pb_data);
                }, 2.0);
            }
            else {
                let uid = this._snakes[snake._gid].uid
                this._snakesByUid[uid] = null
                this._snakes[snake._gid] = null;
            }
        }
    },

    //请求名字网络回调
    onChangeNickName (data) {
        console.log("-------------------------------------- CMD_NICKNAME_UPDATE_NTF onChangeNickName image:" + data.image + " uid:" + data.id);
        this._snakeNames[data.id] = data.nickname;
        this._snakeUid[data.id] = data.uid;
        this._snakeHeadImg[data.id] = data.image;
        this._snakeSex[data.id] = data.sex;
        if (this._snakes[data.id]) {
            this._snakes[data.id].gname = data.nickname;
            this._snakes[data.id].uid = data.uid;
            this._snakes[data.id].image = data.image;
            this._snakes[data.id].sex = data.sex;
        }
    },

    //更新昵称
    updateName(data) {
        let nameData = data["nickname"];
        if(!Utils.isEmptyObject(nameData)) {
            for (let i = 0; i < nameData.length; i++) {
                this._snakeNames[nameData[i]['i']] = nameData[i]['n'];
                this._snakeUid[nameData[i]['i']] = nameData[i]['u'];
                this._snakeHeadImg[nameData[i]['i']] = nameData[i]['h'];
                this._snakeSex[nameData[i]['i']] = nameData[i]['s'];
                if (this._snakes[nameData[i]['i']]) {
                    this._snakes[nameData[i]['i']].gname = nameData[i]['n'];
                    this._snakes[nameData[i]['i']].uid = nameData[i]['u'];
                    this._snakes[nameData[i]['i']].image = nameData[i]['h'];
                    this._snakes[nameData[i]['i']].sex = nameData[i]['s'];
                }
                console.log("-------------------------------------- CMD_NICKNAME_UPDATE_ACK updateName image:" + nameData[i]['h'] + " uid:" + nameData[i]['i']);
            }
        }
    },


    //死亡和加速产生的食物回调（服务器主动下发消息）
    onSyncFood (msg) {
        let foods = msg.getFoods();
        let list = foods.getFoodList();
        this.foodMgr.initFoodsByPB(list);
    },

    //加入战场时，同步所有蛇的轨迹
    onSyncTrace (msg) {
        console.log("---------------------------------onSyncTrace");
        this._firstKeyFrame = true;
        this._otherTrace = {};
        let self = this;

        let list = msg.getTracesList();
        list.forEach(traces => {
            let id = traces.getId();
            self._otherTrace[id] = [];
            let tList = traces.getTraceList();
            for (let i = 1; i < tList.length; i++) {
                let trace = tList[i];
                let info = trace.getInfoList();
                self._otherTrace[id].push(info);
            }
        });
    },

    //请求战场食物的回调（之后的食物刷新是服务器主动下发）
    onFoodNtf (data) {
        //console.log("--------------------------------------------------- onFoodNtf");
        this.foodMgr.initFoodsByNet(data.foods);
    },

    //修正时间回调
    onAdjustTime4Udp (msg) {
        //console.log("onAdjustTime4Udp");
        this._hasAdjustTime = true;
        let curTime = this.getCurMilliseconds();
        let delta = curTime - msg.getAdjusttimeresex().getTime1();
        delta /= 2;
        this._lastAverageDelay = delta;
        this._adjustTimeUdp = msg.getAdjusttimeresex().getTime2() - curTime + delta;
    },

    //帧数据处理（加入战场后，服务器主动下发）
    onFrameInfo (msg) {
        //c++搬过来的逻辑
        //console.log("-------------------------------------------------------------- onFrameInfo111111");
        this._lastRecvTime = this.getCurMilliseconds();
        let frameInfos = msg.getFrameinfos();
        if (frameInfos.hasFrametime()) {
            this._frameStartTime = frameInfos.getFrametime();
        }
        if (!this._firstKeyFrame) return;
        let recvframe = frameInfos.getFrameid();
        if (recvframe < 0) {
            //console.log("-------------------------------------------------------------- onFrameInfo recvframe < 0 return");
            return;
        }else{
            //console.log("-------------------------------------------------------------- onFrameInfo recvframe:" + recvframe);
        }

        if (recvframe < this._lastRecvFrame) {
            //console.log("-------------------------------------------------------------- onFrameInfo recvframe < this._lastRecvFrame return");
            return;
        }else{
            //console.log("-------------------------------------------------------------- onFrameInfo this._lastRecvFrame:" + this._lastRecvFrame);
        }
        //console.log("-------------------------------------------------------------- onFrameInfo222222");

        this._msgPacks.push(msg);
        let frameInfos1 = this._msgPacks[0].getFrameinfos();
        //检测死亡情况
        this.checkDeads(frameInfos1);
        //更新蛇
        this.updateSnakeParams(frameInfos1);
        this._msgPacks.shift();

        this._lastRecvFrame = recvframe;
        if (this._hasAdjustTime) {
            let curTime = this.getCurMilliseconds() + this._adjustTimeUdp;
            let delay = curTime - (this._frameStartTime + recvframe * 40);
            this._delayAccum += delay;
            this._delayCount++;
        }
    },

    onEatFoodNtf (msg) {
        //console.log("---------------------------------------onEatFoodNtf");
    },

    //服务器下发的 自身的蛇死了或其他蛇被杀了（跑出地图不算）
    onSlitherDeadNtf (msg) {
        console.log("-------------------------------------onSlitherDeadNtf");
        let deadMsg = msg.getDeadntf();
        if (deadMsg.getId() == UID) {
            if (this._deadMsg != null) {
                this._deadMsg = null;
            }
            this._deadMsg = deadMsg;
            this._killSnakeId = deadMsg.getAttacker();
            if(!Utils.isEmptyObject(this._selfSnake)){
                this._selfSnake._m_iStatus = eSnakeStatus_Dead;
                AudioMgr.playEffect("die",false);
            }
            //todo: killer snake
        } else {
            if (deadMsg.getAttacker() == UID) {
                // 击杀效果
                AudioMgr.playEffect("kill",false);
            }
            //todo: killer snake
        }
    },

    //复活键
    onReviveBtn () {
        //todo: revive
        AudioMgr.playEffect("button");
        let dialog = cc.director.getScene().getChildByName("Canvas").getChildByName("ReviveDialog");
        if (dialog.active) {
            this.scheduleOnce(function() {
                if (GAME_MODE == 0){
                    if (cc.sys.os === cc.sys.OS_ANDROID) {
                        if(GameCallPlatform.canShowAds("tanchishe2")){
                            GameCallPlatform.showAd("tanchishe2") // 调用广告接口
                        }else{
                            this.gameRoomTips("广告还没准备好")
                        }
                    }else{
                        if(GameCallPlatform.canShowAds("tanchishe2")){
                            this._isAliveTag = true
                            dialog.active = false;
                            let snake = this.newSnake(this.selfDieData["sid"], this.selfDieData["gid"], true);
                            this.joystick._target = snake.node;
                            this.map._selfSnake = snake;
                            this.camera._target = snake;
                            this._selfSnake = snake;
                            Notification.dispatch("cammerZoom");
                        }else{
                            this.gameRoomTips("广告还没准备好")
                        }
                    }
                }else {
                    console.log("---------------------------------------------- 复活操作")
                    let messge = new slither_pb.CS_Snake()
                    messge.setCmdid(ProtoEnum.CMD_SESSION_RESTART)
                    let pb_data = messge.serializeBinary()
                    Socket.requestPB(ProtoEnum.CMD_SESSION_RESTART, ID,ROOM_ID,pb_data)
                }
            }, 0.1)
        }
    },

    gameRoomTips(str){
        console.log("------------------------------------ gameroomTips:" + str)
        this.roomTips.active = true
        this.roomTips.opacity = 255
        this.roomTips.stopAllActions()
        this.roomTips.getChildByName("tipslable").getComponent(cc.Label).string = str

        this.roomTips.runAction(cc.sequence(cc.delayTime(1),cc.fadeOut(1.0), cc.callFunc(function() {
            this.roomTips.active = false
            this.roomTips.opacity = 255
        }, this)));
    },


    // 看广告回调
    showAdCall(){
        console.log("-------------------------------------------- 看广告回调 showAdCall")
        this._isAdAliveTag = true
        this._isAliveTag = true
        let dialog = cc.director.getScene().getChildByName("Canvas").getChildByName("ReviveDialog");
        dialog.active = false;
    },

    //返回键(单机)
    onReturnBtn () {
        this.exitGame("error");
    },

    //用户下线通知
    onOffLine () {

    },

    //游戏结果通知
    onGameResult (msg) {
        console.log("--------------------------------------- onGameResult 游戏结果通知")
        if(!Utils.isEmptyObject(this._selfSnake) && this._selfSnake._m_iStatus == eSnakeStatus_Normal){
            this.setResultData(this._snakes);
        }
        Notification.dispatch("setTimes","00:00"); // 倒计时置为00:00
        this.aliveLable.getComponent(cc.Label).string = "时间到！";
        this.aliveLable.active = true;
        Notification.dispatch("recordBestScore");
        this.scheduleOnce(function() {
            console.log("---------------------------------------------- 时间到展示游戏战报");
            this.reportViewCall()
        }, 1.0);
    },

    //团战结算通知
    onTeamResult () {

    },

    //团战击杀首领
    onTeamFight () {

    },

    //战场内人数
    onTeamNumber () {

    },

    getNetworkStateByNum (num) {
        if (num < 120) {
            return NetworkStateEnum.Good;
        }
        else if (num < 200) {
            return NetworkStateEnum.Medium;
        }
        else {
            return NetworkStateEnum.Poor;
        }
    },

    refreshNetwork (num) {
        //倍率
        let delay = num * 2;

        //范围限制
        if (delay < 35) {
            delay = 35;
        }
        if (delay > 999) {
            delay = 999;
        }

    },

    netDisconnect () {
        console.log("-------------------------------------netDisconnect");
    },

    SnakeMgr_CheckSelfDead () {

    },

    onRestart () {
        console.log("-----------------------------------------onRestart");
    },

    backBtnClick(){
        AudioMgr.playEffect("button");
        console.log("-------------------------------------- 点击退出对战");
        if(cc.sys.os === cc.sys.OS_ANDROID){
            if(!Utils.isEmptyObject(this._selfSnake) && this._selfSnake._m_iStatus == eSnakeStatus_Normal){
                this.setResultData(this._snakes);
            }
            GameCallPlatform.showGameCommonDialog(10086, "", "确定退出吗？", "继续玩", "退出");
        }else{
            if(!Utils.isEmptyObject(this._selfSnake) && this._selfSnake._m_iStatus == eSnakeStatus_Normal){
                this.setResultData(this._snakes);
            }
            this.exitGame("error");
        }
    },

    wholeBackBtnClick(){
        if(cc.sys.os === cc.sys.OS_ANDROID){
            if(!Utils.isEmptyObject(this._selfSnake) && this._selfSnake._m_iStatus == eSnakeStatus_Normal){
                this.setResultData(this._snakes);
            }
            if(GAME_TYPE == 3){
                this.exitGame("voiceroom")
            }else{
                this.exitGame("app");
            }
        }else{
            if(!Utils.isEmptyObject(this._selfSnake) && this._selfSnake._m_iStatus == eSnakeStatus_Normal){
                this.setResultData(this._snakes);
            }
            this.exitGame("error");
        }
    },

    // android 退出回调
    exitCommonDialog(data){
        console.log("-------------------------------------- exitCommonDialog id:" + data[0] + " yes:" + data[1]);
        if(data[0] == 10086 && data[1] == false){
            if(GAME_TYPE == 3){
                this.exitGame("voiceroom")
            }else{
                this.exitGame("error");
            }
        }
    },

    // 获取玩家关注信息
    getfollowList(){
        var uids = ""   // 玩家uid集合
        for (let i = 0; i < this._resultData.length; i++) {
            let rankData = this._resultData[i]
            if(rankData == null){
                continue;
            }
            if(uids == ""){
                uids = rankData.uid
            }else{
                uids = uids + "," + rankData.uid
            }
        }
        GameCallPlatform.getFollowState(GAME_ID,uids)
    },

    // 获取玩家段位信息
    getstateList(){
        var uids = ""   // 玩家uid集合
        for (let i = 0; i < this._resultData.length; i++) {
            let rankData = this._resultData[i]
            if(rankData == null){
                continue;
            }
            if(uids == ""){
                uids = rankData.uid
            }else{
                uids = uids + "," + rankData.uid
            }
        }
        GameCallPlatform.getStageInfo(uids,GAME_ID)
    },

    // 设置玩家关注信息
    setFollowState(info){
        //[{"uid":"100315","state":"0"},{"uid":"100316","state":"0"},{"uid":"100002","state":"0"}]
        this._followStateData = info
        for (let i = 0; i < this._resultData.length; i++) {
            let rankData = this._resultData[i]
            if(rankData == null){
                continue;
            }
            // 关注
            let followBtn = this._reportViewItemNode[i].getChildByName("followBtn")
            if(rankData.uid == ID){
                followBtn.active = false    // 自己不显示关注
            }else{
                var state = this.getFollowStateData(rankData.uid)
                if(state == 1){  // 1 是已关注  , 其它是未关注
                    followBtn.active = false
                }else{
                    followBtn.active = true
                }
            }
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;   //这个 node 节点是你的事件处理代码组件所属的节点
            clickEventHandler.component = "Game";   //这个是代码文件名
            clickEventHandler.customEventData = rankData.uid
            clickEventHandler.handler = "followBtnCall";
            var button = followBtn.getComponent(cc.Button);
            button.clickEvents.push(clickEventHandler);
        }
    },

    getFollowStateData(uid){
        for (let i = 0; i < this._followStateData.length; i++) {
            let data = this._followStateData[i]
            console.log("-------------------------------------- getFollowStateData uid:" + data.uid + " state:" + data.state)
            if(data.uid == uid){
                return parseInt(data.state)
            }
        }
    },


    // 设置玩家段位
    setStagesInfo(info){
        console.log("--------------------------------------- setStagesInfo")
        this._stateData = info
        for (let i = 0; i < this._resultData.length; i++) {
            let rankData = this._resultData[i]
            if(rankData == null){
                continue;
            }
            // 段位
            let dan = this.getStageData(rankData.uid)
            var lvdan = this._reportViewItemNode[i].getChildByName("danimg")
            lvdan.getComponent(cc.Sprite).spriteFrame = this.danFrame[dan - 1]

            // 星星
            var star = this.getlevelData(rankData.uid)
            for (let i = 0; i < star; i++) {
                var node = new cc.Node('friendplaylv')
                node.parent = lvdan
                node.scale = 0.8
                node.setPosition(40 + 40 * i,0)
                var nodeSprite = node.addComponent(cc.Sprite)
                nodeSprite.spriteFrame = this.danFrame[8]
            }

            // 经验值
            var jyan = this._reportViewItemNode[i].getChildByName("danimg").getChildByName("jyan").getComponent(cc.Label)
            //jyan.string = this.getPkScoreData(rankData.uid)
            let rank = i + 1
            if(rank == 1){
                jyan.string = 10
            }else if(rank == 2){
                jyan.string = 5
            }else if(rank == 3){
                jyan.string = 3
            }else if(rank >= 4){
                jyan.string = 2
                if(rank == this._resultData.length){
                    jyan.string = 0
                }
            }
        }

    },

    getStageData(uid){
        for (let i = 0; i < this._stateData.length; i++) {
            let data = this._stateData[i]
            console.log("-------------------------------------- getStateData uid:" + data.uid + " stage:" + data.stage)
            if(data.uid == uid){
                return parseInt(data.stage)
            }
        }
    },


    getPkScoreData(uid){
        for (let i = 0; i < this._stateData.length; i++) {
            let data = this._stateData[i]
            console.log("-------------------------------------- getPkScoreData uid:" + data.uid + " pk_score:" + data.pk_score)
            if(data.uid == uid){
                return data.pk_score
            }
        }
    },

    getlevelData(uid){
        for (let i = 0; i < this._stateData.length; i++) {
            let data = this._stateData[i]
            console.log("-------------------------------------- getlevelData uid:" + data.uid + " level:" + data.level)
            if(data.uid == uid){
                return data.level
            }
        }
    },

    // 战报界面
    reportViewCall(){
        this.reportView.active = true
        let backvoiceroom = this.reportView.getChildByName("bg").getChildByName("backVoiceRoomBtn")
        if(GAME_TYPE == 3){
            backvoiceroom.active = true
        }else{
            backvoiceroom.active = false
        }
        this.sortRankData()
        let content = this.reportScrollView.content
        content.removeAllChildren(true)
        content.height = 430
        let totalCount = this._resultData.length         //  显示的总数量
        let spacing = 5                                  // 间隔
        content.height = totalCount * (this.reportItem.height + spacing) + spacing

        var function_call = [];
        var self = this
        this._reportViewItemNode = [];
        for (let i = 0; i < this._resultData.length; i++) {
            let rankData = this._resultData[i]
            if(rankData == null){
                continue;
            }

            this._reportViewItemNode[i] = cc.instantiate(this.reportItem)
            this._reportViewItemNode[i].active = true

            // 头像
            console.log("------------------------------------------------ reportViewCall rankData.image:" + rankData.image)
            function_call[i] = function (texture) {
                var head = self._reportViewItemNode[i].getChildByName("head").getChildByName("headimg").getComponent(cc.Sprite)
                head.spriteFrame = new cc.SpriteFrame(texture)
            };
            this.creatHeadImg(rankData.image,function_call[i]);

            // 名字
            let name = this._reportViewItemNode[i].getChildByName("name").getComponent(cc.Label)
            name.string = Utils.cutstr(5,rankData.nick);

            // 性别
            if(rankData.sex == 1){ // 男
                let sex_n = this._reportViewItemNode[i].getChildByName("sex_n")
                sex_n.active = true
            }else{ // 女
                let sex_v = this._reportViewItemNode[i].getChildByName("sex_v")
                sex_v.active = true
            }

            // 名次
            let rank = this._reportViewItemNode[i].getChildByName("rankNum").getComponent(cc.Label)
            let ranknum = i + 1
            rank.string = ranknum
            if(ranknum == 1){
                let rank1Bg = this._reportViewItemNode[i].getChildByName("rank1Bg")
                rank1Bg.active = true
            }else if(ranknum == 2){
                let rank2Bg = this._reportViewItemNode[i].getChildByName("rank2Bg")
                rank2Bg.active = true
            }else if(ranknum == 3){
                let rank3Bg = this._reportViewItemNode[i].getChildByName("rank3Bg")
                rank3Bg.active = true
            }

            // 背景
            let selfbg = this._reportViewItemNode[i].getChildByName("selfBg")
            if(rankData.uid == ID){
                selfbg.active = true
            }else{
                selfbg.active = false
            }
            console.log("--------------------------------- reportViewCall rankData.uid:" + rankData.uid)


            // 长度
            let length = this._reportViewItemNode[i].getChildByName("length").getComponent(cc.Label)
            length.string = rankData.score

            // 击杀
            let kill = this._reportViewItemNode[i].getChildByName("killnum").getComponent(cc.Label)
            kill.string = rankData.kill

            content.addChild(this._reportViewItemNode[i]);
            this._reportViewItemNode[i].setPosition(0, -this._reportViewItemNode[i].height * (0.5 + i) - spacing * (i + 1));

        }

        // 设置关注状态
        this.getfollowList()
        // 设置段位信息
        this.getstateList()
    },


    // 创建头像
    creatHeadImg(url,function_call){
        console.log("----------------------------------------- load url:" + url);
        if(url == ""){
            return
        }
        //url = "http://xiaoyouxi-1251952444.image.myqcloud.com/uploads_20181102_6ff5cacf54de258b524147158373ddd9.jpg";
        cc.loader.load(url, function (error,texture) {
            if(error){
                console.log("----------------------------图片下载失败,再次下载");
                cc.loader.load({url:url,type:'jpg'}, function (error, texture){
                    if(error){
                        console.log("----------------------------图片下载失败");
                    }else{
                        console.log("----------------------------图片下载成功");
                        if(function_call){
                            function_call(texture);
                        }
                    }
                });
            }else{
                console.log("----------------------------图片下载成功");
                if(function_call){
                    function_call(texture);
                }
            }
        });
    },

    // 再来一局
    againGameBtnCall(){
        AudioMgr.playEffect("button")
        console.log("---------------------------------------- 再来一局")
        this.exitGame("again")
    },

    // 返回语音房
    backVoiveRoomBtnCall(){
        AudioMgr.playEffect("button")
        console.log("---------------------------------------- 返回语音房")
        if(cc.sys.os === cc.sys.OS_ANDROID){
            this.exitGame("voiceroom")
        }else{
            this.exitGame("error")
        }
    },

    // 分享游戏
    shareBtnCall(){
        console.log("---------------------------------------- 分享游戏")
        AudioMgr.playEffect("button")
        GameCallPlatform.shareAloneGame(GAME_ID)
    },

    // 好友关注
    followBtnCall(event, customEventData){
        AudioMgr.playEffect("button")
        var playeruid = customEventData
        console.log("------------------------------------------ playeruid:" + playeruid)
        var node = event.target;
        var button = node.getComponent(cc.Button);
        button.interactable = false
        GameCallPlatform.followPlayer(playeruid,false)
    },

    // 退出游戏
    exitGame(flag){
        console.log("------------------------------------------ exitGame")
        AudioMgr.playEffect("button")
        AudioMgr.stopAllEffects();
        AudioMgr.stopMusic();
        // 退出背景图，避免黑屏
        var backBg = cc.director.getScene().getChildByName("backBg");
        backBg.active = true;
        this.reportView.active = false

        this.unschedule(this._wifiCall);
        Notification.removeListenersByObj(this);
        cc.find("Canvas").destroy();
        cc.find("Food").destroy();
        cc.find("Snakes").destroy();
        cc.find("Mask").destroy();
        cc.find("Camera").destroy();
        cc.find("Game/Map").destroy();
        cc.find("Game/Edge").destroy();
        cc.textureCache.removeAllTextures();
        GameCallPlatform.backToLastPage()  // 关闭语音

        this.scheduleOnce(function() {
            if (GAME_MODE == 1){
                Socket.request(ProtoEnum.CMD_SESSION_STOP, 0, ID, ROOM_ID, null);
                Socket.udpRequest(ProtoEnum.CMD_SOCKET_CLOSE, 0, UID, ROOM_ID, {}, PORT_UDP);
            }
            if(flag == "voiceroom"){
                var frameSize = cc.view.getFrameSize()
                if(frameSize.width > frameSize.height){
                    cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT)
                    cc.view.setFrameSize(frameSize.height,frameSize.width)
                }
                G_VoiceGameExit = true
                let data  = GameCallPlatform.GetGameData()
                let parseData = JSON.parse(data)
                GameCallPlatform.sendDialogChatData("",parseData.gameType)
            }else if(flag == "onStartSnake_error"){
                if(GAME_TYPE == 3){
                    var frameSize = cc.view.getFrameSize();
                    if(frameSize.width > frameSize.height){
                        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT)
                        cc.view.setFrameSize(frameSize.height,frameSize.width)
                    }
                    G_VoiceGameExit = true
                    let data  = GameCallPlatform.GetGameData()
                    let parseData = JSON.parse(data)
                    GameCallPlatform.sendDialogChatData("",parseData.gameType)
                }else{
                    cc.director.loadScene("Login")
                }
            }else if(flag == "error"){
                cc.director.loadScene("Login")
            }else if(flag == "again"){
                if(GAME_TYPE == 3){
                    GameCallPlatform.sendleaveRoom()
                }
                GAME_TYPE = 1
                cc.director.loadScene("Battle")
            }else if(flag == "app"){
                var frameSize = cc.view.getFrameSize();
                if(frameSize.width > frameSize.height){
                    cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT)
                    cc.view.setFrameSize(frameSize.height,frameSize.width)
                }
                G_VoiceGameExit = true
                let data  = GameCallPlatform.GetGameData()
                let parseData = JSON.parse(data)
                GameCallPlatform.sendDialogChatData("",parseData.gameType)
            }else{
                cc.director.loadScene("Login")
            }
        }, 0.1);
    },

    // 游戏结束数据
    setResultData(snakes){
        if(GAME_MODE == 0){  // 单机
            if(cc.sys.os === cc.sys.OS_ANDROID){
                let socre = Math.round(this._selfSnake._score)
                if(HISTORY_SCORE_STAND_DATA < socre){
                    HISTORY_SCORE_STAND_DATA = socre;
                }
                this.uploadBestGameData(HISTORY_SCORE_STAND_DATA,HISTORY_SCORE_DATA)
            }else{
                this._historyScoreStand = cc.sys.localStorage.getItem("HISTORY_SCORE_STAND");
                if(this._historyScoreStand == null){
                    this._historyScoreStand = 0;
                }
                this._historyScoreStand = parseInt(this._historyScoreStand);
                let socre = Math.round(this._selfSnake._score)
                if(this._historyScoreStand < socre){
                    this._historyScoreStand = socre;
                    cc.sys.localStorage.setItem("HISTORY_SCORE_STAND",this._historyScoreStand);
                }
            }
        }else{  // 联网
            if(cc.sys.os === cc.sys.OS_ANDROID){
                let selfsnake = snakes[UID]
                if(Utils.isEmptyObject(selfsnake)){
                    return
                }
                this._resultData = [];

                for (const id in snakes) {
                    let snake = snakes[parseInt(id)]
                    if(!Utils.isEmptyObject(snake)){
                        let data = {};
                        if(snake._isSelf){
                            data.uid = ID;
                            let socre = Math.round(snake._score);
                            if(HISTORY_SCORE_DATA < socre){
                                HISTORY_SCORE_DATA = socre;
                                this.uploadBestGameData(HISTORY_SCORE_STAND_DATA,HISTORY_SCORE_DATA)
                            }
                        }else{
                            data.uid = snake.uid;
                        }
                        data.nick = snake.gname;
                        data.rank = snake.rank;
                        data.score = Math.round(snake._score);
                        data.image = snake.image;
                        data.sex = snake.sex || 0;
                        data.kill = snake._kill
                        this._resultData.push(data);
                    }
                }
            }else{
                let selfsnake = snakes[UID]
                if(Utils.isEmptyObject(selfsnake)){
                    return
                }
                this._resultData = [];
                this._historyScore = cc.sys.localStorage.getItem("HISTORY_SCORE");
                if(this._historyScore == null){
                    this._historyScore = 0;
                }
                this._historyScore = parseInt(this._historyScore);

                for (const id in snakes) {
                    let snake = snakes[parseInt(id)]
                    if(!Utils.isEmptyObject(snake)){
                        let data = {};
                        if(snake._isSelf){
                            data.uid = ID;
                            let socre = Math.round(snake._score);
                            if(this._historyScore < socre){
                                this._historyScore = socre;
                                cc.sys.localStorage.setItem("HISTORY_SCORE",this._historyScore);
                            }
                        }else{
                            data.uid = snake.uid;
                        }
                        data.nick = snake.gname;
                        data.rank = snake.rank;
                        data.score = Math.round(snake._score);
                        data.image = snake.image;
                        data.sex = snake.sex || 0;
                        data.kill = snake._kill
                        this._resultData.push(data);
                    }
                }
            }
        }
    },

    // 获取最高分数据（通过android平台获取）
    setBestGameData(data){
        if(data && data.standBestScore){
            HISTORY_SCORE_STAND_DATA = data.standBestScore
        }else{
            HISTORY_SCORE_STAND_DATA = 0
        }

        if(data && data.netBestScore){
            HISTORY_SCORE_DATA = data.netBestScore
        }else{
            HISTORY_SCORE_DATA = 0
        }
        console.log("-------------------------------------- Bestscore setBestGameData HISTORY_SCORE_STAND_DATA:" + HISTORY_SCORE_STAND_DATA)
        console.log("-------------------------------------- Bestscore setBestGameData HISTORY_SCORE_DATA:" + HISTORY_SCORE_DATA)
    },


    // 上传最高分数据（通过android平台上传）
    uploadBestGameData(standdata,netdata){
        let customData = {};
        customData["standBestScore"] = standdata
        customData["netBestScore"] = netdata
        let data = {
            "customData":customData,
        };
        GameCallPlatform.setGameJsonData(GAME_ID,JSON.stringify(data))
    },


    // 排名排序
    sortRankData(){
        // 从大到小排序
        for(let i = 0; i< this._resultData.length - 1; i++){
            for(let j = 0; j< this._resultData.length - 1 - i; j++){
                if(this._resultData[j].score < this._resultData[j+1].score){
                    var temp = this._resultData[j];
                    this._resultData[j] = this._resultData[j+1];
                    this._resultData[j+1] = temp;
                }
            }
        }
        let strData = JSON.stringify(this._resultData)
        console.log("------------------------------------- 排名排序 data: " + strData)
    },


    // 网络断开了
    netBreak(){
        console.log("------------------------------------- 网络断开了");
        if(cc.sys.os === cc.sys.OS_ANDROID){
            this.netStatusTips(false);
        }
    },


    // 网络重联上
    netConnect(){
        console.log("------------------------------------- 网络重联上");
        if(cc.sys.os === cc.sys.OS_ANDROID){
            this.netStatusTips(true);
        }
    },

    // 网络状态提示
    netStatusTips(flag){
        if(flag == true){
            this._netconnectNode.active = false;
            this.unschedule(this._netconnectTimeCb);
            this._netconnectTimeCb = null;
            this.snakeConnect()
        }else{
            this._netconnectNode.active = true;
            let dianflag = 0;
            let time = 0;
            this._netconnectTimeCb = function() {
                time ++;
                if(time > 60){
                    console.log("--------------------------- 重连失败退出房间");
                    this.unschedule(this._netconnectTimeCb);
                    this._netconnectTimeCb = null;

                    this.scheduleOnce(function() {
                        this.netconnectTips.node.position = cc.v2(-145,0);
                        this.netconnectTips.string = "重连失败,退出游戏";
                    }, 0.1);
                    this.scheduleOnce(function() {
                        this._netconnectNode.active = false;
                        if(GAME_TYPE == 3){
                            this.exitGame("voiceroom")
                        }else{
                            this.exitGame("error");
                        }
                    }, 2.0);
                }
                if(dianflag == 0){
                    this.netconnectTips.string = "正在重联网络.";
                    dianflag = 1;
                }else if(dianflag == 1){
                    this.netconnectTips.string = "正在重联网络..";
                    dianflag = 2;
                }else if(dianflag == 2){
                    this.netconnectTips.string = "正在重联网络...";
                    dianflag = 0;
                }
            }
            this.schedule(this._netconnectTimeCb, 0.5);
        }
    },

    // 贪吃蛇重联
    snakeConnect(){
        this.exitGame("error")
    },

    // 显示玩家的连麦状态  （1连麦失败、2开麦、3闭麦） //(zhengyi连麦处理)
    maiStatus(data){
        let userId = data.userId
        let status = data.status

        let snake = this._snakesByUid[userId]
        if(!Utils.isEmptyObject(snake)){
            console.log("------------------------------------------------------ Mai 显示其它玩家的连麦状态 userId:" + userId + " status:" + status)
            //snake.setMaiStatus(status)  // 该功能暂时屏蔽
            if(userId == ID){
                this._selfMaiStatus = status
                Notification.dispatch("setmaiSelfStatus",status);
            }
        }else{
            console.log("------------------------------------------------------ Mai 显示其它玩家的连麦状态 snake is null")
        }
    },

    // 设置活跃用户 //(zhengyi连麦处理)
    maiTalkingPlayer(userId){
        let snake = this._snakesByUid[userId]
        if(!Utils.isEmptyObject(snake)){
            console.log("------------------------------------------------------ Mai 设置活跃用户 userId:" + userId)
            snake.setMaiTaklingStatus()
        }else{
            console.log("------------------------------------------------------ Mai 设置活跃用户 snake is null")
        }
    },


    //分享
    shareBntCall(){
        console.log("----------------------------------------- 分享游戏")
        AudioMgr.playEffect("button")
        GameCallPlatform.shareAloneGame(GAME_ID)
    },

    // 测试按钮
    maistatusceshi(){
    },



});
