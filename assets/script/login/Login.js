require("../network/Socket");

const c_getMoveSteps = function(start, end) {
    let gap = cc.pSub(end, start);
    return [cc.pAdd(start, cc.pMult(gap, 0.25)), cc.pAdd(start, cc.pMult(gap, 0.5)), cc.pAdd(start, cc.pMult(gap, 0.75)), end];
};


cc.Class({
    extends: cc.Component,

    properties: {
        atlas: {
            default: null,
            type: cc.SpriteAtlas,
            displayName: "设置图集"
        },

        snakeatlas: {
            default: null,
            type: cc.SpriteAtlas,
            displayName: "蛇身图集"
        },

        //预制件集
        _prefabs: {
            default: {},
        },

        singleLineText: {
            default: null,
            type: cc.EditBox,
            displayName: "singleLineText",
        },

        // 玩家名字
        myName:{
            default:null,
            type:cc.Label,
            displayName: "myName",
        },

        // 玩家段位
        playLv:{
            default:null,
            type:cc.Node,
            displayName: "playLv",
        },

        // 玩家头像
        headImg:{
            default:null,
            type:cc.Sprite,
            displayName: "headImg",
        },

        // 头像名字设置界面名字过程提示
        editBoxTips:{
            default:null,
            type:cc.Node,
            displayName: "editBoxTips",
        },

        // 头像名字设置界面名字过程提示内容
        editBoxTipsLable:{
            default:null,
            type:cc.Label,
            displayName: "editBoxTipsLable",
        },

        // 玩家ID
        playerid:{
            default:null,
            type:cc.Label,
            displayName: "playerid",
        },

        // 设置dialog
        settingDialog:{
            default:null,
            type:cc.Node,
            displayName: "settingDialog",
        },

        // 设置框
        settingDialogBg:{
            default:null,
            type:cc.Node,
            displayName: "settingDialogBg",
        },

        // 设置界面中切换的操作的图片
        operationImg:{
            default:null,
            type:cc.Sprite,
            displayName: "operationImg",
        },

        operationImg1:{
            default:null,
            type:cc.Sprite,
            displayName: "operationImg1",
        },

        operationImg2:{
            default:null,
            type:cc.Sprite,
            displayName: "operationImg2",
        },

        // 设置头像dialog
        headDialog:{
            default:null,
            type:cc.Node,
            displayName: "headDialog",
        },

        // 设置头像框
        headDialogBg:{
            default:null,
            type:cc.Node,
            displayName: "headDialogBg",
        },

        // toggle按钮
        musicToggleBtn:{
            default:null,
            type:cc.Toggle,
            displayName: "musicToggleBtn",
        },

        // 网络状态提示
        netTips:{
            default:null,
            type:cc.Node,
            displayName: "netTips",
        },

        soundToggleBtn:{
            default:null,
            type:cc.Toggle,
            displayName: "soundToggleBtn",
        },

        operationToggleLeftBtn:{
            default:null,
            type:cc.Toggle,
            displayName: "operationToggleLeftBtn",
        },

        operationToggleRightBtn:{
            default:null,
            type:cc.Toggle,
            displayName: "operationToggleRightBtn",
        },

        snakeimg:{
            default:null,
            type:cc.Node,
            displayName: "snakeimg",
        },

        // 创建房间邀请好友
        createRoomView:{
            default:null,
            type:cc.Node,
            displayName: "createRoomView",
        },

        // 房间名字
        roomname:{
            default:null,
            type:cc.Label,
            displayName: "roomname",
        },

        // 快速进入房间View
        quickEnterView:{
            default:null,
            type:cc.Node,
            displayName: "quickEnterView",
        },

        exitroomBg:{
            default:null,
            type:cc.Node,
            displayName: "exitroomBg",
        },

        playView:{
            default: null,
            type: cc.Prefab,
            displayName: "playView",
        },

        itemTemplate: { // item template to instantiate other items
            default: null,
            type: cc.Node,
            displayName: "itemTemplate",
        },

        shopItemTemplate: { // item template to instantiate other items
            default: null,
            type: cc.Node,
            displayName: "shopItemTemplate",
        },

        ownBtn:{
            default: null,
            type: cc.Node,
            displayName: "ownBtn",
        },

        scrollView: {
            default: null,
            type: cc.ScrollView,
            displayName: "scrollView",
        },

        shopScrollView: {
            default: null,
            type: cc.ScrollView,
            displayName: "shopScrollView",
        },

        editBoxTipsLable:{
            default:null,
            type:cc.Label,
            displayName: "editBoxTipsLable",
        },

        friendsLable:{
            default:null,
            type:cc.Label,
            displayName: "friendsLable",
        },

        _bodys: {               // 身体节点集
            default: [],
            type: cc.Node
        },

        _head: {                 // 头
            default: null,
            type: cc.Node,
        },

        _tail: {                 // 尾巴
            default: null,
            type: cc.Node,
        },

        loading:{
            default: null,
            type: cc.Node,
        },

        beginLoading:{
            default: null,
            type: cc.Node,
        },

        createRoomTips:{
            default: null,
            type: cc.Node,
        },

        inviteRoomTips:{
            default: null,
            type: cc.Node,
        },

        friendsBtn:{
            default:null,
            type: cc.Button,
            displayName: "friendsBtn",
        },

        onlineBtn:{
            default:null,
            type: cc.Button,
            displayName: "onlineBtn",
        },

        friendsBtnFrame: {
            default: [],
            type: cc.SpriteFrame,
            displayName: "friendsBtnFrame",
        },

        shopheaditemFrame: {
            default: [],
            type: cc.SpriteFrame,
            displayName: "shopheaditemFrame",
        },

        // 设置框
        shopView:{
            default:null,
            type:cc.Node,
            displayName: "shopView",
        },

        // 段位frame
        danFrame:{
            default: [],
            type: cc.SpriteFrame,
            displayName: "danFrame",
        },

        starBar:{
            default:null,
            type:cc.ProgressBar,
            displayName: "starBar",
        },

        // 测试支付回调
        payTips:{
            default: null,
            type: cc.Label,
            displayName: "payTips",
        },

        _netState:null,
        _reConnect:true,
        _quickEnterNum:0,           // 输入的房间号数量
        _quickEnterNumString:"",    // 房间号字符
        _houseId:null,             // 房主ID
        _roomNum:0,                 // 房间人数
        _friendsType:0,              // 0好友 1在线好友
        _shopowntype:0,             // 0全部 1拥有的
        _shopInfo:null,             // 商城信息
        _shopOwnInfo:[],            // 拥有的信息
        _skinidAd:0,                // 某个皮肤对应的广告
        _friendsList:[],            // 好友列表
        _friendsOnLineList:[],      // 在线好友
        _selfHeadUrl:"",            // 玩家头像地址
        _adShowNum:0,               // 皮肤广告次数
        _inviteCreateRoom:false,    // 是否为被邀请组队
        _roomPlayTag:[],            // 房间玩家座位标签
        _adshowflag:true,          // 广告10s冷却标记
        _adshowflagmiao:10,         // 10s 标记
        _backflag:true,            // 返回标记

        // 被邀请进房间玩家的数据（进入后台后需要用到）
        _inviteUserid:0,
        _inviteName:"",
        _inviteHead:"",
        _inviteFlag:false,           // 是否有人被邀请
    },


    onLoad () {
        console.log("--------------------------------------------------- 贪吃蛇游戏js端启动");
        var self = this;
        cc.director.setDisplayStats(false); // 显示帧率
        if(cc.sys.os === cc.sys.OS_ANDROID){
            // 横屏处理
            var ResolutionPolicy = cc.ResolutionPolicy;
            var frameSize = cc.view.getFrameSize();
            console.log("----------------------------------  游戏屏幕 frameSize width = " + frameSize.width + ",height = " + frameSize.height);
            if(frameSize.width < frameSize.height){
                console.log("----------------------------------  游戏屏幕横屏处理" );
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                cc.view.setFrameSize(frameSize.height,frameSize.width);
                cc.view.setDesignResolutionSize(1136,640, ResolutionPolicy.FIXED_HEIGHT);
            }
        }

        this.registerNotification();
        this.onInit();

        if (this.settingDialog.active) {
            this.settingDialog.active = false;
        }

        // Creator 中始终吞噬，只要你的上层节点注册了 touch 事件，下面的节点接收不到（除非是父节点通过冒泡）
        this.settingDialog.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log('settingDialog is Mouse down');
        });

        this.headDialog.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log('headDialog is Mouse down');
        });


        cc.game.on(cc.game.EVENT_HIDE, function(){
            console.log("----------------------------------------- 进入后台");
            BACKSTAGE = true
        },this);

        cc.game.on(cc.game.EVENT_SHOW, function(){
            console.log("---------------------------------------- 后台回来")
            if(self._inviteFlag){
                BACKSTAGE = false
                console.log("------------------------------------- 有人被邀请进房间")
                self._inviteFlag = false
                self.setRoomPlayerView(self._inviteUserid,self._inviteName,self._inviteHead,self._roomNum)
            }
        },this);


        // 背景音乐
        if(LocalManager.getBool("musicToggle") == null){
            LocalManager.setBool("musicToggle",true);
            this.musicToggleBtn.isChecked = true;
            cc.log("播放音乐");
        }else if(LocalManager.getBool("musicToggle") == true){
            this.musicToggleBtn.isChecked = true;
            cc.log("播放音乐");
        }else if(LocalManager.getBool("musicToggle") == false){
            this.musicToggleBtn.isChecked = false;
            cc.log("关闭音乐");
        }

        // 按钮及音效
        if(LocalManager.getBool("soundToggle") == null){
            LocalManager.setBool("soundToggle",true);
            this.soundToggleBtn.isChecked = true;
            cc.log("播放音效");
        }else if(LocalManager.getBool("soundToggle") == true){
            this.soundToggleBtn.isChecked = true;
            cc.log("播放音效");
        }else if(LocalManager.getBool("soundToggle") == false){
            this.soundToggleBtn.isChecked = false;
            cc.log("播放音效");
        }

        //默认全屏操作
        if(LocalManager.getString("operation") == null) {
            LocalManager.setString("operation","left");
            this.operationToggleLeftBtn.isChecked = true;
            this.operationToggleRightBtn.isChecked = false;

            let img1 = this.settingDialogBg.getChildByName("setImg").getChildByName("img1")
            let img2 = this.settingDialogBg.getChildByName("setImg").getChildByName("img2")
            img1.active = true
            img2.active = true
            let img3 = this.settingDialogBg.getChildByName("setImg").getChildByName("img3")
            let img4 = this.settingDialogBg.getChildByName("setImg").getChildByName("img4")
            img3.active = false
            img4.active = false
        }else if(LocalManager.getString("operation") == "left"){
            this.operationToggleLeftBtn.isChecked = true;
            this.operationToggleRightBtn.isChecked = false;

            let img1 = this.settingDialogBg.getChildByName("setImg").getChildByName("img1")
            let img2 = this.settingDialogBg.getChildByName("setImg").getChildByName("img2")
            img1.active = true
            img2.active = true
            let img3 = this.settingDialogBg.getChildByName("setImg").getChildByName("img3")
            let img4 = this.settingDialogBg.getChildByName("setImg").getChildByName("img4")
            img3.active = false
            img4.active = false
        }else if(LocalManager.getString("operation") == "right"){
            this.operationToggleLeftBtn.isChecked = false;
            this.operationToggleRightBtn.isChecked = true;

            let img1 = this.settingDialogBg.getChildByName("setImg").getChildByName("img1")
            let img2 = this.settingDialogBg.getChildByName("setImg").getChildByName("img2")
            img1.active = false
            img2.active = false
            let img3 = this.settingDialogBg.getChildByName("setImg").getChildByName("img3")
            let img4 = this.settingDialogBg.getChildByName("setImg").getChildByName("img4")
            img3.active = true
            img4.active = true
        }

    },

    // 注册监听事件
    registerNotification(){
        Notification.on(ProtoEnum.CMD_USER_LOGIN_ACK + "", this.onLoginCb, this);
        Notification.on(ProtoEnum.CMD_USER_HEARTBEAT_ACK + "", this.onHeartbeatAck, this);
        Notification.on("commonDialog", this.exitCommonDialog, this);     // 退出回调
        Notification.on("E_LOGIN_INFO_DONE", this.setSnakeId, this);
        Notification.on("showAdCall", this.showAdCall, this);
        Notification.on("setFriendList", this.setFriendsList, this);
        Notification.on("setStagesInfo", this.setStagesInfo, this);
        Notification.on("payResultCall", this.payResultCall, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TEAM_SESSION_NTF + "msg", this.onSessionNtf, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TEAM_CREATE_ACK + "msg", this.Ack_TeamCreate, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TEAM_DESTORY_ACK + "msg", this.Ack_TeamDestory, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TEAM_DESTORY_NTF + "msg", this.Ntf_TeamDestory, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TEAM_EXIT_NTF + "msg", this.Ntf_TeamExit, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TEAM_QUICKENTER_ACK + "msg", this.Ack_TeamQuickEnter, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TEAM_ACCEPT_ACK + "msg", this.Ack_TeamInviteAccept, this);
        Notification.on(slither_pb.CS_CMD_ID.SC_CMD_TEAM_ACCEPT_NTF + "msg", this.Ntf_TeamInviteAccept, this);
    },

    // start 回调函数会在组件第一次激活前，也就是第一次执行 update 之前触发。onLoad 总是会在任何 start 方法调用前执行
    start () {
        Socket.init();
        if(cc.sys.os === cc.sys.OS_WINDOWS){
            //console.log("------------------------------------- start 请求连接服务器");
            Socket.connect(1, ID, 1,IP_TCP,PORT_TCP); // 请求连接服务器
            this.onCheckNetStatus();
        }
    },

    //update (dt) {},

    onDestroy () {
        Notification.removeListenersByObj(this);
    },

    onInit(){
        console.log("-------------------------------------- 初始化数据");
        let self = this
        this._quickEnterNum = 0
        this._quickEnterNumString = ""
        this._roomNum = 0
        this._friendsType = 0
        this._shopowntype = 0           // 0全部 1拥有的
        this._shopInfo = null
        this._shopOwnInfo = []
        this._friendsList = []
        this._friendsOnLineList = []
        this._selfHeadUrl = ""
        this._adShowNum = LocalManager.getInt("adShowNum")
        this._inviteCreateRoom = false
        this._adshowflag = true
        this._adshowflagmiao = 10
        this._roomPlayTag = []
        this._backflag = true
        this._inviteFlag = false
        this._inviteUserid = 0
        this._inviteName = ""
        this._inviteHead = ""
        if(this._adShowNum == null){
            this._adShowNum = 0
            LocalManager.setInt("adShowNum",0)
        }
        //LocalManager.clear(); // 清理数据

        // 音乐音效预加载
        AudioMgr.load("bgm");
        AudioMgr.load("button");
        AudioMgr.load("die");
        AudioMgr.load("kill");
        AudioMgr.load("countdown");
        AudioMgr.load("countdown2");
        SNAKE_ID = LocalManager.getInt("SNAKETAG");
        if(SNAKE_ID == null){
            SNAKE_ID = 1; // 默认皮肤
            LocalManager.setInt("SNAKETAG",SNAKE_ID);
        }

        console.log("---------------------------------------------- SNAKE_ID:" + SNAKE_ID)
        if(cc.sys.os === cc.sys.OS_WINDOWS){
            ID = 100001
            PHP_ID = LocalManager.getInt("PHP_ID");
            if (PHP_ID == null){
                this.NewPlayer();
            }
            Notification.dispatch("E_LOGIN_INFO_DONE",ID);

            this.onheadflag = LocalManager.getInt("onheadflag");
            if (this.onheadflag == null){
                LocalManager.setInt("onheadflag",1);
                this.onheadflag = 1;
            }

            var name = LocalManager.getString("name");
            if (name !== null){
                this.myName.string = name;
                GameConfig.getInstance().myName = name;
            }else{
                this.myName.string = "游客" + ID
                GameConfig.getInstance().myName = "游客" + ID
            }

            GameCallPlatform.getStageInfo()
        }else if(cc.sys.os === cc.sys.OS_ANDROID){
            // PHP_ID = LocalManager.getInt("PHP_ID");
            // if (PHP_ID == null){
            //     console.log("---------------------------------------------- NewPlayer")
            //     this.NewPlayer();
            // }
            let data  = GameCallPlatform.GetGameData();
            console.log("------------------------------------------------ GetGameData:" + data)
            let parseData = JSON.parse(data);
            if(parseData){
                let id = parseInt(parseData.uid);
                let userData = parseData.userDate; // 其他玩家的数据
                userData.forEach(info => {
                    if(info.uid == id){
                        ID = id
                        Notification.dispatch("E_LOGIN_INFO_DONE",ID);
                        GameConfig.getInstance().myName = info.name;
                        this.myName.string = info.name;
                        let function_call = function (texture) {
                            self.headImg.spriteFrame = new cc.SpriteFrame(texture)
                        };
                        this._selfHeadUrl = info.headImg
                        this.creatHeadImg(info.headImg,function_call)
                        // 获取排位信息
                        GAME_ID = parseData.gameId
                        GameCallPlatform.getStageInfo(ID,GAME_ID)

                        // 判断玩家是不是被邀请或从语音房进房间的(从平台获取数据) 初次进游戏
                        if(FRIST_GAME){
                            FRIST_GAME = false
                            console.log("----------------------------------- 判断玩家是不是被邀请或从语音房进房间的 isTeam:" + parseData.isTeam + " roomId:" + parseData.roomId + " fromGo:" + parseData.fromGo)
                            if(parseData.isTeam){
                                if(parseData.roomId == 0){
                                    console.log("----------------------------------- 玩家被邀请进游戏 roomId:0 房间不存在,玩家正常进游戏")
                                }else{
                                    console.log("----------------------------------- 玩家被邀请进游戏 roomId:" + parseData.roomId)
                                    this.Req_TeamInviteAccept(parseData.roomId)
                                }
                            }else{
                                if(parseData.fromGo){
                                    console.log("----------------------------------- 玩家从语音房进入游戏")
                                    this.beginLoading.active = true
                                    this.beginLoading.on(cc.Node.EventType.TOUCH_START, function (event) {
                                        console.log('beginLoading is Mouse down');
                                    });
                                    this.voiceRoomGameBegin()
                                }else{
                                    console.log("----------------------------------- 玩家正常进游戏")
                                }
                            }
                        }
                    }
                });

                if(parseData.gameShowAd == null){
                    console.log("-------------------------------------------- gameShowAd is null CloseLoadingDialog")
                    GameCallPlatform.CloseLoadingDialog();
                }else{
                    var gameShowAd = parseInt(parseData.gameShowAd);    //1有广告  0没广告
                    console.log("-------------------------------------- gameShowAd:" + gameShowAd)
                    if(gameShowAd == 0){
                        GameCallPlatform.CloseLoadingDialog();
                    }
                }
            }else{
                console.log("----------------------------------- 玩家正常进游戏AAAAAAAAA")
            }
        }
    },


    setSnakeId(id){
        this.playerid.string = "ID:" + id;
    },

    // 注册新用户
    NewPlayer(){
        let timeid = Math.floor(this.getCurMilliseconds());
        let uid = "snake" + timeid;
        let ip = "";
        let mac = "";
        G_IMEI = "IMEI-" +  Math.floor(this.getCurMilliseconds());
        let postdata = null;
        let channel = "soulgame";
        let information = G_IMEI + channel + uid + ip + mac;
        let sign = md5fun.sumhexa(information);
        postdata = Utils.stringFormat("channel={0}&uid={1}&imei={2}&ip={3}&mac={4}&sign={5}",channel, uid, G_IMEI, ip, mac, sign);
        console.log("---------------------------------- postdata" + postdata);

        let url = "http://" + HOSTNAME + "/" + "Player/NewPlayer";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                cc.log("xhr_readyState[" + xhr.readyState + "] xhr.status[" + xhr.status + "]");
                if (xhr.status >= 200 && xhr.status < 300) {
                    var respone = xhr.responseText;
                    if (!respone) {
                        console.log("----------------------请求ID异常!!!");
                    }
                    else {
                        var info = JSON.parse(respone);
                        PHP_ID = parseInt(info.data.player_id);
                        LocalManager.setInt("PHP_ID",PHP_ID);
                        console.log("-------------------------------------------用户PHP_ID:" + PHP_ID);
                    }
                }
                else {
                }
            }
        };
        xhr.open("POST", url, true);
        xhr.send(postdata);
    },

    getCurMilliseconds () {
        let date = new Date();
        return date.getSeconds() * 1000 + date.getMilliseconds();
    },

    //登录tcp回调
    onLoginCb (data) {
        if (data.rcode == 0) {
            console.log("------------------------------- Login onLoginCb rcode = 0,服务器已连接上！");
            console.log("------------------------------- IP_TCP = " + IP_TCP + " PORT_TCP = " + PORT_TCP);
            Socket.isConnect = true;
        }else if(data.rcode == 2) { //重定向,重新连接服务器
            console.log("------------------------------- Login onLoginCb rcode = 2,重新连接服务器，请稍等！");
            Socket.isConnect = false;
            Socket.connect(1, ID, 1,data.ip,data.port);
            IP_TCP = data.ip;
            PORT_TCP = data.port;
            IP_UDP = IP_TCP;
            PORT_UDP = PORT_TCP;
        }
    },

    onHeartbeatAck(){
        console.log("----------------------------------------- Login 收到心跳");
        Socket.isConnect = true;
    },

    // 检测网络状态
    onCheckNetStatus(){
        // 如果15秒没有收到心跳就进行重联
        if(this._netState == null){
            this._netState = function () {
                if(Socket.isConnect == false){
                    //cc.log("---------------------------------- Login 心跳停止，进行重联");
                    Socket.connect(1, ID, 1,IP_TCP,PORT_TCP);
                }else{
                    //cc.log("---------------------------------- Login 心跳正常")
                }
            }
            this.schedule(this._netState,15);
        }
    },

    onInitSnake (tag){
        SNAKE_ID = tag; // 皮肤
        LocalManager.setInt("SNAKETAG",SNAKE_ID);
        for (let i = 0; i < 10; i++){
            var node = new cc.Node('myNode');
            var nodeSprite = node.addComponent(cc.Sprite);
            if(i == 0){
                nodeSprite.spriteFrame = this.snakeatlas.getSpriteFrame("snake_" + tag + "_head");
                node.setPosition(0,10);
                this._head = node;
                this._head.rotation = 0;
                node.posIdx = 0;
            }else if(i == 9){
                nodeSprite.spriteFrame = this.snakeatlas.getSpriteFrame("snake_w_" + tag);
                node.setPosition(0,- i * 20);
                this._tail = node;
                node.posIdx = 0 - i * 4;
            }else{
                let flag;
                if(i > 4) {
                    flag = i - 4;
                }else{
                    flag = i;
                }
                nodeSprite.spriteFrame = this.snakeatlas.getSpriteFrame("snake_" + tag + "_" + flag);
                node.setPosition(0,- i * 20);
                this._bodys.push(node);
                node.posIdx = 0 - i * 4;
            }
            node._snakeMove = "add";
            node.zIndex = 10 - i;
            this.snakeimg.addChild(node);
        }
    },

    onSetSnakeAdd(touch,data){
        AudioMgr.playEffect("button");
        this.snakeimg.removeAllChildren(true);
        this._bodys = [];
        let snakeTag = LocalManager.getInt("SNAKETAG");
        if(data == 1){
            snakeTag += 1;
            if(snakeTag > 10 ){
                snakeTag = 1;
            }
        }else if (data == -1){
            snakeTag -= 1;
            if(snakeTag < 1 ){
                snakeTag = 10;
            }
        }
        this.onInitSnake(snakeTag);
        LocalManager.setInt("SNAKETAG",snakeTag);
    },

    onSnakeMove(){
        let len = this._bodys.length;
        if (len <= 0) return;

        // 尾巴
        this.moveBodyStep(this._tail, this._bodys[len - 1]);
        // 身体（从后往前）
        for (let i = len - 1; i >= 0; i--) {
            let body = this._bodys[i];
            let front;
            if (i == 0) {
                front = this._head;
            } else {
                front = this._bodys[i - 1];
            }
            this.moveBodyStep(body, front);
        }

        if(this._head._snakeMove == "add"){
            this._head.x += 0.5;
            if(this._head.x > 5){
                this._head._snakeMove = "sub";
            }
        }else if(this._head._snakeMove == "sub"){
            this._head.x -= 0.5;
            if(this._head.x < -5){
                this._head._snakeMove = "add";
            }
        }
    },

    // 身体节点每帧的移动
    moveBodyStep (node, front) {
        if (node.posIdx == 0) {
            if (front.posArray) {
                node.posArray = front.posArray;
            } else {
                // 一个身体节点移动到一个身体节点，分成4帧渲染，c_getMoveSteps是算出4帧分别的位置
                node.posArray = c_getMoveSteps(node.position, front.position);
            }
            node.targetAngle = front.rotation;
        }
        let pos = node.posIdx < 0 ? node.position : node.posArray[node.posIdx];
        node.x = pos.x;
        node.posIdx += 1;
        if (node.posIdx > 3) {
            node.posIdx = 0;
            node.rotation = node.targetAngle;
        }
    },

    // 联网登录键
    onLogin () {
        AudioMgr.playEffect("button");
        if(Socket.isConnect == false){
            this.roomTips("网络异常，请稍后再试")
            return
        }

        this.scheduleOnce(function() {
            if(cc.sys.os === cc.sys.OS_WINDOWS){
                if(Socket.isConnect){
                    GAME_MODE = 1;　//联网
                    GAME_TYPE = 1;   // 正常流程开始游戏进房间
                    cc.director.loadScene("Battle");
                }else{
                    cc.log("------------------------------------- 请求连接服务器");
                    this.netTips.stopAllActions();
                    this.netTips.active = true;
                    this.netTips.opacity = 255;
                    this.netTips.y = 220;
                    this.netTips.runAction(cc.sequence(cc.spawn(cc.moveBy(2.0,cc.p(0,50)), cc.fadeOut(2.0)), cc.callFunc(function() {
                        this.netTips.active = false;
                    }, this)));
                    // 不能太频繁
                    if(this._reConnect){
                        this._reConnect = false;
                        Socket.connect(1, ID, 1,IP_TCP,PORT_TCP);
                        this.scheduleOnce(function() {
                            this._reConnect = true;
                        }, 10.0)
                    }
                }
            }else if(cc.sys.os === cc.sys.OS_ANDROID) {
                GAME_MODE = 1;　// 联网
                GAME_TYPE = 1;   // 正常流程开始游戏进房间
                cc.director.loadScene("Battle");
            }
        }, 0.1)
    },


    // 单机登录键
    onLoginAlone () {
        AudioMgr.playEffect("button");
        this.scheduleOnce(function() {
            GAME_MODE = 0;　//单机
            cc.director.loadScene("Battle");
        }, 0.1)
    },

    // 设置
    onSettingBtn () {
        //cc.log("onSettingCall");
        AudioMgr.playEffect("button");
        this.settingDialog.active = true;
        this.onDialogAction(this.settingDialogBg);
    },

    // dialog action
    onDialogAction(dialog){
        if(dialog){
            var stretchAction = cc.scaleTo(0.1, 1.1, 1.1);
            var scaleBackAction = cc.scaleTo(0.1, 1, 1);
            var seq = cc.sequence(stretchAction,scaleBackAction);
            dialog.runAction(seq);
        };
    },

    // 关闭按钮
    onCloseBtn(event,customEventData){
        cc.log("onSettingCloseBtn");
        AudioMgr.playEffect("button");
        let dialog = null;
        if(customEventData == "setting") {
            dialog = this.settingDialog;
        }else if(customEventData == "headset") {
            dialog = this.headDialog;
        }

        if (dialog.active) {
            this.scheduleOnce(function() {
                dialog.active = false;
                this.editBoxTips.active = false;
                if(this.myName.string == ""){
                    this.myName.string = "游客" + ID;
                    GameConfig.getInstance().myName = this.myName.string;
                    LocalManager.setString("name",this.myName.string);
                }
            }, 0.1)
        }
    },

    // toggle开关
    onToggleBtn(event,customEventData){
        console.log("event=",event.type," data=",customEventData);
        AudioMgr.playEffect("button");
        if (customEventData == "music") {
            if(this.musicToggleBtn.isChecked == true) {
                LocalManager.setBool("musicToggle",true);
                console.log("music 打开");
            }else{
                LocalManager.setBool("musicToggle",false);
                console.log("music 关闭");
            }
        }else if (customEventData == "sound"){
            if(this.soundToggleBtn.isChecked == true) {
                LocalManager.setBool("soundToggle",true);
                console.log("sound 打开");
            }else{
                LocalManager.setBool("soundToggle",false);
                console.log("sound 关闭");
            }
        }else if (customEventData == "left"){
            LocalManager.setString("operation","left");
            let img1 = this.settingDialogBg.getChildByName("setImg").getChildByName("img1")
            let img2 = this.settingDialogBg.getChildByName("setImg").getChildByName("img2")
            img1.active = true
            img2.active = true
            let img3 = this.settingDialogBg.getChildByName("setImg").getChildByName("img3")
            let img4 = this.settingDialogBg.getChildByName("setImg").getChildByName("img4")
            img3.active = false
            img4.active = false
        }else if (customEventData == "right"){
            LocalManager.setString("operation","right");
            let img1 = this.settingDialogBg.getChildByName("setImg").getChildByName("img1")
            let img2 = this.settingDialogBg.getChildByName("setImg").getChildByName("img2")
            img1.active = false
            img2.active = false
            let img3 = this.settingDialogBg.getChildByName("setImg").getChildByName("img3")
            let img4 = this.settingDialogBg.getChildByName("setImg").getChildByName("img4")
            img3.active = true
            img4.active = true
        }
    },

    // 头像选择
    onHeadBtn(event,customEventData){
        cc.log("onHeadBtn customEventData: " + customEventData);
        AudioMgr.playEffect("button");
        this.onheadflag = customEventData;
        LocalManager.setInt("onheadflag",this.onheadflag);

        if(this.headSureImg){
            this.headSureImg.destroy();
            this.headSureImg = null;
        }

        if(this.headBgImg){
            this.headBgImg.destroy();
            this.headBgImg = null;
        }

        var headBtn = this.node.getChildByName("headDialog").getChildByName("headDialogBg").getChildByName("head" + customEventData);
        //headBtn.getComponent(cc.Button).interactable = false;
        //headBtn.getComponent(cc.Button).enableAutoGrayEffect = true;

        this.headSureImg = new cc.Node('myNode');
        var sprite1 = this.headSureImg.addComponent(cc.Sprite);
        sprite1.spriteFrame = this.atlas.getSpriteFrame("mg_11");
        headBtn.addChild(this.headSureImg);
        this.headSureImg.setLocalZOrder(2);

        this.headBgImg = new cc.Node('myNode');
        var sprite2 = this.headBgImg.addComponent(cc.Sprite);
        sprite2.spriteFrame = this.atlas.getSpriteFrame("mg_12");
        this.headBgImg.scale = 1.3;
        headBtn.addChild(this.headBgImg);
        this.headBgImg.setLocalZOrder(1);

        this.headImg.spriteFrame = this.atlas.getSpriteFrame("headimg_" + this.onheadflag);
    },

    // 点击主界面头像弹出修改头像和名字dialog
    onHeadClickBtn(){
        cc.log("onHeadBtn flag:" + this.onheadflag);
        this.headDialog.active = true;
        this.onDialogAction(this.headDialogBg);
        this.onHeadBtn("",this.onheadflag);
    },

    // 输入框事件
    singleLineEditBoxDidBeginEditing: function(sender) {
        cc.log(sender.node.name + " single line editBoxDidBeginEditing");
    },

    singleLineEditBoxDidChanged: function(text, sender) {
        cc.log(sender.node.name + " single line editBoxDidChanged: " + text);
    },

    singleLineEditBoxDidEndEditing: function(sender) {
        cc.log(sender.node.name + " single line editBoxDidEndEditing: " + this.singleLineText.string);
        this.editBoxTips.active = false;
    },

    // 修改名字确定按钮
    onEditBoxSureBtn() {
        cc.log("onEditBoxSureBtn name is :" + this.singleLineText.string);
        AudioMgr.playEffect("button");

        if(this.singleLineText.string == ""){
            cc.log("name is null,please enter your name !!!");
            this.editBoxTips.active = true;
            this.editBoxTipsLable.string = "输入名字不能为空!";
            return;
        }else{
            var length = Utils.getLength(this.singleLineText.string);
            if(length > 12){
                this.editBoxTips.active = true;
                this.editBoxTipsLable.string = "您输入的名字过长，请重新输入!";
                return;
            }
        }

        GameConfig.getInstance().myName = this.singleLineText.string;
        this.myName.string = GameConfig.getInstance().myName;
        LocalManager.setString("name",this.myName.string);
        cc.log("zhengyi ---------------------------------- onLoad" + " Name:" + GameConfig.getInstance().myName );
        this.scheduleOnce(function() {
            this.headDialog.active = false;
            this.editBoxTips.active = false;
        }, 0.1)
    },

    // 退出游戏
    backBtnClick(){
        if(this._backflag){
            AudioMgr.playEffect("button")
            if(cc.sys.os === cc.sys.OS_ANDROID){
                GameCallPlatform.showGameCommonDialog(10087, "", "确定退出游戏吗？", "继续玩", "退出")
            }else{
                var backBg = cc.director.getScene().getChildByName("backBg");
                backBg.active = true;
                this.scheduleOnce(function() {
                    cc.find("Canvas").destroy();
                }, 0.1)
            }
        }
    },

    // 全局退出游戏
    wholeBackBtnClick(){
        if(this._backflag){
            console.log("---------------------------------------- wholeBackBtnClick")
            AudioMgr.playEffect("button")
            if(cc.sys.os === cc.sys.OS_ANDROID){
                let data = []
                data[0] = 10087
                data[1] = false
                this.exitCommonDialog(data)
            } else{
                var backBg = cc.director.getScene().getChildByName("backBg");
                backBg.active = true;
                this.scheduleOnce(function() {
                    cc.find("Canvas").destroy();
                    console.log("----------------------------------------- 退出游戏")
                }, 0.1)
            }
        }
    },

    //分享
    shareBntCall(){
        console.log("----------------------------------------- 分享游戏")
        AudioMgr.playEffect("button")
        GameCallPlatform.shareAloneGame(GAME_ID)
    },

    // android 退出回调
    exitCommonDialog(data){
        console.log("-------------------------------------- exitCommonDialog id:" + data[0] + " yes:" + data[1]);
        if(data[0] == 10087 && data[1] == false){
            var backBg = cc.director.getScene().getChildByName("backBg");
            backBg.active = true;
            this.scheduleOnce(function() {
                cc.find("Canvas").destroy();
                var frameSize = cc.view.getFrameSize();
                if(frameSize.width > frameSize.height){
                    cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
                    cc.view.setFrameSize(frameSize.height,frameSize.width);
                }
                let data  = GameCallPlatform.GetGameData();
                let parseData = JSON.parse(data);
                GameCallPlatform.sendDialogChatData("",parseData.gameType);
                console.log("----------------------------------------- 退出游戏")
            }, 0.1)
        }
    },

    showWaitLayer(){
        this.loading.active = true
        let quan = this.loading.getChildByName("quan")
        let action = cc.rotateBy(1,360)
        let seq = cc.RepeatForever.create(action);
        quan.runAction(seq);

        this.loadingClean = function () {
            quan.stopAllActions()
            this.loading.active = false
        }
        this.schedule(this.loadingClean,5);
    },

    // 邀请好友
    createRoomViewBtn(){
        AudioMgr.playEffect("button");
        if(Socket.isConnect == false){
            this.roomTips("网络异常，请稍后再试")
            return
        }

        TEAM_ID = 0
        this.showWaitLayer()
        this.Req_TeamCreate()
    },

    // 语音房游戏启动
    voiceRoomGameBegin(){
        GAME_MODE = 1;　//联网
        GAME_TYPE = 3;  // 语音房开始游戏进房间
        cc.director.loadScene("Battle");
    },

    // 游戏开始了
    onSessionNtf (msg) {
        console.log("----------------------------------------- Login onSessionNtf 游戏开始了")
        this.destroyModel()
        GAME_MODE = 1;　//联网
        GAME_TYPE = 2;  // 被邀请开始游戏进房间
        G_OnSessionNtfData = msg
        cc.director.loadScene("Battle");
    },

    // re 创建队伍
    Req_TeamCreate(){
        let msg = new slither_pb.CS_Snake();
        msg.setCmdid(slither_pb.CS_CMD_ID.CS_CMD_TEAM_CREATE);

        let reqMsg = new slither_pb.CS_TeamCreate_Req()
        reqMsg.setTeamname(GameConfig.getInstance().myName)
        reqMsg.setSkinid(SNAKE_ID)
        reqMsg.setDressid(0)
        reqMsg.setHead(this._selfHeadUrl)
        reqMsg.setHeadframe(0)
        reqMsg.setVip(0)
        msg.setTeamcreate(reqMsg)

        let pb_data = msg.serializeBinary();
        Socket.requestPB(slither_pb.CS_CMD_ID.CS_CMD_TEAM_CREATE, ID,ROOM_ID,pb_data);
    },

    // ack 创建队伍
    Ack_TeamCreate(msg){
        let info = msg.getTeamcreateres()
        let rcode = info.getRcode()
        TEAM_ID = info.getTeamid() // 创建的房间号
        if(TEAM_ID == 0){
            return
        }

        this._houseId = ID
        this.loadingClean()
        this.unschedule(this.loadingClean)

        this.createRoomView.active = true
        this._backflag = false
        var beginBtn = this.createRoomView.getChildByName("bg").getChildByName("beginBtn")
        beginBtn.active = true
        this.roomname.string = GameConfig.getInstance().myName + "的房间(" + "房号:" + TEAM_ID + ")"
        this.createRoomView.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log("-------------------------- createRoomView is Mouse down")
        });


        console.log("------------------------------------------ Ack_TeamCreate TEAM_ID:" + TEAM_ID)
        // 显示进房间的玩家
        this._roomNum ++
        this.setRoomPlayerView(ID,GameConfig.getInstance().myName,this._selfHeadUrl,this._roomNum)

        // 刷新好友列表
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            this._friendsList = []
            this._friendsOnLineList = []
            GameCallPlatform.getFriendsList(GAME_ID)
        } else if (cc.sys.os === cc.sys.OS_WINDOWS) {
            let data = {}
            this.friendsListView(data)
        }
    },

    setRoomPlayerView(id,name,head,roomnum){
        if(roomnum <= 15){
            let playerview = cc.instantiate(this.playView);
            let function_call = function (texture) {
                playerview.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
            };
            this.creatHeadImg(head,function_call)

            let hoserImg = playerview.getChildByName("hoserImg")
            let playername = playerview.getChildByName("name").getComponent(cc.Label);
            playername.string = name

            let playpos = "play" + roomnum
            let parent = this.createRoomView.getChildByName("bg").getChildByName("playerView").getChildByName(playpos)
            playerview.parent = parent

            this._roomPlayTag[id] = playpos

            if(this._houseId == id){ // 是房主
                hoserImg.active = true
            }else{
                hoserImg.active = false
            }
        }
    },

    roomExitBtn(){
        AudioMgr.playEffect("button")
        this.exitroomBg.active = true
        this.onDialogAction(this.exitroomBg);
    },

    wholeRoomExitBtn(){
        AudioMgr.playEffect("button")
        if(this._inviteCreateRoom){
            console.log("-------------------------------- 离开队伍 TEAM_ID:" + TEAM_ID)
            this.Req_TeamExit(TEAM_ID)
        }else{
            console.log("-------------------------------- 解散队伍 TEAM_ID:" + TEAM_ID)
            this.Req_TeamDestory(TEAM_ID)
        }
        if(cc.sys.os === cc.sys.OS_ANDROID){
            let data = []
            data[0] = 10087
            data[1] = false
            this.exitCommonDialog(data)
        }
    },


    closeRoomExitBtn(){
        AudioMgr.playEffect("button")
        this.exitroomBg.active = false
    },


    sureRoomExitBtn(){
        AudioMgr.playEffect("button")
        if(this._inviteCreateRoom){
            console.log("-------------------------------- 离开队伍 TEAM_ID:" + TEAM_ID)
            this.Req_TeamExit(TEAM_ID)
        }else{
            console.log("-------------------------------- 解散队伍 TEAM_ID:" + TEAM_ID)
            this.Req_TeamDestory(TEAM_ID)
        }
    },

    // re 离开
    Req_TeamExit(team_id){
        if(team_id){
            let msg = new slither_pb.CS_Snake()
            msg.setCmdid(slither_pb.CS_CMD_ID.CS_CMD_TEAM_EXIT)

            let reqMsg = new slither_pb.CS_TeamExit_Req()
            reqMsg.setTeamid(team_id)
            reqMsg.setUserid(ID)
            msg.setTeamexit(reqMsg)

            let pb_data = msg.serializeBinary();
            Socket.requestPB(slither_pb.CS_CMD_ID.CS_CMD_TEAM_EXIT,ID,ROOM_ID,pb_data)
        }
    },

    // ntf 离开
    Ntf_TeamExit(msg){
        console.log("------------------------------------------ Ntf_TeamExit")
        let data = msg.getTeamexitntf()
        let id = data.getUserid()
        if(id == ID){
            this.destroyModel()
        }else{
            this._roomNum --
            let playpos = this._roomPlayTag[id]
            let parent = this.createRoomView.getChildByName("bg").getChildByName("playerView").getChildByName(playpos)
            parent.removeAllChildren(true)
        }
    },

    // re 解散队伍
    Req_TeamDestory(team_id){
        if(team_id){
            let msg = new slither_pb.CS_Snake();
            msg.setCmdid(slither_pb.CS_CMD_ID.CS_CMD_TEAM_DESTORY);

            let reqMsg = new slither_pb.CS_TeamDestory_Req()
            reqMsg.setTeamid(team_id)
            msg.setTeamdestory(reqMsg)

            let pb_data = msg.serializeBinary();
            Socket.requestPB(slither_pb.CS_CMD_ID.CS_CMD_TEAM_DESTORY,ID,ROOM_ID,pb_data)
        }
    },


    // ack 解散队伍
    Ack_TeamDestory(msg){  // teamDestoryRes
        console.log("------------------------------------------ Ack_TeamDestory")
        let data = msg.getTeamdestoryres()
        let rcode = data.getRcode()
        if(rcode == 0){
            console.log("------------------------------------------ Ack_TeamDestory rcode:" + rcode)
            this.destroyModel()
        }else{
            console.log("------------------------------------------ Ack_TeamDestory Fail rcode:" + rcode)
        }
    },

    // ntf 解散队伍
    Ntf_TeamDestory(msg){
        console.log("------------------------------------------ Ntf_TeamDestory")
        this.roomTips("房主已解散该房间")
        this.destroyModel()
    },


    // 清空数据，关闭房间
    destroyModel(tag){
        this.quickEnterView.active = false
        this.quickEnterView.off(cc.Node.EventType.TOUCH_START);
        this._quickEnterNumString = ""
        this._quickEnterNum = 0
        for (let i = 1; i <= 6; i++){
            let numstr = "num" + i
            let numnode = this.quickEnterView.getChildByName("bg").getChildByName(numstr).getChildByName("lable")
            numnode.active = false
        }

        if(tag == "begin"){
            this.createRoomView.active = true
        }else{
            this.createRoomView.active = false
        }
        this.scheduleOnce(function() {
            this._backflag = true
        }, 1.0)
        this.createRoomView.off(cc.Node.EventType.TOUCH_START);
        this.exitroomBg.active = false
        this.scrollView.content.removeAllChildren(true)


        // 删除显示的玩家
        for (let i = 1; i <= this._roomNum; i++){
            let playpos = "play" + i
            let parent = this.createRoomView.getChildByName("bg").getChildByName("playerView").getChildByName(playpos)
            parent.removeAllChildren(true)
        }

        this._inviteCreateRoom = false
        this._houseId = null
        this._roomNum = 0
        this._roomPlayTag = []
    },


    teamRoomBeginBtn(){
        AudioMgr.playEffect("button")
        this.destroyModel("begin")
        GAME_MODE = 1;　//联网
        GAME_TYPE = 0;  // 组队开始游戏进房间
        cc.director.loadScene("Battle");
    },


    //快速加入游戏
    quickEnterGameBtn(){
        AudioMgr.playEffect("button")
        this.quickEnterView.active = true
        this.quickEnterView.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log("-------------------------- quickEnterView is Mouse down");
        });
    },

    closeQuickEnterView(){
        AudioMgr.playEffect("button")
        this.quickEnterView.active = false
        var frameSizess = cc.view.getFrameSize();
        if(frameSizess.width / frameSizess.height >= 2){
            this.quickEnterView.scale = 1
        }

        this.quickEnterView.off(cc.Node.EventType.TOUCH_START);
        this._quickEnterNumString = ""
        this._quickEnterNum = 0
        for (let i = 1; i <= 6; i++){
            let numstr = "num" + i
            let numnode = this.quickEnterView.getChildByName("bg").getChildByName(numstr).getChildByName("lable")
            numnode.active = false
        }
    },

    numBtnCall(event,num){
        AudioMgr.playEffect("button")
        this._quickEnterNum ++
        if(this._quickEnterNum <= 6){
            let numstr = "num" + this._quickEnterNum
            let numnode = this.quickEnterView.getChildByName("bg").getChildByName(numstr).getChildByName("lable")
            numnode.active = true
            let numlable = numnode.getComponent(cc.Label);
            numlable.string = num
            this._quickEnterNumString = this._quickEnterNumString + num
            //console.log("--------------------------- _quickEnterNumString: " + this._quickEnterNumString)
            if(this._quickEnterNum == 6){
                this.quickEnterGame(parseInt(this._quickEnterNumString))
            }
        }else{
            this._quickEnterNum = 6
        }
    },

    numDelBtnCall(){
        AudioMgr.playEffect("button")
        this._quickEnterNum --
        if(this._quickEnterNum < 0){
            this._quickEnterNum = 0
        }

        let numstr = "num" + (this._quickEnterNum + 1)
        let numnode = this.quickEnterView.getChildByName("bg").getChildByName(numstr).getChildByName("lable")
        numnode.active = false

        if(this._quickEnterNumString.length > 0){
            this._quickEnterNumString = this._quickEnterNumString.substr(0,this._quickEnterNumString.length-1);
        }
        //console.log("--------------------------- _quickEnterNumString: " + this._quickEnterNumString)
    },

    // 快速进入游戏
    quickEnterGame(teamId){
        console.log("--------------------------------------- quickEnterGame teamId:" + teamId)
        let msg = new slither_pb.CS_Snake();
        msg.setCmdid(slither_pb.CS_CMD_ID.CS_CMD_TEAM_QUICKENTER);

        let reqMsg = new slither_pb.CS_TeamQuickEnter_Req()
        reqMsg.setTeamid(teamId)
        let infos = reqMsg.getInfos()
        infos.setUserid(ID)
        infos.setUsername(GameConfig.getInstance().myName)
        infos.setHead(this._selfHeadUrl) // 头像
        infos.setHeadframe(0)
        infos.setVip(0)
        reqMsg.setInfos(infos)
        reqMsg.setSkinid(SNAKE_ID.toString())  // 皮肤
        reqMsg.setDressid(0)
        msg.setTeamquickenterreq(reqMsg)

        let pb_data = msg.serializeBinary();
        Socket.requestPB(slither_pb.CS_CMD_ID.CS_CMD_TEAM_QUICKENTER, ID,ROOM_ID,pb_data);
    },

    Ack_TeamQuickEnter(msg){
        let info = msg.getTeamquickenterres()
        let rcode = info.getRcode()

        console.log("------------------------------------ Ack_TeamQuickEnter rcode:" + rcode)
        // 0、进入房间成功   1、队伍已解散    2、队伍已满    3 房间未开始
        if(rcode == 0){
            console.log("------------------------------------ 快速进入房间成功")
            this.createRoomTips.active = true
            this.createRoomTips.getChildByName("tipslable").getComponent(cc.Label).string = "正在进入房间"
            this.createRoomTips.runAction(cc.sequence(cc.delayTime(1),cc.fadeOut(1.0), cc.callFunc(function() {
                this.createRoomTips.active = false
                this.createRoomTips.opacity = 255
            }, this)));
        }else if(rcode == 1){
            console.log("------------------------------------ 队伍已解散,房间ID不存在")
            this.createRoomTips.active = true
            this.createRoomTips.getChildByName("tipslable").getComponent(cc.Label).string = "房间ID不存在"
            this.createRoomTips.runAction(cc.sequence(cc.delayTime(1),cc.fadeOut(1.0), cc.callFunc(function() {
                this.createRoomTips.active = false
                this.createRoomTips.opacity = 255
            }, this)));
            this._quickEnterNumString = ""
            this._quickEnterNum = 0
            for (let i = 1; i <= 6; i++){
                let numstr = "num" + i
                let numnode = this.quickEnterView.getChildByName("bg").getChildByName(numstr).getChildByName("lable")
                numnode.active = false
            }
        }else if(rcode == 2){
            console.log("------------------------------------ 队伍已满")
            this.createRoomTips.active = true
            this.createRoomTips.getChildByName("tipslable").getComponent(cc.Label).string = "队伍已满"
            this.createRoomTips.runAction(cc.sequence(cc.delayTime(1),cc.fadeOut(1.0), cc.callFunc(function() {
                this.createRoomTips.active = false
                this.createRoomTips.opacity = 255
            }, this)));
            this._quickEnterNumString = ""
            this._quickEnterNum = 0
            for (let i = 1; i <= 6; i++){
                let numstr = "num" + i
                let numnode = this.quickEnterView.getChildByName("bg").getChildByName(numstr).getChildByName("lable")
                numnode.active = false
            }
        }else if(rcode == 3){
            this.createRoomTips.active = true
            this.createRoomTips.getChildByName("tipslable").getComponent(cc.Label).string = "房间未开始"
            this.createRoomTips.runAction(cc.sequence(cc.delayTime(1),cc.fadeOut(1.0), cc.callFunc(function() {
                this.createRoomTips.active = false
                this.createRoomTips.opacity = 255
            }, this)));
        }
    },

    roomTips(str){
        console.log("------------------------------------ roomTips:" + str)
        this.inviteRoomTips.active = true
        this.inviteRoomTips.opacity = 255
        this.inviteRoomTips.stopAllActions()
        this.inviteRoomTips.getChildByName("tipslable").getComponent(cc.Label).string = str

        this.inviteRoomTips.runAction(cc.sequence(cc.delayTime(1),cc.fadeOut(1.0), cc.callFunc(function() {
            this.inviteRoomTips.active = false
            this.inviteRoomTips.opacity = 255
        }, this)));
    },


    setFriendsList(info){
        console.log("-------------------------------------- friends_list length:" + info.friends_list.length)
        if(info.friends_list.length > 0){
            this._friendsList = info.friends_list
            //for (let i = 0; i < info.length; ++i) {
                //console.log("-------------------------------------- setFriendsList i:" + i + " friend_name:" + info[i].friend_name)
                //console.log("-------------------------------------- setFriendsList i:" + i + " friend_uid:" + info[i].friend_uid)
                //console.log("-------------------------------------- setFriendsList i:" + i + " img_url:" + info[i].img_url)
                //console.log("-------------------------------------- setFriendsList i:" + i + " status_text:" + info[i].status_text)
                //console.log("-------------------------------------- setFriendsList i:" + i + " id:" + info[i].id)
                //console.log("-------------------------------------- setFriendsList i:" + i + " on_status:" + info[i].on_status)  // 1在线 2游戏中 3离线
            //}
            console.log("------------------------------------ 显示好友列表 this._friendsList:" + JSON.stringify(this._friendsList))
            this.friendsListView(this._friendsList)
        }else{
            console.log("-------------------------------------- friends_list is null")
        }
        console.log("-------------------------------------- online_list length:" + info.online_list.length)
        if(info.online_list.length > 0){
            this._friendsOnLineList = info.online_list
            console.log("------------------------------------ 显示在线列表 this._friendsOnLineList:" + JSON.stringify(this._friendsOnLineList))
        }else{
            console.log("-------------------------------------- online_list is null")
        }
    },

    // 设置玩家段位
    setStagesInfo(info){
        console.log("--------------------------------------- setStagesInfo info.stage:" + info[0].stage)
        console.log("--------------------------------------- setStagesInfo info.need_score:" + info[0].need_score)
        console.log("--------------------------------------- setStagesInfo info.cur_score:" + info[0].cur_score)
        console.log("--------------------------------------- setStagesInfo info.pk_score:" + info[0].pk_score)
        console.log("--------------------------------------- setStagesInfo info.level:" + info[0].level)
        // 段位
        var dan = info[0].stage　　　
        if(dan > 0){
            this.playLv.active = true
            this.playLv.getComponent(cc.Sprite).spriteFrame = this.danFrame[dan - 1]
        }
        // 星星
        var star = info[0].level
        for (let i = 0; i < star; i++) {
            var node = new cc.Node('playlv')
            node.parent = this.playLv
            node.scale = 0.6
            node.setPosition(30 + 30 * i,0)
            var nodeSprite = node.addComponent(cc.Sprite)
            nodeSprite.spriteFrame = this.friendsBtnFrame[2]
        }
        // 进度
        if(info[0].need_score == 0){
            this.starBar.node.active = false
            this.starBar.progress = 0
        }else{
            this.starBar.node.active = true
            this.starBar.progress = info[0].cur_score / info[0].need_score
        }
    },

    // 0好友 1在线好友
    roomfriendsListCall(){
        AudioMgr.playEffect("button")
        if(this._friendsType == 1) {
            this._friendsType = 0

            let sprite1 = this.friendsBtn.getComponent(cc.Sprite);
            sprite1.spriteFrame = this.friendsBtnFrame[0]
            let lable1 = this.friendsBtn.node.getChildByName("haoyou")
            lable1.color = cc.color(255,255,255);

            let sprite2 = this.onlineBtn.getComponent(cc.Sprite);
            sprite2.spriteFrame = this.friendsBtnFrame[1]
            let lable2 = this.onlineBtn.node.getChildByName("zaixian")
            lable2.color = cc.color(104,165,241);

            // 获取好友列表
            if (cc.sys.os === cc.sys.OS_ANDROID) {
                this.friendsListView(this._friendsList)
            } else if (cc.sys.os === cc.sys.OS_WINDOWS) {
                let data  = {}
                this.friendsListView(data)
            }
        }
    },

    roomOnlinefriendsListCall(){
        AudioMgr.playEffect("button")
        if(this._friendsType == 0){
            this._friendsType = 1

            let sprite1 = this.friendsBtn.getComponent(cc.Sprite);
            sprite1.spriteFrame = this.friendsBtnFrame[1]
            let lable1 = this.friendsBtn.node.getChildByName("haoyou")
            lable1.color = cc.color(104,165,241);

            let sprite2 = this.onlineBtn.getComponent(cc.Sprite);
            sprite2.spriteFrame = this.friendsBtnFrame[0]
            let lable2 = this.onlineBtn.node.getChildByName("zaixian")
            lable2.color = cc.color(255,255,255);

            // 获取好友列表
            if (cc.sys.os === cc.sys.OS_ANDROID) {
                this.friendsListView(this._friendsOnLineList)
            } else if (cc.sys.os === cc.sys.OS_WINDOWS) {
                // 获取在线好友列表
                let data  = {}
                this.onlinefriendsList(data)
            }
        }
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

    // 好友列表
    friendsListView(data){
        let content = this.scrollView.content
        content.removeAllChildren(true)

        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            let totalCount = 10         // 显示总数量的可控范围
            let spacing = 10            // 间隔
            let spawnCount = 10         // 显示的总数量
            content.height = totalCount * (this.itemTemplate.height + spacing) + spacing; // get total content height
            for (let i = 0; i < spawnCount; i++) { // spawn items, we only need to do this once
                let item = cc.instantiate(this.itemTemplate);
                item.active = true

                //头像
                //let head = item.getChildByName("head").getChildByName("headimg").getComponent(cc.Sprite)
                //head.spriteFrame

                //名字
                let name = item.getChildByName("name").getComponent(cc.Label)
                name.string = "zhengyi" + i

                // 段位显示
                var num = 3
                var dan = Math.ceil( num / 3)          // 向上取整,有小数就整数部分加1
                var star = 0
                // 段位
                var lvdan = item.getChildByName("lvdan")
                lvdan.getComponent(cc.Sprite).spriteFrame = this.danFrame[dan - 1]

                // 星星数量
                if(num<= 3){
                    star = num
                }else {
                    star = num % 3
                }
                for (let i = 0; i < star; i++) {
                    var node = new cc.Node('friendplaylv')
                    node.parent = lvdan
                    node.scale = 0.4
                    node.setPosition(20 + 20 * i,0)
                    var nodeSprite = node.addComponent(cc.Sprite)
                    nodeSprite.spriteFrame = this.friendsBtnFrame[2]
                }

                // 在线
                let onlinelable = item.getChildByName("online").getComponent(cc.Label)
                if(i < 5){
                    onlinelable.string = "在线"
                    onlinelable.node.color = cc.color(130,160,240)
                }else{
                    onlinelable.string = "离线"
                    onlinelable.node.color = cc.color(120,120,120)
                }
                content.addChild(item);
                item.setPosition(0, -item.height * (0.5 + i) - spacing * (i + 1));

                item.playname = "zhengyi" + i
                item.head = "本地头像" + i
                item.friend_uid = "friend_uid_" + i
            }
            let onlinenum = 5
            this.friendsLable.string = "在线人数 " + onlinenum + "/" + spawnCount
        } else if (cc.sys.os === cc.sys.OS_ANDROID) {
            console.log("-------------------------------------- friendsListView")
            let totalCount = data.length         // 显示总数量的可控范围
            let spacing = 10                     // 间隔
            content.height = totalCount * (this.itemTemplate.height + spacing) + spacing; // get total content height

            var function_call = [];
            var headBgNode = [];
            for (let i = 0; i < totalCount; i++) { // spawn items, we only need to do this once
                headBgNode[i] = cc.instantiate(this.itemTemplate);
                headBgNode[i].active = true

                // 头像
                function_call[i] = function (texture) {
                    var head = headBgNode[i].getChildByName("head").getChildByName("headimg").getComponent(cc.Sprite)
                    head.spriteFrame = new cc.SpriteFrame(texture)
                };
                this.creatHeadImg(data[i].img_url,function_call[i]);

                //名字
                let name = headBgNode[i].getChildByName("name").getComponent(cc.Label)
                name.string = data[i].friend_name

                // 段位
                var dan = data[i].stageInfo.stage
                var lvdan = headBgNode[i].getChildByName("lvdan")
                lvdan.getComponent(cc.Sprite).spriteFrame = this.danFrame[dan - 1]

                // 星星
                var star = data[i].stageInfo.level
                for (let i = 0; i < star; i++) {
                    var node = new cc.Node('friendplaylv')
                    node.parent = lvdan
                    node.scale = 0.4
                    node.setPosition(20 + 20 * i,0)
                    var nodeSprite = node.addComponent(cc.Sprite)
                    nodeSprite.spriteFrame = this.friendsBtnFrame[2]
                }


                // 在线
                let onlinelable = headBgNode[i].getChildByName("online").getComponent(cc.Label)
                if(data[i].on_status == 1 || data[i].on_status == 2){
                    onlinelable.string = "在线"
                    onlinelable.node.color = cc.color(130,160,240)
                }else{
                    onlinelable.string = "离线"
                    onlinelable.node.color = cc.color(120,120,120)
                }
                content.addChild(headBgNode[i]);
                headBgNode[i].setPosition(0, -headBgNode[i].height * (0.5 + i) - spacing * (i + 1));

                headBgNode[i].playname = data[i].friend_name
                headBgNode[i].head = data[i].img_url
                headBgNode[i].friend_uid = data[i].friend_uid
            }

            this.friendsLable.string = "在线人数 " + this._friendsOnLineList.length + "/" + this._friendsList.length
        }
    },

    // 在线好友列表(windows平台)
    onlinefriendsList(data){
        let content = this.scrollView.content
        content.removeAllChildren(true)

        let totalCount = 5         // 显示总数量的可控范围
        let spacing = 10            // 间隔
        let spawnCount = 5         // 显示的总数量
        content.height = totalCount * (this.itemTemplate.height + spacing) + spacing; // get total content height

        for (let i = 0; i < spawnCount; i++) { // spawn items, we only need to do this once
            let item = cc.instantiate(this.itemTemplate);
            item.active = true
            // 头像
            //let head = item.getChildByName("head").getComponent(cc.Sprite)
            //head.spriteFrame = this.atlas.getSpriteFrame("headimg_" + 1);

            //名字
            let name = item.getChildByName("name").getComponent(cc.Label)
            name.string = "zhengyi" + i

            // 在线
            let onlinelable = item.getChildByName("online").getComponent(cc.Label)
            onlinelable.string = "在线"
            onlinelable.node.color = cc.color(130,160,240)

            content.addChild(item);
            item.setPosition(0, -item.height * (0.5 + i) - spacing * (i + 1));
        }
        this.friendsLable.string = "在线人数 " + 5 + "/" + 10
    },

    voiceBtnCall(){

    },

    soundBtnCall(){

    },

    // 打开商店
    openShopView(){
        AudioMgr.playEffect("button");
        if(Socket.isConnect == false){
            this.roomTips("网络异常，请稍后再试")
            return
        }
        this.shopView.active = true
        this._backflag = false
        this.shopView.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log("-------------------------- shopView is Mouse down")
        });

        this.showWaitLayer()

        this.scheduleOnce(function() {
            this._shopInfo = shopItemData
            this.setShopItemList(shopItemData)
            this.loadingClean()
            this.unschedule(this.loadingClean)
        },1.0);


        // 请求商城数据（暂时屏蔽默认用本地数据，避免网络问题请求不到数据）
        // let self = this
        // let sign = md5fun.sumhexa(PHP_ID.toString())
        // let postdata = Utils.stringFormat("&id={0}&sign={1}",PHP_ID,sign)
        // console.log("---------------------------------- openShopView postdata:" + postdata);
        //
        // let url = "http://" + HOSTNAME + "/" + "Skin_v2/Get"
        // var xhr = new XMLHttpRequest()                  //cc.loader.getXMLHttpRequest()   new XMLHttpRequest()
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4) {
        //         console.log("----------------------------xhr_readyState[" + xhr.readyState + "] xhr.status[" + xhr.status + "]");
        //         if (xhr.status >= 200 && xhr.status < 300) {
        //             var respone = xhr.responseText;
        //             if (!respone) {
        //                 console.log("---------------------------请求异常!!!");
        //             }
        //             else {
        //                 console.log("---------------------------Skin_v2/Get respone:" + respone);
        //                 var info = JSON.parse(respone)
        //                 self._shopInfo = info.data
        //                 self.setShopItemList(info.data)
        //                 self.loadingClean()
        //                 self.unschedule(this.loadingClean)
        //             }
        //         }
        //         else {
        //         }
        //     }
        // };
        // xhr.open("POST", url, true)
        // xhr.send(postdata)
    },

    //使用皮肤
    useSkin(ID,skinID){
        console.log("------------------------------- 使用皮肤 ID:" + ID + " skinID:" + skinID)

        // 0走本地 1走php (目前没有积分系统所有走本地)
        let type = 0
        if(type == 0){
            this.changeSkin(skinID)
        }else{
            let self = this
            let tag = ID.toString() + skinID.toString()
            let sign = md5fun.sumhexa(tag)

            let postdata = Utils.stringFormat("&id={0}&kid={1}&sign={2}",ID,skinID,sign)
            console.log("---------------------------------- useSkin postdata:" + postdata);

            let url = "http://" + HOSTNAME + "/" + "Skin_v2/Select"
            var xhr = new XMLHttpRequest()   //cc.loader.getXMLHttpRequest()   new XMLHttpRequest()
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log("----------------------------xhr_readyState[" + xhr.readyState + "] xhr.status[" + xhr.status + "]");
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var respone = xhr.responseText;
                        if (!respone) {
                            console.log("---------------------------请求异常!!!");
                        } else {
                            var info = JSON.parse(respone)
                            if(info.data.code == 200){
                                console.log("-------------------------------------- skinID:" + skinID + " 出场");
                                self.changeSkin(skinID)
                            }else{
                                console.log("-------------------------------------- skinID:" + skinID + " 出场条件不符" + " code:" + info.data.code);
                            }
                        }
                    }
                    else {
                    }
                }
            };
            xhr.open("POST", url, true)
            xhr.send(postdata)
        }
    },

    changeSkin(skinID){
        let content = this.shopScrollView.content
        let oldname = "item_" + SNAKE_ID
        let newname = "item_" + skinID

        let olditem = content.getChildByName(oldname)
        let newitem = content.getChildByName(newname)

        let oldsureBtn = olditem.getChildByName("sure")
        let newsureBtn = newitem.getChildByName("sure")

        oldsureBtn.active = true
        newsureBtn.active = false

        SNAKE_ID = skinID
        LocalManager.setInt("SNAKETAG",SNAKE_ID);
        console.log("---------------------------------------- changeSkin SNAKE_ID:" + SNAKE_ID)
    },

    setShopItemList(info){
        if(this._shopInfo == null){
            return
        }
        console.log("---------------------------------------- setShopItemList info:" + JSON.stringify(info))

        let self = this
        let itemShop = false
        let content = this.shopScrollView.content
        content.removeAllChildren(true)
        content.height = 500

        // 一行显示5个
        let list_spacing = 10                                       // 上下间隔
        let line_spacing = 200                                      // 行之间的间隔
        let spawnCount = info.length                                // 显示的总数量
        content.height = Math.ceil(41 / 5) * (this.shopItemTemplate.height + list_spacing) + list_spacing; // get total content height

        let pos = 0
        for (let i = 1; i <= spawnCount; ++i) {
            let data = info[i]
            if(data){
                if(data.open == 0){
                    continue
                }else{
                    pos++
                }

                let item = cc.instantiate(this.shopItemTemplate);
                item.active = true

                // 滑动时候不能请求数据
                item.on(cc.Node.EventType.TOUCH_START, function (event) {
                    itemShop = true
                });
                item.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                    itemShop = false
                });
                item.on(cc.Node.EventType.TOUCH_END, function (event) {
                    if(itemShop){
                        self.shopItemSureBtn(data.id)
                    }
                });

                // 蛇的类型
                let snake = item.getChildByName("snake").getComponent(cc.Sprite)
                snake.spriteFrame = this.shopheaditemFrame[data.id]

                //名字
                let name = item.getChildByName("title").getChildByName("lable").getComponent(cc.Label)
                name.string = data.name + " ID:" + data.id
                item.itemName = data.name
                item.skinidAd = data.id  // 皮肤 skinid

                let sureBtnnode = item.getChildByName("sure")
                var clickEventHandler = new cc.Component.EventHandler();
                clickEventHandler.target = this.node;               //这个 node 节点是你的事件处理代码组件所属的节点
                clickEventHandler.component = "Login";              //这个是代码文件名
                clickEventHandler.customEventData = data.id
                clickEventHandler.handler = "shopItemSureBtn"
                var button = sureBtnnode.getComponent(cc.Button);
                button.clickEvents.push(clickEventHandler);

                let unclockTag = "unlock_" + data.id
                let unlock = LocalManager.getInt(unclockTag)
                let usenum = data.usenum

                if(unlock == null){
                    if(usenum == 0){
                        unlock = 2      // 2 已拥有
                    }else{
                        if(this._adShowNum >= usenum){
                            unlock = 1  // 1 待解锁
                        }else{
                            unlock = 0  // 0 看广告
                        }
                    }
                    LocalManager.setInt(unclockTag,unlock)
                }

                if(SNAKE_ID == data.id){  // 出场
                    item.getChildByName("sure").active = false
                    unlock = 2 // 已拥有
                    LocalManager.setInt(unclockTag,unlock)
                    console.log("-------------------------------------- 出场皮肤 SNAKE_ID:" + SNAKE_ID)
                }else{
                    let status_lable = item.getChildByName("sure").getChildByName("tiplable").getComponent(cc.Label)
                    let icon = item.getChildByName("sure").getChildByName("icon")

                    if(unlock == 0){         // 0 看广告
                        icon.active = true
                        status_lable.string = this._adShowNum + "/" + usenum
                    }else if(unlock == 1){  // 1 待解锁
                        icon.active = false
                        status_lable.string = "解锁"
                    }else if(unlock == 2){ // 2 已拥有
                        icon.active = false
                        status_lable.string = "已拥有"

                        var owndata = {}
                        owndata.id = data.id
                        owndata.name = data.name
                        this._shopOwnInfo.push(owndata)
                    }
                }

                let flag = pos - 1
                let tag = flag - 5 * Math.floor( flag / 5) - 2
                content.addChild(item)
                let itemname = "item_" + data.id
                item.setName(itemname)
                item.setPosition( tag * line_spacing, - item.height * (0.5 + Math.floor( flag / 5)) - list_spacing * (Math.floor( flag / 5) + 1));
            }
        }
    },

    setShopOwnItemList(){
        if(this._shopInfo == null){
            return
        }

        let content = this.shopScrollView.content
        content.removeAllChildren(true)
        content.height = 500

        let self = this
        let itemShop = false

        // 一行显示5个
        let list_spacing = 10                           // 上下间隔
        let line_spacing = 200                          // 行之间的间隔
        let spawnCount = this._shopOwnInfo.length              // 显示的总数量
        content.height = Math.ceil(spawnCount / 5) *(this.shopItemTemplate.height + list_spacing) + list_spacing; // get total content height

        for (let i = 0; i < spawnCount; i++) { // spawn items, we only need to do this once
            let data = this._shopOwnInfo[i]
            if(data){
                let item = cc.instantiate(this.shopItemTemplate);
                item.active = true

                // 滑动时候不能请求数据
                item.on(cc.Node.EventType.TOUCH_START, function (event) {
                    itemShop = true
                });
                item.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                    itemShop = false
                });
                item.on(cc.Node.EventType.TOUCH_END, function (event) {
                    if(itemShop){
                        self.shopItemSureBtn(data.id)
                    }
                });

                // 蛇的类型
                let snake = item.getChildByName("snake").getComponent(cc.Sprite)
                snake.spriteFrame = this.shopheaditemFrame[data.id]

                // 名字
                let name = item.getChildByName("title").getChildByName("lable").getComponent(cc.Label)
                name.string = data.name + " ID:" + data.id

                let sureBtnnode = item.getChildByName("sure")
                var clickEventHandler = new cc.Component.EventHandler();
                clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
                clickEventHandler.component = "Login";//这个是代码文件名
                clickEventHandler.customEventData = data.id
                clickEventHandler.handler = "shopItemSureBtn";
                var button = sureBtnnode.getComponent(cc.Button);
                button.clickEvents.push(clickEventHandler);

                let status_lable = item.getChildByName("sure").getChildByName("tiplable").getComponent(cc.Label)
                status_lable.string = "已拥有"

                if(SNAKE_ID == shopItemData[data.id].id){  // 出场
                    item.getChildByName("sure").active = false
                    //var url = cc.url.raw("resources/game/shop/cell_used_1.png");
                    //var texture = cc.textureCache.addImage(url);
                    //item.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                    console.log("-------------------------------------- 出场皮肤 SNAKE_ID:" + SNAKE_ID)
                }

                let flag = i
                let tag = flag - 5 * Math.floor( flag / 5) - 2
                content.addChild(item);
                let itemname = "item_" + data.id
                item.setName(itemname)
                item.setPosition( tag * line_spacing, - item.height * (0.5 + Math.floor( flag / 5)) - list_spacing * (Math.floor( flag / 5) + 1));
            }
        }
    },

    // 关闭商店
    closeShopView(){
        AudioMgr.playEffect("button")
        this.shopView.active = false
        this.scheduleOnce(function() {
            this._backflag = true
        }, 1.0)
        this.shopView.off(cc.Node.EventType.TOUCH_START);

        let content = this.shopScrollView.content
        content.removeAllChildren(true)

        this.loadingClean()
        this._shopInfo = null
        this._shopowntype = 0
        this.ownBtn.getChildByName("ownimg").active = false
        this._shopOwnInfo = []
    },

    wholeCloseShopView(){
        this.closeShopView()
        if(cc.sys.os === cc.sys.OS_ANDROID){
            let data = []
            data[0] = 10087
            data[1] = false
            this.exitCommonDialog(data)
        }
    },


    showOwnFriendsBtn(){
        AudioMgr.playEffect("button")
        // 0全部 1拥有的
        if(this._shopowntype == 0){
            this._shopowntype = 1  // 拥有的
            this.ownBtn.getChildByName("ownimg").active = true

            this.showWaitLayer()
            this.scheduleOnce(function() {
                this.setShopOwnItemList()
                this.loadingClean()
                this.unschedule(this.loadingClean)
            }, 0.1)
        }else if(this._shopowntype == 1){
            this._shopowntype = 0  // 全部
            this.ownBtn.getChildByName("ownimg").active = false

            this.showWaitLayer()
            this.scheduleOnce(function() {
                this._shopOwnInfo = []
                this.setShopItemList(this._shopInfo)
                this.loadingClean()
                this.unschedule(this.loadingClean)
            }, 0.1)
        }
    },


    shopItemSureBtn(event, customEventData){
        AudioMgr.playEffect("button")
        console.log("---------------------------------- shopItemSureBtn  skinID:" + customEventData)
        var skinid = customEventData
        let unclockTag = "unlock_" + skinid
        let unlock = LocalManager.getInt(unclockTag) // 0 看广告 1 待解锁 2 已拥有
        if(unlock == 0){ // 看广告
            if(GameCallPlatform.canShowAds("tanchishe1")){
                if(this._adshowflag){
                    this._adshowflag = false
                    this._skinidAd = skinid
                    GameCallPlatform.showAd("tanchishe1") // 调用广告接口
                    this.adshowflagCall = function () {
                        this._adshowflagmiao--
                        if(this._adshowflagmiao <= 0){
                            this._adshowflagmiao = 10
                            this._adshowflag = true
                            this.unschedule(this.adshowflagCall)
                        }
                    }
                    this.schedule(this.adshowflagCall,1);
                }else{
                    this.roomTips( this._adshowflagmiao + "秒后才能继续看广告")
                }
            }else{
                console.log("------------------------------------- 广告不可显示")
                this.roomTips("广告还没准备好")
            }
        }else if(unlock == 1){  // 1 待解锁
            this.skinUnlock(skinid)
        }else if(unlock == 2){ // 更换皮肤
            this.useSkin(ID,skinid)
        }
    },

    // 皮肤解锁
    skinUnlock(skinid){
        AudioMgr.playEffect("button")
        console.log("-------------------------------------- skinid:" + skinid + " usenum" + shopItemData[skinid].usenum)
        this._adShowNum = this._adShowNum - shopItemData[skinid].usenum
        if(this._adShowNum < 0){
            this._adShowNum = 0
        }
        LocalManager.setInt("adShowNum",this._adShowNum)

        let tag = "unlock_" + skinid
        LocalManager.setInt(tag,2)
        this._shopOwnInfo = []
        let content = this.shopScrollView.content
        let children = content.children

        var k = -1
        var interval = 0.02;
        var repeat = children.length - 1;
        var delay = 0;
        this.schedule(function() {
            k++
            let item = children[k];

            let skinidAd = item.skinidAd
            let usenum = shopItemData[skinidAd].usenum

            let unclockTag = "unlock_" + skinidAd
            let unlock = LocalManager.getInt(unclockTag) // 0 看广告 1 待解锁 2 已拥有

            if(SNAKE_ID == skinid){  // 出场
                item.getChildByName("sure").active = false
                unlock = 2 // 已拥有
                LocalManager.setInt(unclockTag,unlock)
                console.log("-------------------------------------- 出场皮肤 SNAKE_ID:" + SNAKE_ID)
            }else{
                let status_lable = item.getChildByName("sure").getChildByName("tiplable").getComponent(cc.Label)
                let icon = item.getChildByName("sure").getChildByName("icon")

                if(unlock == 0){         // 0 看广告
                    icon.active = true
                    status_lable.string = this._adShowNum + "/" + usenum
                }else if(unlock == 1){  // 1 待解锁
                    icon.active = false
                    status_lable.string = "解锁"
                }else if(unlock == 2){ // 2 已拥有
                    icon.active = false
                    status_lable.string = "已拥有"

                    var owndata = {}
                    owndata.id = item.skinidAd
                    owndata.name = item.itemName

                    this._shopOwnInfo.push(owndata)
                }
            }
        }, interval, repeat, delay);

    },

    // 看广告回调
    showAdCall(){
        this._adShowNum++
        LocalManager.setInt("adShowNum",this._adShowNum)
        console.log("----------------------------------- showAdCall this._adShowNum:" + this._adShowNum)

        let content = this.shopScrollView.content
        let children = content.children

        var k = -1
        var interval = 0.02;
        var repeat = children.length - 1;
        var delay = 0;
        this.schedule(function() {
            k++
            let item = children[k];
            let status_lable = item.getChildByName("sure").getChildByName("tiplable").getComponent(cc.Label)
            let icon = item.getChildByName("sure").getChildByName("icon")

            let skinidAd = item.skinidAd
            let usenum = shopItemData[skinidAd].usenum

            let unclockTag = "unlock_" + skinidAd
            let unlock = LocalManager.getInt(unclockTag) // 0 看广告 1 待解锁 2 已拥有

            if(this._adShowNum == usenum){
                icon.active = false
                status_lable.string = "解锁"
                LocalManager.setInt(unclockTag,1)
            }else if(this._adShowNum > usenum){
                if(unlock == 1){
                    icon.active = false
                    status_lable.string = "解锁"
                }else if(unlock == 2){
                    icon.active = false
                    status_lable.string = "已拥有"
                }
            }else if(this._adShowNum < usenum){
                if(unlock == 1){
                    icon.active = false
                    status_lable.string = "解锁"
                }else if(unlock == 0){
                    status_lable.string = this._adShowNum + "/" + shopItemData[skinidAd].usenum
                }else if(unlock == 2){
                    icon.active = false
                    status_lable.string = "已拥有"
                }
            }
        }, interval, repeat, delay);

    },

    inviteBtnCall(event, customEventData){
        AudioMgr.playEffect("button")
        var node = event.target;
        var button = node.getComponent(cc.Button);
        button.interactable = false

        var parent = node.parent
        console.log("---------------------------------- playname:" + parent.playname + " head:" + parent.head + " friend_uid:" + parent.friend_uid + " TEAM_ID:" + TEAM_ID)

        // 邀请平台好友
        GameCallPlatform.inviteGame(parent.friend_uid,parent.playname,parent.head,GAME_ID,TEAM_ID)
    },

    inviteQQBtnCall(){
        console.log("--------------------------------------- inviteQQBtnCall")
        AudioMgr.playEffect("button")
        GameCallPlatform.inviteGameQQ(ID,GAME_ID,TEAM_ID)
    },

    inviteWXBtnCall(){
        console.log("--------------------------------------- inviteWXBtnCall")
        AudioMgr.playEffect("button")
        GameCallPlatform.inviteGameWX(ID,GAME_ID,TEAM_ID)
    },

    // re 接受邀请
    Req_TeamInviteAccept(team_id){
        if(team_id){
            console.log("----------------------------------- Req_TeamInviteAccept team_id:" + team_id)
            let msg = new slither_pb.CS_Snake();
            msg.setCmdid(slither_pb.CS_CMD_ID.CS_CMD_TEAM_ACCEPT);

            let reqMsg = new slither_pb.CS_TeamInvite_Accept_Req()
            reqMsg.setTeamid(team_id)
            let infos = reqMsg.getInfos()
            infos.setUserid(ID)
            infos.setUsername(GameConfig.getInstance().myName)
            infos.setHead(this._selfHeadUrl)          // 头像
            infos.setHeadframe(0)
            infos.setVip(0)
            reqMsg.setInfos(infos)
            reqMsg.setSkinid(SNAKE_ID.toString())     // 皮肤
            reqMsg.setDressid(0)
            msg.setTeaminviteaccept(reqMsg)

            let pb_data = msg.serializeBinary();
            Socket.requestPB(slither_pb.CS_CMD_ID.CS_CMD_TEAM_ACCEPT, ID,ROOM_ID,pb_data);

            TEAM_ID = team_id  // 房间号
        }else{
            console.log("----------------------------------- Req_TeamInviteAccept team_id or info is error")
        }
    },


    // ack 接受邀请
    Ack_TeamInviteAccept(msg){
        console.log("-------------------------------- Ack_TeamInviteAccept msg:" + JSON.stringify(msg))
        let data = msg.getTeaminviteacceptres()
        let rcode = data.getRcode()
        if(rcode == 1){
            console.log("---------------------------------- 队伍已解散")
            this.roomTips("队伍已解散")
            return
        }else if(rcode == 2){
            console.log("---------------------------------- 队伍已满")
            this.roomTips("队伍已满")
            return
        }else if(rcode == 3){
            console.log("---------------------------------- 已在队伍中")
            this.roomTips("已在队伍中")
            return
        }

        this._inviteCreateRoom = true
        this._houseId = data.getHosterid()  // 房主ID
        console.log("---------------------------------- Ack_TeamInviteAccept this._houseId:" + this._houseId)
        this.createRoomView.active = true
        this._backflag = false
        var beginBtn = this.createRoomView.getChildByName("bg").getChildByName("beginBtn")
        beginBtn.active = false

        this.roomname.string = GameConfig.getInstance().myName + "的房间(" + "房号:" + TEAM_ID + ")"
        this.createRoomView.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log("-------------------------- createRoomView is Mouse down")
        });


        // 显示进房间的玩家
        let list = data.getInfosList();
        let self = this;
        list.forEach(info => {
            this._roomNum ++
            var userid = info.getUserid()
            var name = info.getUsername()
            var head = info.getHead()
            this.setRoomPlayerView(userid,name,head,this._roomNum)
        });

        // 显示进房间的玩家
        this._roomNum ++
        this.setRoomPlayerView(ID,GameConfig.getInstance().myName,this._selfHeadUrl,this._roomNum)

        // 刷新好友列表
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            this._friendsList = []
            this._friendsOnLineList = []
            GameCallPlatform.getFriendsList(GAME_ID)
        }
    },

    // ntf 接受邀请
    Ntf_TeamInviteAccept(msg){
        let data = msg.getTeaminviteacceptntf()
        let info = data.getInfo()
        console.log("----------------------------------------- Ntf_TeamInviteAccept info:" + JSON.stringify(info))
        var userid = info.getUserid()
        var name = info.getUsername()
        var head = info.getHead()
        this._roomNum ++
        if(BACKSTAGE){
            this._inviteUserid = info.getUserid()
            this._inviteName = info.getUsername()
            this._inviteHead = info.getHead()
            this._inviteFlag = true
        }else{
            this._inviteFlag = false
            this.setRoomPlayerView(userid,name,head,this._roomNum)
        }
    },


    // 支付测试
    payBtnCall(){
        console.log("---------------------------------------------- 支付测试")
        this.showWaitLayer()
        GameCallPlatform.thirdPay(GAME_ID,1,30,"wechat")
    },

    // 支付回调
    payResultCall(flag){
        console.log("---------------------------------------------- 支付回调")
        this.loadingClean()
        this.unschedule(this.loadingClean)

        this.payTips.node.opacity = 255
        if(flag){
            this.payTips.string = "支付成功"
        }else{
            this.payTips.string = "支付失败"
        }

        var delayTime = cc.delayTime(1.0);
        var fade = cc.fadeOut(1.0);
        var seq = cc.sequence(delayTime,fade);
        this.payTips.node.runAction(seq);
    },


});
