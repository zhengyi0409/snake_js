cc.Class({
    extends: cc.Component,

    properties: {
        atlas: {
            default: null,
            type: cc.SpriteAtlas,
            displayName: "小地图图集"
        },

        _dots: null,    //蛇点集合
        _radius: 0,     //半径
        _mapRadius: 0,  //真实地图半径
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._dots = {};
        this._radius = this.node.width;
        
        Notification.on("E_GAME_SNAKEBORN", this.onBorn, this);
        Notification.on("E_GAME_SNAKEDIE", this.onDie, this);
        Notification.on("E_GAME_ONSNAKEDIE", this.onDie, this);

    },

    start () {
        this._mapRadius = cc.director.getScene().getChildByName("Game").getComponent("Game").map.radius;
    },

    // update (dt) {},

    onDestroy () {
        Notification.removeListenersByObj(this);
    },

    //更新点的位置
    updateDotPosition (id, pos) {
        let dot = this._dots[id];
        if (!dot || !pos) return;
        dot.x = pos.x / this._mapRadius * 0.5 * this._radius
        dot.y = pos.y / this._mapRadius * 0.5 * this._radius
    },

    //更新点的图标显示
    updateDotState (id, isSelf, isNo1, isKiller) {
        let dot = this._dots[id];
        if (!dot || isSelf) return;

        let sp = dot.getComponent(cc.Sprite);
        if (isKiller) {
            sp.spriteFrame = this.atlas.getSpriteFrame("skull");
        } else if (isNo1) {
            sp.spriteFrame = this.atlas.getSpriteFrame("rank_1");
        } else {
            sp.spriteFrame = this.atlas.getSpriteFrame("dot1");
        }
    },


    onBorn (snake) {
        let node = new cc.Node();
        let sp = node.addComponent(cc.Sprite);
        sp.spriteFrame = this.atlas.getSpriteFrame(snake._isSelf ? "self" : "dot1");
        node.parent = this.node;
        this._dots[snake._gid] = node;
        this.updateDotPosition(snake._gid, snake.getWorldPosition());
    },

    onDie (snake) {
        let dot = this._dots[snake._gid];
        if (!dot) return;
        dot.destroy();
        this._dots[snake._gid] = null;
    },
});
