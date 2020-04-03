let Common = {
    TouchType : cc.Enum({
        DEFAULT: 0,
        FOLLOW: 1,
    }),

    DirectionType : cc.Enum({
        FOUR: 4,
        EIGHT: 8,
        ALL: 0,
    }),
};

const PI_PRAMA = Math.PI / 180;
const PI_PRAMA1 = 180 / Math.PI;

window._speedLockTag = false;             // 锁定加速标记

cc.Class({
    extends: cc.Component,

    properties: {
        speedBtn: {
            default: null,
            type: cc.Node,
            displayName: "加速按钮"
        },

        speedLockBtn: {
            default: null,
            type: cc.Node,
            displayName: "加速锁定按钮"
        },

        dot: {
            default: null,
            type: cc.Node,
            displayName: "摇杆节点",
        },
        ring: {
            default: null,
            type: cc.Node,
            displayName: "摇杆背景节点",
        },
        stickX: {
            default: 0,
            displayName: "摇杆X位置",
        },
        stickY: {
            default: 0,
            displayName: "摇杆Y位置",
        },
        touchType: {
            default: Common.TouchType.DEFAULT,
            type: Common.TouchType,
            displayName: "触摸类型",
        },
        directionType: {
            default: Common.DirectionType.ALL,
            type: Common.DirectionType,
            displayName: "方向类型",

        },
        touchSpeed: {
            default: 0,
            displayName: "点击最大间隔时间",
        },

        _target: {
            default: null,
            type: cc.Node,
            displayName: "操控的目标",

        },

        speedTime: {
            default: 0,
            displayName: "加速时间",
        },
        _angle: 90,                     // 当前触摸的角度
        _radian: null,                  // 弧度
        _speed: 0,                      // 实际速度
        _firstTime: null,
        _lastTime:null,


        _ceshinum:0,

    },

    onLoad () {
        this._angle = 90;
        let self = this;
        // 初始化操纵类型
        if(LocalManager.getString("operation") === "left"){
            GameConfig.getInstance().touchDirection = 0;
        }else if(LocalManager.getString("operation") === "right"){
            GameConfig.getInstance().touchDirection = 1;
        }

        self.speedBtn.on(cc.Node.EventType.TOUCH_START, self.onSpeed, self);
        self.speedBtn.on(cc.Node.EventType.TOUCH_END, self.offSpeed, self);
        self.speedBtn.on(cc.Node.EventType.TOUCH_CANCEL, self.offSpeed, self);

        this.initTouchEvent();
        Notification.on("E_GAME_SNAKEDIE", this.onTargetDestroy, this);
    },

    start () {
        this.ring.active = true;
        this.dot.active = true;
        this.speedBtn.active = true;
        this.speedLockBtn.active = true;


        this.scheduleOnce(function() {
            var frameSizess = cc.view.getFrameSize();

            let x = this.ring.position.x
            let y = this.ring.position.y

            let x1 = this.speedBtn.position.x
            let y1 = this.speedBtn.position.y


            if (GameConfig.getInstance().touchDirection === 0) {
                console.log("----------------------------------------- 左边操作")


            }else if (GameConfig.getInstance().touchDirection === 1) {
                console.log("----------------------------------------- 右边操作")
                this.ring.setPosition(x1, y1);
                this.dot.setPosition(x1, y1);

                this.speedBtn.x = x
                this.speedLockBtn.x = x
            }
        }, 1.0);
    },

    onDestroy () {
        Notification.removeListenersByObj(this);
    },


    initTouchEvent () {
        let self = this;
        self.node.on(cc.Node.EventType.TOUCH_START, self.touchStartEvent, self);
        self.node.on(cc.Node.EventType.TOUCH_MOVE, self.touchMoveEvent, self);
        // 触摸在圆圈内离开或在圆圈外离开后，摇杆归位，player速度为0
        self.node.on(cc.Node.EventType.TOUCH_END, self.touchEndEvent,self);
        self.node.on(cc.Node.EventType.TOUCH_CANCEL, self.touchEndEvent,self);
    },

    //更新移动目标
    update (dt) {
        if (!this._target) return;

        switch (this.directionType) {
            case Common.DirectionType.ALL:   
                this.allDirectionsMove();
                break;
            default :
                break;
        }


        //this._ceshinum ++
        //this.ring.position = cc.v2(this._ceshinum,0);
    },
    
     //全方向移动
    allDirectionsMove () {
        if (!cc.isValid(this.node)){
            return;
        }

        let angle = 90 - this._angle;
        Notification.dispatch("E_GAME_ROTATESNAKE", angle < 0 ? angle + 360 : angle);
    },

     //计算两点间的距离并返回
    getDistance (pos1, pos2) {
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
    },

    /*角度/弧度转换
    角度 = 弧度 * 180 / Math.PI
    弧度 = 角度 * Math.PI / 180*/
    //计算弧度并返回
    getRadian (point) {
        this._radian = PI_PRAMA * this.getAngle(point);
        return this._radian;
    },

    //计算角度并返回
    getAngle (point) {
        
        let pos = this.ring.getPosition();
        this._angle = Math.atan2(point.y - pos.y, point.x - pos.x) * PI_PRAMA1;
        return this._angle;
    },

     //设置实际速度
    setSpeed (point) {
        //触摸点和遥控杆中心的距离
        let distance = this.getDistance(point, this.ring.getPosition());

        //如果半径
        if (distance < this._radius) {
            this._speed = this.speed1;
        } else {
            this._speed = this.speed2;
        }
    },

    endSpeed: function () {
        Notification.dispatch("E_GAME_SPEEDDOWN");
    },

    touchStartEvent (event) {
        // 获取触摸位置的世界坐标转换成圆圈的相对坐标（以圆圈的锚点为基准）
        let touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
        this.ring.active = true;
        this.dot.active = true;

        //触摸点与圆圈中心的距离
        let distance = this.getDistance(touchPos,cc.p(0,0));
        //圆圈半径
        let radius = this.ring.width / 2;
        let posX = this.ring.getPosition().x + touchPos.x;
        let posY = this.ring.getPosition().y + touchPos.y;
        //手指在圆圈内触摸,控杆跟随触摸点
        if (radius > distance) {
            this.dot.setPosition(cc.p(posX, posY));
        } else {
            //控杆永远保持在圈内，并在圈内跟随触摸更新角度
            let x = this.ring.x + Math.cos(this.getRadian(cc.p(posX,posY))) * radius;
            let y = this.ring.y + Math.sin(this.getRadian(cc.p(posX,posY))) * radius;
            this.dot.setPosition(cc.p(x, y));
        }


        return true;
    },

    touchMoveEvent (event) {
        // 以圆圈为锚点获取触摸坐标
        let touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
        let distance = this.getDistance(touchPos,cc.p(0,0));
        let radius = this.ring.width / 2;

        // 由于摇杆的postion是以父节点为锚点，所以定位要加上touch start时的位置
        let posX = this.ring.x + touchPos.x;
        let posY = this.ring.y + touchPos.y;
        if(radius > distance) {
            this.dot.setPosition(cc.p(posX, posY));
        } else {
            //控杆永远保持在圈内，并在圈内跟随触摸更新角度
            let x = this.ring.x + Math.cos(this.getRadian(cc.p(posX,posY))) * radius;
            let y = this.ring.y + Math.sin(this.getRadian(cc.p(posX,posY))) * radius;
            this.dot.setPosition(cc.p(x, y));
        }
        //更新角度
        this.getAngle(cc.p(posX,posY));
    },


    touchEndEvent () {
        this.dot.setPosition(this.ring.getPosition());
    },

    onTargetDestroy (snake) {
        if (!snake._isSelf) return;
        this._angle = 90;
    },

    onSpeed () {
        Notification.dispatch("E_GAME_SPEEDUP");
    },

    offSpeed () {
        Notification.dispatch("E_GAME_SPEEDDOWN");
    },

    // 加速锁定
    onSpeedLockCall(){
        Notification.dispatch("E_GAME_SPEEDLOCK");
        if(window._speedLockTag){
            window._speedLockTag = false;
        }else{
            window._speedLockTag = true;
        }
    },
});