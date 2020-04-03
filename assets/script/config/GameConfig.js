window.GameConfig = cc.Class({
    extends: cc.Component,

    ctor: function () {
        this.touchDirection = 0;//摇杆位置0左边， 1右边
        this.myName = "Snake";
    }
});

GameConfig.instance = null;

GameConfig.getInstance = function () {
    if (GameConfig.instance == null) {
        GameConfig.instance = new GameConfig();
    }
    return GameConfig.instance;
};
