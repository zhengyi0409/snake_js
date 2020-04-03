
var CubicSpline = require("../game/CubicSpline");

const SCORE_TO_LEN = [
    [200,   250,    15040,  66040],
    [160,   200,    7040,   15040],
    [120,   160,    3350,   7040],
    [80,    120,    1350,   3350],
    [50,    80,     600,    1350],
    [20,    50,     150,    600],
    [5,     20,     0,      150],
];


const MAX_WIDTH = 88;
const MAX_LENGTH_SCORE = 2000
const BODY_GAP = 19.2;
const c_getMoveSteps = function(start, end) {
    let gap = cc.pSub(end, start);
    return [cc.pAdd(start, cc.pMult(gap, 0.25)), cc.pAdd(start, cc.pMult(gap, 0.5)), cc.pAdd(start, cc.pMult(gap, 0.75)), end];
};
const SPEED_FOOD_SCORE = 0.2;
const SPEED_FOOD_GAP = 30;
const INIT_LENGTH = 2;
const SNAKE_MAX_LEN = 800;
const MAP_WIDTH = 9600/2;
const MAP_HEIGHT = 9600/2;
const MAP_CENTER_X = MAP_WIDTH / 2;
const MAP_CENTER_Y = MAP_HEIGHT / 2;

const SPEED_MULT_NORMAL = 1;//正常行走的倍率
const SPEED_MULT_SPEEDUP = 2;//加速行走的倍率

let Game;
let sinTable, cosTable;

window.eSnakeStatus_Normal = 1;
window.eSnakeStatus_Dead = -1;

Math.fmod = function (a,b) { return Number((a - (Math.floor(a / b) * b)).toPrecision(8)); };
Math.fabs = function(d){ return Math.abs(d*1000) / 1000; };

cc.Class({
    extends: cc.Component,

    ctor () {
        this._gname = "";
    },

    properties: {
        head: {                 // 头
            default: null,
            type: cc.Node,
        },
        tail: {                 // 尾巴
            default: null,
            type: cc.Node,
        },
        nameLabel: {            // 名字label
            default: null,
            type: cc.Label
        },
        bodyFrames: {
            default: [],
            type: cc.SpriteFrame,
            tooltip: "蛇身体图片集"
        },
        originScore: {
            default: 20,
            displayName: "初始分数"
        },
        originWidth: {
            default: 34,
            displayName: "初始宽度"
        },
        bodyWidth: {
            default: 51,
            displayName: "蛇身原宽度"
        },

        guangquan_prefab:{
            default: null,
            type: cc.Prefab,
        },

        gname: {    // 名字
            get: function() {
                return this._gname;
            },
            set: function(str) {
                this._gname = str;
                this.nameLabel.string = str;
            },
            visible: false,
        },
        _deadFoodRatio: 0.5,    // 死亡食物总分的占比
        _bodys: {               // 身体节点集
            default: [],
            type: cc.Node
        },

        _score: 0,              // 分数
        _length: 2,             // 长度（身体个数，包括头尾）
        _width: 0,              // 宽度
        _angle: 0,              // 方向
        _isSelf: false,         // 自身标识
        _speed: 0,              // 速度
        _speed_normal: 0,       // 平时的速度值
        _speed_up: 0,           // 加速后的速度值
        _speedUp: false,        // 加速标识
        _speedUpFlag: false,    // 操作加速标识
        _speedUpLock: false,    // 锁定加速
        _targetAngle: 0,        // 目标转向角度
        _sid: "",               // 皮肤id
        _gid: 0,                // 对战时唯一id
        _speedFrameIdx: 0,      // 加速帧数索引
        _isDead: false,         // 是否死亡
        _speedAnimFlag: false,  // 加速动画标识
        _animNodes: {           // 加速节点集合
            default: [],
            type: cc.Node
        },
        _animFrameIdx: 0,       // 加速动画帧（序列帧动画）
        _needRotate: false,     // 是否转向标识
        _worldPosition: null,   // 世界坐标
        _kill: 0,               // 击杀数
        _wudiTime: 2,           // 无敌时间
        _trace: null,           // 服务器下发的轨迹集合
        _canRecycle: false,     // 是否回收蛇标识
        _eatList : [],          // 吃的食物列表
        _gridIdx : 0,           // 蛇所在的区域
        _netAngle: 0,
        _m_iStatus: null,
        _m_x: null,
        _m_y: null,
        _newBorn:true,
        m_angle:0,
        m_toAngle:0,
        m_vx:0,
        m_vy:0,
        x:0,
        y:0,
        m_iLastUpdateTime:0,
        curSpeed:0,
        m_bHasData:true,
        m_bInView:false,
        m_BodyPosArr_SvrX:[],  //这两个数组，是通过服务器数组同步过来的轨迹
        m_BodyPosArr_SvrY:[],
        m_BodyPosArr_SvrX_Splined:[],//这两个数组，是上列轨迹平滑分割后的轨迹。用来逼近
        m_BodyPosArr_SvrY_Splined:[],
        m_fBodyLength_Svr:0,  //这个长度，是轨迹的曲线长度
        m_iMachineLevel:-1,
        m_BodyPosList_Show:[], //用来显示
        m_iBodyLen:0,    //这个长度，是轨迹的点数  //3个地方维护：1、addBody的时候++  2、减少的时候直接=  3、refresh的时候直接=
        g_LinearInterpolation:10,
        m_iLastWidth:1,
        m_iBodyLen_real:0,
        m_needTail:true,
        m_BodyImgs:[],              //身体的节点 ，联网版用
        m_spUpAnimationNodes:[],    //加速的动画图片
        m_vSpritePool:[],
        m_camera:null,
        bInView:true,  // 是否在
        score_length:0,  // 长度限制了，分数应该为最大长度时的分数
        creatSnakeNode:false,
        m_iLastAvoidFrame:-1,
        m_iLastAvoidId:-1,
        m_fLastAvoidDirection:1,
        _guangquanSprite:null,

        //(zhengyi连麦处理)
        _maiStatus:2,                // 开麦还是关麦（1连麦失败、2开麦、3闭麦）
        _maiTaklingStatus:false,    // 说话还是没说话
    },

    onLoad () {
        this.head.zIndex = 1000;
        this.tail.zIndex = 1;
        this.tail.posIdx = 0;
        this.m_fLastAvoidDirection = 1;
        this.m_bInView = false;
        this.creatSnakeNode = false;
        this._score = this.originScore;
        this.nameLabel.node.scaleY = 1;
        this.nameLabel.node.parent = this.node;
        this._m_iStatus  = eSnakeStatus_Normal;
        this._dt = 0;
        this._maiStatus = 3  //(zhengyi连麦处理)
        this._maiTaklingStatus = false  //(zhengyi连麦处理)
    },

    start () {
        // 获取一些游戏通用参数
        Game = cc.director.getScene().getChildByName("Game").getComponent("Game");
        if (Game) {
            this._speed_normal = Game.speed_normal;
            this._speed_up = Game.speed_up;
            this._speed = this._speed_normal;
            sinTable = Game._sinTable;
            cosTable = Game._cosTable;
        }
        // 没有轨迹，尾巴在头后面，身体是在头尾之间生成出来的
        if (!this._trace) {
            this.tail.position = cc.pAdd(this.head.position, this.tail.position);
        }
        // 根据分数算出长宽，生成身体，缩放蛇
        let info = this.score2_w_l();
        this._width = info[0];
        this._length = info[1];

        // 只处理单机版
        if(GAME_MODE == 0){
            this.InitgrowUp();
            this.scaleSnake();
        }
        this._worldPosition = this.node.convertToWorldSpace(this.head.position);

        // 无敌
        if (this._wudiTime > 0) {
            //console.log("------------------------------- 初始化无敌时间 this._wudiTime:" + this._wudiTime);
            this.node.opacity = 150;
            var self = this;
            this.scheduleOnce(function() {
                self.cancelInvicible();
            }, this._wudiTime);

            this.scheduleOnce(function() {
                if(this._isSelf){
                    this._guangquanSprite = cc.instantiate(this.guangquan_prefab);
                    this._guangquanSprite.parent = this.node;
                    this._guangquanSprite.position = this.head.position;
                }
            }, 0.1);
        }

        // 单机版AI开启
        if (!this._isSelf && GAME_MODE == 0) {
            let ai = this.head.getChildByName("AI");
            ai.active = true;
        }

        this.initListeners();
        Notification.dispatch("E_GAME_SNAKEBORN", this);
    },

    update (dt) {
        if(this._guangquanSprite){  // 光圈
            this._guangquanSprite.position = this.head.position;
        }

        if (GAME_MODE == 1) { // 网络版不执行以下代码
            return;
        }

        // 判断是否加减速
        //if (this.tail.posIdx % 2 == 1) {
            if (this._speedUpFlag) {
                this._speed = this._speed_up;
                this._speedUp = true;
            } else {
                this._speed = this._speed_normal;
                this._speedUp = false;
                this._speedFrameIdx = 0;
                // 取消加速动画
                if (this._speedAnimFlag) {
                    let len = this._bodys.length;
                    this._speedAnimFlag = false;
                    for (let i = 0; i < len; i++) {
                        //this._animNodes[i].getComponent(cc.Animation).stop();
                        this._animNodes[i].active = false;
                    }
                }
            }
        //}

        // 转向单机 其他AI蛇
        if (this._needRotate && LocalManager.getInt("ID") != this._gid) {
            this.changeDir();
        }

        // 加速
        this.accelerate();
        // 移动
        this.moveSnake();

    },

    // 单机版碰撞检测
    CheckCollider(m_arrSnake,attackid){
        let sm = this;
        if(this._wudiTime > 0){
            // 蛇出生无敌状态中，不做任何碰撞检测
            return;
        }

        //本地被置为死亡的蛇，不再参与碰撞检测
        if (this._m_iStatus  != eSnakeStatus_Normal) {
            return;
        }

        // 撞到墙
        if (this.checkIfCollideWithEdge()) {
            this.onDead({id : this._gid, isOut : true ,killer : -1});
            return;
        }

        let ptHeadM = this.head.position;
        let wM = sm._width / 2 - 5 * sm._width / 28;
        let iSnakeSize = m_arrSnake.length;
        for (let n = 0; n < iSnakeSize; n++){
            let sn = m_arrSnake[n];
            if(Utils.isEmptyObject(sn)){
                continue;
            }

            if(sn._m_iStatus != eSnakeStatus_Normal) {
                continue;
            }
            if (sm._gid == sn._gid) {
                continue;
            }

            let wN = sn._width / 2 - 5 * sn._width / 28;
            let ptHeadN = sn.head.position;
            let ptTailN = sn.tail.position;
            let wAdd = wM + wN;

            //sm的头和sn的头检测
            if(Math.abs(ptHeadM.x - ptHeadN.x) < wAdd  &&  Math.abs(ptHeadM.y - ptHeadN.y) < wAdd){
                //长度小的先死；
                //长度相等，id小的先死
                if (sm._bodys.length < sn._bodys.length  || (sm._bodys.length == sn._bodys.length  && sm._gid < sn._gid)){
                    attackid = sn._gid;
                    //send request sm is killed by sn
                    //console.log("-------------------------------- gid = " + this._gid + " 撞到了 gid = " + attackid + " 的头部");
                    this.onDead ({id : sm._gid, isOut : false,killer : attackid});
                    return;
                }else{
                    //不需要记录，反正sn自己也会检测的
                    //send request sn is killed by sm
                }
                //此处continue，可能会发生同一帧被人杀死又杀死别人的情况。但是与其给大家排优先级，还不如就同时处理更公平
                //又或者直接return，只处理一个人
                continue;
            }

            //sm的头和sn的身体检测
            let nGap = 1;
            for (let k = 0; k < sn._bodys.length; k = k + nGap){
                    let body = sn._bodys[k];
                if(Utils.isEmptyObject(body)){
                    continue;
                }
                let ptOneBodyN = cc.v2(body.x, body.y)
                let dx = Math.abs(ptHeadM.x - ptOneBodyN.x);
                let dy = Math.abs(ptHeadM.y - ptOneBodyN.y);

                if(dx < wAdd  &&  dy < wAdd) {
                    attackid = sn._gid;
                    //send request sm is killed by sn
                    //console.log("---------------------------------- gid = " + this._gid + " 撞到了 gid = " + attackid + " 的身体");
                    this.onDead ({id : sm._gid, isOut : false,killer : attackid});
                    return;
                }else{
                    let distance = Math.sqrt( dx * dx + dy * dy ) - wM - wN;
                    if (distance > 0){
                        let skipStep = distance / (sn.GetSquamaGap());
                        skipStep = Math.round(skipStep);
                        if (skipStep > nGap) {
                            k += skipStep - nGap;
                        }
                    }
                }
            }

            //sm的头和sn的尾检测
            if(Math.abs(ptHeadM.x - ptTailN.x) < wAdd  &&  Math.abs(ptHeadM.y - ptTailN.y) < wAdd){
                attackid = sn._gid;
                //send request sm is killed by sn
                //console.log("---------------------------------- gid = " + this._gid + " 撞到了 gid = " + attackid + "的尾巴");
                this.onDead ({id : sm._gid, isOut : false,killer : attackid});
                return;
            }
        }

    },

    // 是否撞墙
    checkIfCollideWithEdge(){
        let headPos = this.head.position;
        let isCollide = false;

        var vx = headPos.x - MAP_CENTER_X;
        var vy = headPos.y - MAP_CENTER_Y;
        var disP = cc.v2(vx,vy);

        let sqrtDis = (disP.x * disP.x + disP.y * disP.y);
        if (sqrtDis > MAP_CENTER_X * MAP_CENTER_X) {
            isCollide = true;
        }
        return isCollide;
    },

    // 单机版
    IsInView_Stand(){
        //自己就不用再遍历了，直接返回ok
        if(this._isSelf){
            return true;
        }
        let rect = this.m_camera.GetMapBound();
        if(rect == null){
            return true;
        }

        // 头
        let headPosition = cc.v2(this.head.x, this.head.y);
        if(cc.rectContainsPoint(rect,headPosition)){
            return true;
        }

        // 身体
        let len = this._bodys.length;
        for (let i = 0; i < len; i++) {
            let body = this._bodys[i];
            let bodyPosition = cc.v2(body.x, body.y);
            if(cc.rectContainsPoint(rect,bodyPosition)){
                return true;
            }
        }

        // 尾巴
        let tailPosition = cc.v2(this.tail.x, this.tail.y);
        if(cc.rectContainsPoint(rect,tailPosition)){
            return true;
        }

        return false;
    },

    // 网络版
    IsInView_Net(){
        //自己就不用再遍历了，直接返回ok
        if(this._isSelf){
            return true;
        }

        let rect = this.m_camera.GetMapBound();
        if(rect == null){
            return true;
        }

        //用m_BodyPosArr_SvrX_Splined肯定更准确，但是m_BodyPosArr_SvrX_Splined需要做平滑才能用。与其每帧spline，不如判断准确性低一点。
        for (let i = 1; i < this.m_BodyPosArr_SvrX.length; i++) {
            let posX = this.m_BodyPosArr_SvrX[i];
            let posY = this.m_BodyPosArr_SvrY[i];
            let nodePos = cc.v2(posX, posY);
            if(cc.rectContainsPoint(rect,nodePos)){
                return true;
            }
        }
        return false;

    },

    initListeners () {
        if (this._isSelf) {
            //cc.log("-----------------------------------------_isSelf initListeners")
            Notification.on("E_GAME_ROTATESNAKE", this.onRotate, this);
            Notification.on("E_GAME_SPEEDUP", this.onSpeedUp, this);
            Notification.on("E_GAME_SPEEDDOWN", this.onSpeedDown, this);
            Notification.on("E_GAME_SPEEDLOCK", this.onSpeedLock, this);
            if(window._speedLockTag){
                this._speedUpLock = true;
            }else{
                this._speedUpLock = false;
            }
        }
        Notification.on("E_GAME_SNAKEDEAD", this.onDead, this);
        Notification.on("E_GAME_KILLER", this.onKill, this);
        Notification.on("E_GAME_OTHERKILLER", this.onOtherKill, this);
    },

    removeListeners () {
        if (this._isSelf){
            //cc.log("-----------------------------------------_isSelf removeListeners")
        }
        Notification.removeListenersByObj(this);
    },
    
    onDisable () {
        if (this._isSelf){
            //cc.log("-----------------------------------------_isSelf onDisable")
        }
    },

    onDestroy () {
        if (this._isSelf){
            //cc.log("-----------------------------------------_isSelf onDestroy")
        }
        this.removeListeners();
    },

    // 获取蛇头的世界坐标
    getWorldPosition () {
        return this._worldPosition ? this._worldPosition : this.node.convertToWorldSpace(this.head.position);
    },

    // 吃食物（加分与收集食物列表）
    eatFood (food) {
        let data = [food.x, food.y, food.type, food.id];
        this._eatList.push(data);
        if (GAME_MODE == 1){
            if (this._isSelf && this._m_iStatus != eSnakeStatus_Dead){
                if(food._score){
                    this.updateScore2(food._score);
                }else{
                    console.log("----------------------------------- eatFood score is null");
                }
            }else if(!this._isSelf && this._m_iStatus != eSnakeStatus_Dead){
                this.rectifyLengthByScore();
            }
        }else{
            //console.log("--------------------------------------- food._score:" + food._score);
            this.updateScore2(food._score);
        }
    },

    updateScore(){
        if(this._score < 6){
            this._speedUp = false;
            this._speedUpFlag = false;
        }

        if(GAME_MODE == 0){
            let info = this.score2_w_l();
            this._width = info[0];
            this._length = info[1];
            if(this._length <= 250){ // 长度限制
                this.score_length = this._score;
                this.growUp();
                this.scaleSnake();
            }
        }else{
            this.rectifyLengthByScore();
        }
    },

    updateScore2(s){
        if (!cc.isValid(this.node)){
            return;
        }

        this._score += s;
        if (this._score < 0){
            this._score = 0;
        }
        this.updateScore();
    },


    // 设置节点scale
    SetBodyWidth(width){
        let scale = width / this.originWidth;
        for (let i = 0; i < this.m_BodyImgs.length; i++) {
            this.m_BodyImgs[i].scale = scale
            this.m_spUpAnimationNodes[i].scale = scale;
        }
    },

    rectifyLengthByScore(){
        //cc.log("--------------------------------　rectifyLengthByScore");
        let info = this.score2_w_l();
        let width = info[0];
        this._length = info[1];
        this.setWidth(width);
    },

    setWidth(width){
        if (this._width != width) {
            this._width = width;
            let scale = this._width / this.originWidth;
            this.head.scale = scale;
            this.nameLabel.node.scale = scale;
        }
    },


    // 分数转换成宽度与长度（公式是从lua端搬过来的）
    score2_w_l () {
        let length = 5;
        let size = SCORE_TO_LEN.length;

        if(GAME_MODE == 0){
            if (this._score >= MAX_LENGTH_SCORE) {   // 单机版限制增长分数极限值
                length = 94;              // 单机版长度极限控制到94不再增长
            } else {
                for (let i = 0; i < size; i++) {
                    if (this._score >= SCORE_TO_LEN[i][2] && this._score < SCORE_TO_LEN[i][3]) {
                        length = (this._score - SCORE_TO_LEN[i][2])/(SCORE_TO_LEN[i][3]-SCORE_TO_LEN[i][2])*(SCORE_TO_LEN[i][1]-SCORE_TO_LEN[i][0])+SCORE_TO_LEN[i][0];
                        break;
                    }
                }
            }
        }else{
            if (this._score >= SCORE_TO_LEN[0][3]) {
                length = 250;   // 长度极限控制到250不再增长
            } else {
                for (let i = 0; i < size; i++) {
                    if (this._score >= SCORE_TO_LEN[i][2] && this._score < SCORE_TO_LEN[i][3]) {
                        length = (this._score - SCORE_TO_LEN[i][2])/(SCORE_TO_LEN[i][3]-SCORE_TO_LEN[i][2])*(SCORE_TO_LEN[i][1]-SCORE_TO_LEN[i][0])+SCORE_TO_LEN[i][0];
                        break;
                    }
                }
            }
        }

        length = Math.floor(length)
        let w = 34;
        if (this._score >= 100) { 
            w = Math.floor(8*(Math.pow(0.01*this._score,0.4)+3.4+Math.pow(((this._score)/20000),0.9))) - 1;
        }
        w = Math.min(w, MAX_WIDTH);
        
        return [w, length + 2];
    },

    // 根据宽度缩放蛇  (不能node缩放，否则坐标系有变动，需要单个节点的去缩放)
    scaleSnake () {
        let scale = Utils.fixedFloat(this._width / this.bodyWidth);
        if (this.head.scale == scale) return;

        // 头
        this.head.scale = scale;
        // 身体节点
        let len = this._bodys.length;
        for (let i = 0; i < len; i++) {
            let body = this._bodys[i];
            body.scale = scale;
        }
        // 尾巴
        this.tail.scale = scale;
        //名字
        this.nameLabel.node.scale = scale;

    },

    // 生成一个蛇身节点
    newBody (idx) {
        let frameIdx = idx % this.bodyFrames.length;
        let key = this._sid + "_" + frameIdx;
        let pool = Game._snakeBodyPool[key];
        let node;
        if (pool.size() > 0) {
            node = pool.get();
        } else {
            node = cc.instantiate(Game._prefabs.body);
            let sp = node.getComponent(cc.Sprite);
            sp.spriteFrame = this.bodyFrames[frameIdx];
        }

        let nodeImage = node.getComponent(cc.Sprite);
        nodeImage.enabled = true; // 需要设置一下，可能之前死亡的蛇在屏幕外没有显示
        node.name = "body_" + frameIdx;
        node.parent = this.node;
        node.zIndex = 999 - idx;
        node.posIdx = 0;

        let scale = Utils.fixedFloat(this._width / this.bodyWidth);
        node.scale = scale;
        this._bodys.push(node); // 数组末尾添加

        let speedUpNode = cc.instantiate(Game._prefabs.speedup);
        let image = speedUpNode.getComponent(cc.Sprite);
        image.dstBlendFactor = cc.BlendFunc.BlendFactor.ONE;
        speedUpNode.parent = this.node;
        speedUpNode.zIndex = 1999 - idx;
        this._animNodes.push(speedUpNode);
        return node;
    },

    //
    InitgrowUp () {
        var count = this._bodys.length;
        var addCount = this._length - INIT_LENGTH - count;
        if (addCount == 0) return;

        var end, idx;
        if (count == 0) {
            end = this.head;
            idx = 0;
        } else {
            end = this._bodys[count - 1];
            idx = end.posIdx - 4;
        }

        // 加分后变长处理
        if (addCount > 0) {
            var interval = 0.02 // 以秒为单位的时间间隔
            var repeat = addCount; // 重复次数
            var delay = 0; // 开始延时
            var id = 0;
            this.schedule(function() {
                id ++;
                if(id == repeat){
                    this.creatSnakeNode = false;
                    //cc.log("--------------------------------- 创建了" + id + "个蛇身节点");
                }else{
                    this.creatSnakeNode = true;
                }
                let node = this.newBody(count);
                if (this._trace) {  // 有轨迹的按轨迹位置生成身体位置
                    node.position = cc.v2(this._trace[count][0], this._trace[count][1]);
                    node.posIdx = idx;
                } else {
                    node.position = end.lastPos ? end.lastPos : end.position;
                    node.posIdx = idx;
                    idx -= 4;
                }
                node.rotation = end.rotation;
                node.posArray = end.posArray;

                let speedUpNode = this._animNodes[count];
                if (this._speedAnimFlag) {
                    speedUpNode.position = node.position;
                } else {
                    speedUpNode.active = false;
                }
                count++;
                end = node;

                if(this.creatSnakeNode == false){
                    if (this._trace) {  // 有轨迹的尾巴就在身体最后一节
                        this.tail.position = cc.v2(this._trace[count-1][0], this._trace[count-1][1]);
                        this._trace = null;
                        this.tail.posIdx = idx - 4;
                    } else {
                        this.tail.posIdx = idx + 4;
                    }
                }
            }, interval, repeat - 1, delay);
        }
    },

    // 成长（减速会变短）
    growUp () {
        if(this._wudiTime > 0){
            return;
        }

        let count = this._bodys.length;
        let addCount = this._length - INIT_LENGTH - count;
        if (addCount == 0) return;

        let end, idx;
        if (count == 0) {
            end = this.head;
            idx = 0;
        } else {
            end = this._bodys[count - 1];
            idx = end.posIdx - 4;
        }

        // 加分后变长处理
        if (addCount > 0) {
            while (addCount > 0) {
                let node = this.newBody(count);
                if (this._trace) {  // 有轨迹的按轨迹位置生成身体位置
                    node.position = cc.v2(this._trace[count][0], this._trace[count][1]);
                    node.posIdx = idx;
                } else {
                    node.position = end.lastPos ? end.lastPos : end.position;
                    node.posIdx = idx;
                    idx -= 4;
                }
                node.rotation = end.rotation;
                node.posArray = end.posArray;

                let speedUpNode = this._animNodes[count];
                if (this._speedAnimFlag) {
                    speedUpNode.position = node.position;
                } else {
                    speedUpNode.active = false;
                }

                count++;
                addCount--;
                end = node;
            }

            if (this._trace) {  // 有轨迹的尾巴就在身体最后一节
                this.tail.position = cc.v2(this._trace[count-1][0], this._trace[count-1][1]);
                this._trace = null;
                this.tail.posIdx = idx - 4;
            } else {
                this.tail.posIdx = idx + 4;
            }
        } else if (addCount < 0) {      // 减分后变短处理
            while (addCount < 0) {
                let node = this.tail;
                node.position = end.position;
                node.rotation = end.rotation;
                node.posArray = end.posArray;
                node.posIdx = end.posIdx;

                let pop = this._bodys.pop();
                let frameIdx = pop.name.slice(5);
                let pool = Game._snakeBodyPool[this._sid + "_" + frameIdx];
                if (pool) {
                    pool.put(pop);
                } else {
                    pop.removeFromParent();
                }

                let speedUpNode = this._animNodes.pop();
                speedUpNode.removeFromParent();

                count--;
                addCount++;
                end = this._bodys[count - 1];
            }
        }
    },

    // 移动
    moveSnake () {
        if(this.creatSnakeNode){
            //cc.log("---------------------------------------snake not move");
            return;
        }

        let len = this._bodys.length;
        if (len <= 0) return;
        
        // 尾巴
        this.moveBodyStep(this.tail, this._bodys[len - 1]);

        // 身体（从后往前）
        for (let i = len - 1; i >= 0; i--) {
            let body = this._bodys[i];
            let front;
            if (i == 0) {
                front = this.head;
            } else {
                front = this._bodys[i - 1];
            }
            this.moveBodyStep(body, front);
            if (this._speedUp) {
                this._animNodes[i].position = body.position;
            }
        }
        
        // 头部单机版
        if (GAME_MODE == 0) {
            let angle = Math.round(90 - this.head.rotation);
            if(isNaN(cosTable[angle]) || isNaN(sinTable[angle])){
                if(angle < 0){
                    if(angle < - 720){
                        let tag = Math.floor( Math.abs(angle) / 720 );
                        angle = angle + 720 * tag;
                    }
                    this.head.x += cosTable[angle] * this._speed;
                    this.head.y += sinTable[angle] * this._speed;
                }else{
                    if(angle > 720){
                        let tag = Math.floor( Math.abs(angle) / 720 );
                        angle = angle - 720 * tag;
                    }
                    this.head.x += cosTable[angle] * this._speed;
                    this.head.y += sinTable[angle] * this._speed;
                }
            }else{
                this.head.x += cosTable[angle] * this._speed;
                this.head.y += sinTable[angle] * this._speed;
            }

            if(isNaN(this.head.x) || isNaN(this.head.y)){
                cc.log("-------------------------------- head position is ERROR!!!");
            }

            this._worldPosition = this.node.convertToWorldSpace(this.head.position);
            this.nameLabel.node.x = this.head.x;
            this.nameLabel.node.y = this.head.y - 40;

        }
    },

    // 身体节点每帧的移动
    moveBodyStep (node, front) {
        if (this._speed == 0) return;
        if (node.posIdx == 0) {
            if (front.posArray) {
                node.posArray = front.posArray;
            } else {
                // 一个身体节点移动到一个身体节点，分成4帧渲染，c_getMoveSteps是算出4帧分别的位置
                node.posArray = c_getMoveSteps(node.position, front.position);
            }
            node.targetAngle = front.rotation;
            if (this._speedUp)
                node.posIdx = 1;
        }
        let pos = node.posIdx < 0 ? node.position : node.posArray[node.posIdx];
        node.position = pos;
        // 加速的话，分2帧渲染
        node.posIdx += this._speedUp ? 2 : 1;
        if (node.posIdx > 3) {
            node.posIdx = 0;
            node.rotation = node.targetAngle;
            node.lastPos = node.position;
        }
    },

    // 死亡后的逻辑处理(id撞蛇的  killer被撞蛇的)
    dead (id, isOut, killer) {
        if (this._isDead){
            return;
        }

        if (GAME_MODE == 0){
            // 撞到墙了
            if(killer == -1){
                if(this._isSelf){
                    AudioMgr.playEffect("die",false);
                    console.log("------------------------------------------ 玩家自己撞到了墙,玩家的gid = " + this._gid);
                }else{
                    console.log("------------------------------------------ 其他玩家撞到了墙,其他玩家的gid = " + id);
                }
                this.deadDetail(id, isOut, killer);
                return;
            }

            // 撞到了蛇
            if(this._isSelf){
                AudioMgr.playEffect("die",false);
            }else{
                // 只统计玩家自己杀死了多少蛇，其他蛇不用显示就不用统计了
                if(!Utils.isEmptyObject(Game._selfSnake) && Game._selfSnake._gid!= null && killer == Game._selfSnake._gid){
                    console.log("--------------------------------- 自己杀死了蛇,杀死的蛇的gid = " + id);
                    AudioMgr.playEffect("kill",false);
                    Notification.dispatch("E_GAME_KILLER",id,this);
                }
            }
            Notification.dispatch("E_GAME_DEADFOOD", this);
            this.deadDetail(id, isOut, killer);
        }else{
            // 撞到了蛇
            // 只统计玩家自己杀死了多少蛇，其他蛇不用显示就不用统计了
            if(!Utils.isEmptyObject(Game._selfSnake) && Game._selfSnake._gid != null && killer == Game._selfSnake._gid){
                console.log("--------------------------------- 自己杀死了蛇,被杀的蛇的gid = " + id);
                Notification.dispatch("E_GAME_KILLER",id,this);
            }else{
                Notification.dispatch("E_GAME_OTHERKILLER",killer,this);  // 其他玩家杀死了蛇
            }
            this.deadDetail(id, isOut, killer);
        }
    },

    // 死亡具体细节处理
    deadDetail(id, isOut, killer){
        this._isDead = true;
        this._speed = 0;
        this.enabled = false;
        this._m_iStatus = eSnakeStatus_Dead;
        this.head.getChildByName("AI").active = false;

        // 关闭加速动画
        if (GAME_MODE == 0){
            if (this._speedAnimFlag) {
                for (let i = 0; i < this._animNodes.length; i++) {
                    //this._animNodes[i].getComponent(cc.Animation).stop();
                    this._animNodes[i].active = false;
                }
                this._speedAnimFlag = false;
            }

            // 渐隐后，直接死亡，回收 （单机版）
            this.node.runAction(cc.sequence(cc.fadeOut(1.0), cc.callFunc(function() {
                Notification.dispatch("E_GAME_SNAKEDIE", this);
                if(this._isSelf){
                    this.recycle();
                }
            }, this)));

        }else{
            if (this._speedAnimFlag) {
                for (let i = 0; i < this.m_spUpAnimationNodes.length; i++) {
                    //this.m_spUpAnimationNodes[i].getComponent(cc.Animation).stop();
                    this.m_spUpAnimationNodes[i].active = false;
                }
                this._speedAnimFlag = false;
            }

            if (this._isSelf) {
                // 渐隐后，通知服务器死亡，在收到服务器下发的死亡消息后再处理死亡逻辑
                Socket.request(ProtoEnum.CMD_SLITHER_DEAD, 0, id, ROOM_ID, {id:id, dead:isOut?0:1, attack:isOut?null:killer._gid});
                this.node.runAction(cc.sequence(cc.fadeOut(1.0), cc.callFunc(function() {
                    this._canRecycle = true;
                }, this)));
            } else {
                // 其他的蛇渐隐后直接死亡，回收
                this.node.runAction(cc.sequence(cc.fadeOut(1.0), cc.callFunc(function() {
                    Notification.dispatch("E_GAME_SNAKEDIE", this);
                    this.recycle();
                }, this)));
            }

            // 销毁mai动画
            Notification.dispatch("setmaiDestory", this);
        }
    },

    // 回收死亡的蛇
    recycle () {
        if(GAME_MODE == 0){
            for (let i = 0; i < this._bodys.length; i++) {
                let body = this._bodys[i];
                let frameIdx = body.name.slice(5);
                let pool = Game._snakeBodyPool[this._sid + "_" + frameIdx];
                if (pool) {
                    body.lastPos = null;
                    body.position = cc.v2(0, 0);
                    body.scale = 1;
                    pool.put(body);
                }
            }
            if(this._isSelf){
                Game._selfSnake = null;
            }
        }else{
            // 尾巴不需要回收
            for (let i = 0; i < this.m_BodyImgs.length - 1; i++) {
                let body = this.m_BodyImgs[i];
                let frameIdx = body.name.slice(5);
                let pool = Game._snakeBodyPool[this._sid + "_" + frameIdx];
                if (pool) {
                    body.lastPos = null;
                    body.position = cc.v2(0, 0);
                    body.scale = 1;
                    pool.put(body);
                }
            }
        }

        this._bodys = null;
        this._animNodes = null;
        this.node.destroy();
    },

    changeDir () {
        let angle = this.head.rotation; // 默认值
        if (GAME_MODE == 1) { // 网络版
            angle = this._netAngle;
        }else{ //单机版
            angle = this._targetAngle;
        }
        let rotation = this.head.rotation;
        if (Math.abs(angle - rotation) < 0.001) {
            this._needRotate = false;
            return;
        }

        if (rotation < 90 && angle > 270) {
            rotation += 360;
        } else if (angle < 90 && rotation > 270) {
            rotation -= 360;
        }
        
        let temp = Math.abs(rotation - angle);
        if (temp > 9)
            angle = rotation > angle ? rotation - 9 : rotation + 9;

        this.head.rotation = angle;
    },

        //获取当前毫秒数
    getCurMilliseconds () {
        let date = new Date();
        return date.getSeconds() * 1000 + date.getMilliseconds();
    },

    initData(width,skintype,toangle,lastangle,hx,hy,bodyLength){
        this.m_angle = lastangle;
        this.m_toAngle = toangle;
        this._width = width;
        this.m_iLastWidth = width;
        this.m_vx = 0;
        this.m_vy = 0;
        this.x = hx;
        this.y = hy;
        this.m_iLastUpdateTime = this.getCurMilliseconds();
        this._newBorn = true;

        this.m_iBodyLen_real = 0;
        this.m_fBodyLength_Svr = bodyLength;
        this.m_iMachineLevel = 4;
        this.m_BodyPosArr_SvrX[0] = hx;
        this.m_BodyPosArr_SvrY[0] = hy;
        this.m_BodyPosList_Show[0] = cc.v2(hx,hy);
        this._m_iStatus  = eSnakeStatus_Normal;
        this.m_needTail = true; // 有尾巴的蛇
        this._speedAnimFlag = false;
        let scale = this._width / this.originWidth;
        this.head.scale = scale;
        this.nameLabel.node.scale = scale;
        //this._worldPosition = cc.v2(hx, hy);
        //this._worldPosition = this.node.convertToWorldSpace(cc.v2(hx, hy));
    },

    directTo(angle){
        if (!cc.isValid(this.node)){
            return;
        }
        this.m_toAngle = Math.fmod(angle + Math.PI*2, Math.PI*2);
    },

    turnAround(from, to, turn){
        let deltaAngle  = to - from;
        if(Math.fabs(deltaAngle) <= turn || 2 * Math.PI - Math.fabs(deltaAngle) <= turn){
            return to;
        }
        let iSign = 1;
        if(deltaAngle < 0){
            iSign = -1;
        }
        if(Math.fabs(deltaAngle) > Math.PI){
            iSign*= -1;
        }
        from+=turn*iSign;
        from=Math.fmod(from+Math.PI*2,Math.PI*2);
        return from;
    },

    updateXY(curFrameSpeed){
        this.m_vx = curFrameSpeed * Math.cos(this.m_angle);
        this.m_vy = curFrameSpeed * Math.sin(this.m_angle);
        //cc.log("-----------------------------------------vx,vy,"+this.m_vx+","+this.m_vy);
        this.x += this.m_vx;
        this.y += this.m_vy;
        //cc.log("x,y,"+this.x+","+this.y);
        this.updateHeadXY();
    },

    updateHeadXY(){
        this.head.x = this.x;
        this.head.y = this.y;

        this.nameLabel.node.x = this.head.x;
        this.nameLabel.node.y = this.head.y - 40;
    },

    updateHead(curFrameSpeed,dTurnSpeed){
        //cc.log("---------------------------------------------------updateHead，蛇移动计算一次");
        //cc.log("----------------------------- this.head.rotation :" + this.head.rotation + " this.m_angle: " + this.m_angle + " this.m_toAngle: " + this.m_toAngle);
        this.m_angle = this.turnAround(this.m_angle, this.m_toAngle, dTurnSpeed);
        this.head.rotation = 90 - Math.ceil(180 / Math.PI * this.m_angle);
        //cc.log("----------------------------- this.m_angle :" + this.m_angle);
        this.updateXY(curFrameSpeed);
        //this._worldPosition = cc.v2(this.head.x, this.head.y);
        this._worldPosition = this.node.convertToWorldSpace(this.head.position);
        this.nameLabel.node.x = this.head.x;
        this.nameLabel.node.y = this.head.y - 40;
    },

    setSpeed(s){
        this.curSpeed = s;
    },

    LocalCalc(){
        //cc.log("--------------1head_x = " + this.head.x + " y = " + this.head.y);
        let curFrameTurnSpeed = Game.m_dTurnSpeed;
        //cc.log("curFrameTurnSpeed," + curFrameTurnSpeed);
        let now = this.getCurMilliseconds();
        let iTime = now - this.m_iLastUpdateTime;
        //cc.log("-------------------------------now:" + now + " m_iLastUpdateTime:" + this.m_iLastUpdateTime + " iTime:" +iTime);
        this.m_iLastUpdateTime = now;
        if(iTime > 33 ){ //保证30帧的时候，依然速度大概不变
            iTime = 33;
            //cc.log("------------------------------------------------ iTime > 33 ");
        }
        let dTimeSpeed = iTime / 20.0; //客户端1帧20毫秒
        let distantce;
        //cc.log("curSpeed,"+this.curSpeed)
        if(this.curSpeed > 1){
            distantce = this.curSpeed * Game.m_dAccelerateSpeed;
        }else{
            distantce = Game.m_dNormalSpeed;
        }

        let iCount = Math.ceil(dTimeSpeed); // 返回大于等于参数dTimeSpeed的最小整数
        //cc.log("------------------------dTimeSpeed,iCount,"+dTimeSpeed+","+iCount);
        for(let i=0; i<iCount; i++){
            let scale = Math.min(dTimeSpeed , 1);
            //cc.log("------------------------------------iCount" + iCount + "  Scale:" + scale + "   dTimeSpeed" + dTimeSpeed);
            dTimeSpeed -= 1;
            this.updateHead(distantce * scale ,curFrameTurnSpeed * scale);
            //整体平移
            this.Translation(scale * distantce / this.GetSquamaGap());
        }
    },

    //最重要的就是第一节身体的长度。如果第一节身体的长度不对，后面就全部不对。如果第一节长度对了，后面就全对了
    Translation(fStep){
        for (let i = this.m_iBodyLen; i >=1; i--) {
            let pt1 = this.m_BodyPosList_Show[i];
            let pt2 = this.m_BodyPosList_Show[i-1];
            // (pt2-pt1) * fStep + pt1;
            let x =  (pt2.x - pt1.x) * fStep + pt1.x;
            let y =  (pt2.y - pt1.y) * fStep + pt1.y;
            this.m_BodyPosList_Show[i] = cc.v2(x,y);
        }
        this.m_BodyPosList_Show[0] = cc.v2( this.x, this.y);
    },

    SplineSvr(){
        //check
        for (let i = 1; i < this.m_BodyPosArr_SvrX.length; i++) {
            if ( Math.abs(this.m_BodyPosArr_SvrX[i] - this.m_BodyPosArr_SvrX[i-1]) < 1e-6  &&  Math.abs(this.m_BodyPosArr_SvrY[i] - this.m_BodyPosArr_SvrY[i-1]) < 1e-6 ) {
                Utils.resize(this.m_BodyPosArr_SvrX,i);
            }
        }

        //1个点没办法平滑，也不需要
        if (this.m_BodyPosArr_SvrX.length <= 1) {
            Utils.resize(this.m_BodyPosArr_SvrX_Splined,this.m_BodyPosArr_SvrX.length);
            Utils.resize(this.m_BodyPosArr_SvrY_Splined,this.m_BodyPosArr_SvrY.length);

            if (this.m_BodyPosArr_SvrX.length == 1) {
                this.m_BodyPosArr_SvrX_Splined[0] = this.m_BodyPosArr_SvrX[0];
                this.m_BodyPosArr_SvrY_Splined[0] = this.m_BodyPosArr_SvrY[0];
            }
            return;
        }

        //先减少下长度，因为没有必要取太多的点。
        let iEvalCount = parseInt(this.m_fBodyLength_Svr / 4.0);
        if (iEvalCount < this.m_BodyPosArr_SvrX.length) {
            iEvalCount = this.m_BodyPosArr_SvrX.length;
            Utils.resize(this.m_BodyPosArr_SvrX,iEvalCount);
            Utils.resize(this.m_BodyPosArr_SvrY,iEvalCount);
        }

        let outputLen;
        let fGap = this.GetSquamaGap();
        //cc.log("------------- up this.m_BodyPosArr_SvrY_Splined" + JSON.stringify(this.m_BodyPosArr_SvrY_Splined));
        FitParametricDt(this.m_BodyPosArr_SvrX,this.m_BodyPosArr_SvrY,fGap,this.m_fBodyLength_Svr,outputLen,this.m_BodyPosArr_SvrX_Splined,this.m_BodyPosArr_SvrY_Splined);
        //cc.log("-------------this.m_BodyPosArr_SvrY:" + JSON.stringify(this.m_BodyPosArr_SvrY));
        //cc.log("-------------this.m_BodyPosArr_SvrY_Splined:" + JSON.stringify(this.m_BodyPosArr_SvrY_Splined));
        //cc.log("------------- this.m_BodyPosArr_SvrX " + JSON.stringify(this.m_BodyPosArr_SvrX) + "   this.m_BodyPosArr_SvrY" + JSON.stringify(this.m_BodyPosArr_SvrY));
        //cc.log("------------- this.m_BodyPosArr_SvrX_Splined " + JSON.stringify(this.m_BodyPosArr_SvrX_Splined) + "   this.m_BodyPosArr_SvrY_Splined" + JSON.stringify(this.m_BodyPosArr_SvrY_Splined));
    },

    GetSquamaGap(){
        switch (this.m_iMachineLevel)
        {
            case 1:
                return parseInt(this._width)/1.2;
            case 2:
                return parseInt(this._width)/1.6;
            case 3:
                return parseInt(this._width)/1.8;
            case 4:
                return parseInt(this._width)/2.5;
            default:
                return parseInt(this._width)/1.7;
        }
    },

    AddBodyPosSvr_Head(x,y){
        if (!cc.isValid(this.node)){
            return;
        }

        this.m_BodyPosArr_SvrX.unshift(x);
        this.m_BodyPosArr_SvrY.unshift(y);

        let iEvalCount = parseInt(this.m_fBodyLength_Svr / 8.0);      //取8.0是料敌从宽
        //cc.log("--------------------------------- iEvalCount:" + iEvalCount + " m_fBodyLength_Svr:" + this.m_fBodyLength_Svr);
        if(this.m_BodyPosArr_SvrX.length > iEvalCount){
            Utils.resize(this.m_BodyPosArr_SvrX,iEvalCount);
            Utils.resize(this.m_BodyPosArr_SvrY,iEvalCount);
        }
        this.m_bHasData = true;
    },

    RefreshBodyPoint(){
        this.m_angle = this.m_toAngle;
        this.x = this.m_BodyPosArr_SvrX_Splined[0];
        this.y = this.m_BodyPosArr_SvrY_Splined[0];
        let size = this.m_BodyPosArr_SvrX_Splined.length;
        for (let i = 0; i < size; i++) {
            this.m_BodyPosList_Show[i] = cc.v2(this.m_BodyPosArr_SvrX_Splined[i], this.m_BodyPosArr_SvrY_Splined[i]);
        }
        this.m_iBodyLen = this.m_BodyPosArr_SvrX_Splined.length - 1;
    },

    render(){
        //视野判断
        //let bInView = this.IsInView_Net();
        if (!cc.isValid(this.node)){
            return;
        }

        let bInView = true;
        if(bInView){
            if(this.m_bHasData){
                this.m_bHasData = false;
                this.SplineSvr();
            }

            if(this.m_bInView){
                //console.log("------------------------------------------ render this.m_BodyPosArr_SvrX_Splined.length:" + this.m_BodyPosArr_SvrX_Splined.length)
                let iSvrPoints = this.m_BodyPosArr_SvrX_Splined.length;
                this.UpdatePointCount(iSvrPoints - 1);  // 注：iSvrPoints的个数，包含了头的点。bodylen因为历史原因，只算了身体的点数。所以此处要减1
                this.LocalCalc();                       // 头部移动
                this.LinearInterpolation();             // 网络同步（很重要！！！）
                this.updateHeadXY();
            }else{
                this.m_bInView = bInView;
                this.RefreshBodyPoint();
                this.m_iLastUpdateTime = this.getCurMilliseconds(); // 如果没有这句话，下一帧LocalCalc的时间就会非常久。会有bug的 ???
                this.updateHeadXY();
            }
        }else{
            this.m_BodyPosList_Show[0] = cc.v2( this.m_BodyPosArr_SvrX[0],this.m_BodyPosArr_SvrY[0]);
            this.setSnakeVisible(false); // 视野外的影藏
            this.m_bInView = bInView;
            return;
        }
        this.UpdateDrawInfo();
    },

    // 设置蛇是否显示
    setSnakeVisible(flag){
        // 头
        let headImage = this.head.getChildByName("Image").getComponent(cc.Sprite);
        if(headImage.enabled == flag){
            return;
        }else{
            headImage.enabled = flag;
        }

        //名字
        this.nameLabel.enabled = flag;

        if (GAME_MODE == 1){ // 联网
            // 身体和尾巴
            if(this.m_BodyImgs.length == 0){
                let tail = this.tail.getComponent(cc.Sprite);
                tail.enabled = flag;
            }else{
                for (let i = 0; i < this.m_BodyImgs.length; i++) {
                    let body = this.m_BodyImgs[i];
                    let upAnimation = this.m_spUpAnimationNodes[i]; // 加速影子
                    let bodyImage = body.getComponent(cc.Sprite);
                    bodyImage.enabled = flag;
                    if(this._speedAnimFlag && flag && !Utils.isEmptyObject(upAnimation)){
                        upAnimation.active = true;
                    }else if(!Utils.isEmptyObject(upAnimation)){
                        upAnimation.active = false;
                    }
                }
            }
        }else{ // 单机
            // 身体节点
            let len = this._bodys.length;
            for (let i = 0; i < len; i++) {
                let body = this._bodys[i];
                let upAnimation = this._animNodes[i]; // 加速影子
                let bodyImage = body.getComponent(cc.Sprite);
                bodyImage.enabled = flag;
                if(this._speedAnimFlag && flag && !Utils.isEmptyObject(upAnimation)){
                    upAnimation.active = true;
                }else if(!Utils.isEmptyObject(upAnimation)){
                    upAnimation.active = false;
                }
            }
            // 尾巴
            let tailImage = this.tail.getComponent(cc.Sprite);
            tailImage.enabled = flag;
        }
    },


    addOneBody_Img(){
        let curCount = this.m_iBodyLen_real;
        let speedUpNode = cc.instantiate(Game._prefabs.speedup);
        let image = speedUpNode.getComponent(cc.Sprite);
        image.dstBlendFactor = cc.BlendFunc.BlendFactor.ONE;
        speedUpNode.parent = this.node;
        speedUpNode.zIndex = 1999 - curCount;
        this.m_spUpAnimationNodes.push(speedUpNode);

        let bodyImg = null;
        if ((this.m_needTail) && Utils.isEmptyObject(this.m_BodyImgs)){
            bodyImg = this.tail; // 尾巴
        }else{
            // 身体节点
            let bodyIndex = curCount;
            let frameIdx = bodyIndex % this.bodyFrames.length;
            let key = this._sid + "_" + frameIdx;
            let pool = Game._snakeBodyPool[key];
            if (pool.size() > 0) {
                bodyImg = pool.get();
                let image = bodyImg.getComponent(cc.Sprite);
                image.enabled = true; // 需要设置一下，可能之前死亡的蛇在屏幕外没有显示
            } else {
                bodyImg = cc.instantiate(Game._prefabs.body);
                let sp = bodyImg.getComponent(cc.Sprite);
                sp.spriteFrame = this.bodyFrames[frameIdx];
            }
            bodyImg.name = "body_" + frameIdx;
            bodyImg.zIndex = 999 - curCount;
            bodyImg.posIdx = 0;
        }
        bodyImg.parent = this.node;

        // 有尾巴的蛇，尾巴要始终保持在队尾
        if ((this.m_needTail) && (!Utils.isEmptyObject(this.m_BodyImgs))) {
            this.m_BodyImgs.splice(this.m_BodyImgs.length - 1, 0,bodyImg);
        } else {
            this.m_BodyImgs.push(bodyImg);
        }

        //setwidth m_fOrignW是蛇身图片宽，一般不会变
        let fScale = this._width / this.originWidth;
        bodyImg.scale = fScale;
        speedUpNode.scale = fScale;
        this.m_iBodyLen_real++;
    },


    UpdateDrawInfo(){
        let iNewBodyLen_real = this.m_iBodyLen;
        if (this.m_iBodyLen_real > iNewBodyLen_real){
            if (iNewBodyLen_real <= 0){
                return;
            }

            // 蛇加速时会缩短
            for (let i = iNewBodyLen_real; i < this.m_iBodyLen_real; i++) {
                let remove_index = i;
                if (this.m_needTail) {
                    remove_index = i - 1;
                }

                //this.m_BodyImgs[remove_index].removeFromParent();
                // 身体节点回收利用
                let body = this.m_BodyImgs[remove_index];
                let frameIdx = body.name.slice(5);
                let pool = Game._snakeBodyPool[this._sid + "_" + frameIdx];
                if (pool) {
                    body.lastPos = null;
                    body.position = cc.v2(0, 0);
                    body.scale = 1;
                    pool.put(body);
                }
                this.m_spUpAnimationNodes[remove_index].removeFromParent();
            }

            if (this.m_needTail) {
                this.m_BodyImgs[iNewBodyLen_real - 1] = this.m_BodyImgs[this.m_BodyImgs.length - 1];
                this.m_spUpAnimationNodes[iNewBodyLen_real - 1] = this.m_spUpAnimationNodes[this.m_spUpAnimationNodes.length - 1];
            }

            Utils.resize(this.m_BodyImgs,iNewBodyLen_real);
            Utils.resize(this.m_spUpAnimationNodes,iNewBodyLen_real);
            this.m_iBodyLen_real = iNewBodyLen_real;

        }else if(this.m_iBodyLen_real < iNewBodyLen_real){
            let iCount = iNewBodyLen_real - this.m_iBodyLen_real;
            for (let i = 0; i < iCount; i++) {
                this.addOneBody_Img();
            }
        }

        //集体重设位置和角度
        let bAccelerating = false;
        if(this.curSpeed > SPEED_MULT_NORMAL){
            bAccelerating = true;
        }

        let ptTemp = this.m_BodyPosList_Show[0];
        for (let i = 0; i < this.m_BodyImgs.length; i++) {
            let ptNow = this.m_BodyPosList_Show[i+1];
            if(Utils.isEmptyObject(ptNow)) continue;
            let rotate = 90 - Math.atan2(ptTemp.y - ptNow.y, ptTemp.x - ptNow.x) / Math.PI * 180;
            ptTemp = ptNow;
            this.m_BodyImgs[i].setPosition(ptNow);
            this.m_BodyImgs[i].setRotation(rotate);
            // 加速后闪亮节点的处理
            if (bAccelerating) {
                if(!this._speedAnimFlag){
                    this.m_spUpAnimationNodes[i].active = true;
                    //this.m_spUpAnimationNodes[i].getComponent(cc.Animation).play();
                }
                this.m_spUpAnimationNodes[i].setPosition(ptNow);
                this.m_spUpAnimationNodes[i].setRotation(rotate);
            }else{
                if(this._speedAnimFlag) {
                    //this.m_spUpAnimationNodes[i].getComponent(cc.Animation).stop();
                    this.m_spUpAnimationNodes[i].active = false;
                }
            }
        }

        if (this.m_iLastWidth != this._width) {
            this.SetBodyWidth(this._width);
            this.m_iLastWidth = this._width;
        }

        if(bAccelerating){
            this._speedAnimFlag = true;
        }else{
            this._speedAnimFlag = false;
        }

    },


    //起到的作用，就是原来的  rectifyLength
    UpdatePointCount(iPointsCount){
        if (iPointsCount > this.m_iBodyLen) {
            this.addBodies2(iPointsCount - this.m_iBodyLen);
        }
        else if (iPointsCount < this.m_iBodyLen) {
            //此处不应该立刻删除，而是有个最小值的判断
            let pt1 = this.m_BodyPosList_Show[this.m_iBodyLen - 1];
            let pt2 = this.m_BodyPosList_Show[this.m_iBodyLen];
            let ratio = Game.m_dNormalSpeed * 2.0;
            this.m_BodyPosList_Show[this.m_iBodyLen] = Utils.lerp(pt2, pt1, ratio);
            if (Utils.dist(pt1, this.m_BodyPosList_Show[this.m_iBodyLen]) < 0.01) {
                this.m_iBodyLen --;
            }
        }
    },

    //只处理位置，不处理节点
    addOneBody(_x,_y){
        if (this.m_iBodyLen >= SNAKE_MAX_LEN - 2) {
            console.log("---------------------------------ERROR 蛇长度超过了500");
            return;
        }
        let nowPos = cc.v2(_x, _y);
        this.m_BodyPosList_Show[this.m_iBodyLen + 1] = nowPos;
        this.m_iBodyLen++;
        //console.log("----------------------------------------- addOneBody this.m_iBodyLen:" + this.m_iBodyLen)
    },

    //往后面追加若干节点--变长
    addBodies2(length){
        for (let i = 0; i < length; i++) {
            let ptTemp = this.m_BodyPosList_Show[this.m_iBodyLen];
            this.addOneBody(ptTemp.x, ptTemp.y);
        }
    },

    LinearInterpolation()
    {
        let svrHeadPos = cc.v2(this.m_BodyPosArr_SvrX_Splined[0], this.m_BodyPosArr_SvrY_Splined[0]);
        let newHead = Utils.lerp_Perc(this.m_BodyPosList_Show[0], svrHeadPos, 0.016 * this.g_LinearInterpolation);
        //cc.log("--------------------------------- svrHeadPos.x:" + svrHeadPos.x + " svrHeadPos.y:" + svrHeadPos.y );
        //cc.log("--------------------------------- this.x:" + this.x + " this.y:" + this.y );
        //cc.log("--------------------------------- newHead.x:" + newHead.x + " newHead.y:" + newHead.y);
        //cc.log("---------------------------------------------------------");
        this.x = newHead.x;
        this.y = newHead.y;

        let iBodyLen = this.m_BodyPosArr_SvrX_Splined.length - 1;   //注：m_BodyPosArr_SvrX_Splined 的个数，包含了头的点。bodylen因为历史原因，只算了身体的点数。所以此处要减1
        for (let i = 0; i <= iBodyLen; i++) {
            let real = cc.v2(this.m_BodyPosArr_SvrX_Splined[i], this.m_BodyPosArr_SvrY_Splined[i]);
            let now = this.m_BodyPosList_Show[i];
            let result = Utils.lerp_Perc(now, real, 0.016 * this.g_LinearInterpolation);
            this.m_BodyPosList_Show[i] = result;
        }
    },

    accelerate () {
        if (!this._speedUp) {
            return;
        }

        let len = this._bodys.length;
        if (!this._speedAnimFlag) {
            this._speedAnimFlag = true;
            for (let i = 0; i < len; i++) {
                this._animNodes[i].active = true;
            }
        }

        //if (this._animFrameIdx < len) {
            //this._animNodes[this._animFrameIdx].getComponent(cc.Animation).play();
        //}

        this.updateScore2(-SPEED_FOOD_SCORE);
        this._speedFrameIdx += 1;
        this._animFrameIdx += 1;
        if (this._animFrameIdx > 26 * Math.ceil(len / 26))
            this._animFrameIdx = 0;
        if (this._speedFrameIdx % SPEED_FOOD_GAP != 0) return;

        if (GAME_MODE == 0) {
            Notification.dispatch("E_GAME_SPEEDFOOD", this.node.convertToWorldSpace(this.tail.position));
        }
    },

    // 生成死亡食物的时候需要
    score2DeadFoods () {
        let length = 5;
        let type = 1;
        let size = SCORE_TO_LEN.length;
        for (let i = 0; i < size; i++) {
            if (this.score_length >= SCORE_TO_LEN[i][2] && this.score_length < SCORE_TO_LEN[i][3]) {
                length = (this.score_length - SCORE_TO_LEN[i][2])/(SCORE_TO_LEN[i][3]-SCORE_TO_LEN[i][2])*(SCORE_TO_LEN[i][1]-SCORE_TO_LEN[i][0])+SCORE_TO_LEN[i][0];
                type = i + 1;
                break;
            }
        }
        length = Math.floor(Math.min(250, length));
        type = Math.min(6, type);
        let score = Math.floor(this.score_length * this._deadFoodRatio / length);
        return [score, length, type];
    },

    cancelInvicible () {
        this.node.opacity = 255;
        this._wudiTime = 0;
        if(this._guangquanSprite){
            this._guangquanSprite.destroy();
            this._guangquanSprite = null;
        }
    },

    onRotate (angle) {
        if (GAME_MODE == 0) {  // 单机版
            this._targetAngle = angle;
            this.changeDir();
        } else {
            this._netAngle = angle;
        }
    },

    // 按下
    onSpeedUp: function() {
        if (this._score <= 6) {
            this._speedUpFlag = false;
        }else{
            if(this._speedUpLock){
                if(this._speedUpFlag){
                    this._speedUpFlag = false;
                }else{
                    this._speedUpFlag = true;
                }
            }else{
                this._speedUpFlag = true;
            }
        }
    },

    // 松手
    onSpeedDown: function() {
        if(this._speedUpLock == false){
            this._speedUpFlag = false;
        }
    },

    onSpeedLock: function() {
        if(this._speedUpLock){
            this._speedUpLock = false;
        }else{
            this._speedUpLock = true;
        }
    },

    onDead (obj) {
        this.dead(obj.id, obj.isOut, obj.killer);
    },

    // 被杀的蛇的id
    onKill (id) {
        if(!Utils.isEmptyObject(Game._selfSnake)){
            Game._selfSnake._kill++;
        }
    },

    // 杀死别人的蛇的id
    onOtherKill(id){
        if(!Utils.isEmptyObject(Game._snakes[id])){
            Game._snakes[id]._kill++;
        }
    },

    killAction (score) {
        //@@@@得分动画
        cc.log("killAction_score = " + score);
    },

    setKillName () {
        //@@@@击杀改变名字颜色
        cc.log("setkillName");
    },

    setNormalName () {
        //@@@@还原名字颜色
        cc.log("setNormalName");
    },

    // 开麦还是关麦（1连麦失败、2开麦、3闭麦） //(zhengyi连麦处理)
    setMaiStatus(status){
        this._maiStatus = status
        Notification.dispatch("setmaiStatus", this)
    },

    // 说话还是没说话 //(zhengyi连麦处理)
    setMaiTaklingStatus(){
        if(this._maiTaklingStatus == false){
            Notification.dispatch("setmaiPlay", this)

            this._maiTaklingStatus = true
            this.maiTalkschedule = function () {
                this._maiTaklingStatus = false
            }
            this.scheduleOnce(this.maiTalkschedule,1.0);
        }
    },

});
