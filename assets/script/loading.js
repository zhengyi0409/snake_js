// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(cc.sys.os === cc.sys.OS_WINDOWS) {
            // 横屏处理
            var ResolutionPolicy = cc.ResolutionPolicy;
            var frameSize = cc.view.getFrameSize();
            console.log("----------------------------------  游戏屏幕 frameSize width = " + frameSize.width + ",height = " + frameSize.height);
            if (frameSize.width < frameSize.height) {
                console.log("----------------------------------  游戏屏幕横屏处理");
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                cc.view.setFrameSize(frameSize.height * 1.5, frameSize.width * 1.5);
                //cc.view.setFrameSize(1170,540);
                cc.view.setFrameSize(910,512); // 1136,640
                cc.view.setDesignResolutionSize(1136, 640, ResolutionPolicy.FIXED_HEIGHT);
            }else{
                cc.view.setFrameSize(1170,540);   //1080   1920
                //cc.view.setFrameSize(910,512);
                //cc.view.setFrameSize(852,480);
                //cc.view.setFrameSize(1920,1080);
            }
        }
    },

    start () {
        this.scheduleOnce(function() {
            if(cc.sys.os === cc.sys.OS_ANDROID){
                cc.director.loadScene("Battle");
            }else{
                cc.director.loadScene("Login");
            }
        }, 1.0)
    },

    // update (dt) {},
});
