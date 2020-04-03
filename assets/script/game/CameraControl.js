const MAP_MIN_ZOOM = 0.58;
const VIEW_WIDTH_CONSTANS = 1300;
const VIEW_HEIGHT_CONSTANS = 800;

let Game;

cc.Class({
    extends: cc.Component,

    properties: {
        _target: null, // 目标
        _camera: null, // camera组件
        _battleScale:1,
        _headX:0,
        _headY:0,
        _snakesocre:0,
        _oldzoom:1,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._oldzoom = 1;
        this._camera = this.getComponent(cc.Camera);
        Game = cc.director.getScene().getChildByName("Game").getComponent("Game");
        Notification.on("cammerZoom", this.setRoom, this);
    },

    // start () {},

    //根据目标蛇位置改变摄像头位置，并根据蛇的分数进行场景缩放
    update (dt) {
        if (!this._target) return;
        this.node.setPosition(this._target.getWorldPosition());

        let score = this._target._score;
        let zoom;
        if (score <=100) {
            zoom = 0.95;
        } else if (score <= 500) {
            zoom =  Utils.fixedFloat(1.0239 - 0.000239 * score - 0.05);
        } else {
            zoom = Utils.fixedFloat(Math.pow(0.993, Math.pow(score/3, 0.52)) - 0.05);
        }
        zoom = Math.max(zoom, MAP_MIN_ZOOM);

        //zoom = 0.5; // 变焦比
        if(this._camera && this._camera.zoomRatio){
            this._camera.zoomRatio = zoom
        }else{
            this._camera = this.getComponent(cc.Camera);
            this._camera.zoomRatio = zoom
        }
    },

    // 设置相机聚焦
    setRoom(){
        if(this._camera && this._camera.zoomRatio){
            this._camera.zoomRatio = 1
        }
    },


    GetMapBound(){
        if(!Utils.isEmptyObject(Game._selfSnake)){
            this._headX = Game._selfSnake.head.x;
            this._headY = Game._selfSnake.head.y;
            this._snakesocre = Game._selfSnake._score;
        }

        let selfBattleScale = 0;
        let score = this._snakesocre;
        if (score <=100) {
            selfBattleScale = 0.95;
        } else if (score <= 500) {
            selfBattleScale =  Utils.fixedFloat(1.0239 - 0.000239 * score - 0.05);
        } else {
            selfBattleScale = Utils.fixedFloat(Math.pow(0.993, Math.pow(score/3, 0.52)) - 0.05);
        }
        selfBattleScale = Math.max(selfBattleScale, MAP_MIN_ZOOM);

        var mw = 1300 / selfBattleScale;
        var mh = 800 / selfBattleScale;
        //包围盒算大一点点，就不用考虑边缘了
        var rect = new cc.Rect(this._headX - mw / 2, this._headY - mh / 2, mw, mh);

        return rect;
    }

    // onCollisionEnter (other, self) {
    //     let name = other.node.name;
    //     if (name == "Tail" || name == "Head") {
    //         other.node.parent.opacity = 255;
    //     }
    // },

    // onCollisionExit (other, self) {
    //     let name = other.node.name;
    //     if (name == "Head") {
    //         if (!other.node.parent.getComponent("Snake")._isDead)
    //             other.node.parent.opacity = 0;
    //     }
    // },
});
