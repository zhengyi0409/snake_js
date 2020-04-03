
cc.Class({
    extends: cc.Component,

    properties: {

        _randnum:0,
        _actiontag:true,
    },



    onLoad () {

    },

    start () {

    },


    update (dt) {

    },

    runActionCall(){

        // let action1 = cc.scaleTo(0.8,1.2);
        // let action2 = cc.scaleTo(0.8,1.0);
        // let seq = cc.RepeatForever.create(cc.sequence(action1,action2));
        // this.node.runAction(seq);

        var self = this;
        let node = new cc.Node("light");
        let sp = node.addComponent(cc.Sprite);

        cc.loader.loadRes("game/foodlight", cc.SpriteAtlas, function (err, atlas) {
            let frame = null;
            if( self.node._foodcolor == 1){
                if(self.node._foodtype == 4){
                    frame = atlas.getSpriteFrame('food1_mid');
                }else if(self.node._foodtype == 5){
                    frame = atlas.getSpriteFrame('food1_max');
                }
            }else if(self.node._foodcolor == 2){
                if(self.node._foodtype == 4){
                    frame = atlas.getSpriteFrame('food2_mid');
                }else if(self.node._foodtype == 5){
                    frame = atlas.getSpriteFrame('food2_max');
                }
            }else if(self.node._foodcolor == 3){
                if(self.node._foodtype == 4){
                    frame = atlas.getSpriteFrame('food3_mid');
                }else if(self.node._foodtype == 5){
                    frame = atlas.getSpriteFrame('food3_max');
                }
            }else if(self.node._foodcolor == 4){
                if(self.node._foodtype == 4){
                    frame = atlas.getSpriteFrame('food4_mid');
                }else if(self.node._foodtype == 5){
                    frame = atlas.getSpriteFrame('food4_max');
                }
            }else if(self.node._foodcolor == 5){
                if(self.node._foodtype == 4){
                    frame = atlas.getSpriteFrame('food5_mid');
                }else if(self.node._foodtype == 5){
                    frame = atlas.getSpriteFrame('food5_max');
                }
            }else if(self.node._foodcolor == 6){
                if(self.node._foodtype == 4){
                    frame = atlas.getSpriteFrame('food6_mid');
                }else if(self.node._foodtype == 5){
                    frame = atlas.getSpriteFrame('food6_max');
                }
            }
            sp.spriteFrame = frame;
        });
        node.parent = this.node;

        let action1 = cc.fadeOut(1.0);     //渐隐效果
        let action2 = cc.fadeIn(1.0);      //渐显效果
        let seq = cc.RepeatForever.create(cc.sequence(action1,action2));
        node.runAction(seq);

    },

});
