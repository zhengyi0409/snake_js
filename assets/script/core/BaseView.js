const ViewMgr = require('ViewMgr');

var BaseView = cc.Class({
    extends: cc.Component,

    properties: {
        layerType: {
            default: 0,
            displayName: 'UI层级',
            tooltip: 'main : 0, pop : 1'
        }
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    onDestroy: function() {
        ViewMgr.pop(this);
    },
});
