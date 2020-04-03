let SnakeLayer;

cc.Class({
    extends: cc.Component,

    properties: {
        _dtIdx: 0,
    },

    onCollisionEnter (other, self) {

        //碰撞回调
        if (other.tag == self.tag) {
            let selfSnake = self.node.parent.parent.getComponent("Snake");
            if(selfSnake._isSelf){
                cc.log("----------------------------------- other.tag == self.tag");
            }
            return;
        }
        //cc.log("collision_oter = " + other.tag + "  self = " + self.tag);
        let name = other.node.name;
        //cc.log("Collision_other_name = " + name + " self_name = " + self.node.name);
        if (name == "Tail") {
            if (self.tag == 0 || other.tag == 0) {
                //cc.log("collision_Tail");
            }
            //cc.log("Tail_dead_id = " + self.tag + " killer: " + other.tag);
            Notification.dispatch("E_GAME_SNAKEDEAD", {id : self.tag, isOut : false, killer : other.tag},selfSnake);
            let otherSnake = other.node.parent.getComponent("Snake");
        } else if (name == "ColliderNode") {　// name == "Head"
            let selfSnake = self.node.parent.parent.getComponent("Snake");
            let otherSnake = other.node.parent.getComponent("Snake");
            if(selfSnake._isSelf) {
                cc.log("-----------------------------------------onCollisionEnter self is dead!!!");
            }

            let dst = 25 * (selfSnake.node.scale + otherSnake.node.scale);
            if (self.tag == 0 || other.tag == 0) {
                //cc.log("collision_Head = " + dst);
            }
            //cc.log("distance = " + cc.pDistanceSQ(selfSnake.getWorldPosition(), otherSnake.getWorldPosition())
                //+ " dst = " + dst + "  dst^2 = " + dst * dst);
            if (cc.pDistanceSQ(selfSnake.getWorldPosition(), otherSnake.getWorldPosition()) < dst * dst) {
                if (self.tag == 0 || other.tag == 0) {
                    //cc.log("collision_d1");
                }
                if (selfSnake._score <= otherSnake._score) {
                    //cc.log("Head_dead_id = " + self.tag + " killer: " + other.tag);
                    Notification.dispatch("E_GAME_SNAKEDEAD", {id : self.tag, isOut : false, killer : other.tag},selfSnake);
                    if (self.tag == 0 || other.tag == 0) {
                        //cc.log("collision_d2");
                    }
                }
            } else {
                //cc.log("Head_dead_id2 = " + self.tag + " killer: " + other.tag);
                Notification.dispatch("E_GAME_SNAKEDEAD", {id : self.tag, isOut : false, killer : other.tag},selfSnake); // 撞的蛇
                Notification.dispatch("E_GAME_SNAKEDEAD", {id : self.tag, isOut : false, killer : other.tag},otherSnake);// 被撞的蛇
                if (self.tag == 0 || other.tag == 0) {
                    //cc.log("collision_d3");
                }
            }
        }
    },
});
