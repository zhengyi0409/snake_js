cc.Class({
    extends: cc.Component,

    properties: {
        mapFrame: {
            default: null,
            type: cc.SpriteFrame,
            displayName: "地图单元"
        },
        row: 14,        //瓷块行数
        col: 12,        //瓷块列数
        angle: -20,     //瓷块角度
        radius: 2400,   //地图半径

        _edge: null, // 边缘
        _selfSnake: null, // 目标蛇
    },

    // use this for initialization
    onLoad () {
        //初始化地图瓷块
        this.scheduleOnce(function(){
            let node = new cc.Node("map_unit");
            let sp = node.addComponent(cc.Sprite);
            sp.spriteFrame = this.mapFrame;

            let hr = this.row / 2;
            let hc = this.col / 2;
            let rect = this.mapFrame.getRect();
            for (let i = -hc-1; i <= hc; i++) {
                for (let j = -hr-1; j <= hr; j++) {
                    let clone = cc.instantiate(node);
                    clone.parent = this.node;
                    clone.setPosition((rect.width-29) * (i-1) + rect.width, (rect.height-17) * (j-1) + rect.height);
                }
            }

            this.node.setRotation(this.angle);
            this._edge = cc.find("Edge", this.node.parent);
        }, 1.0)
    },

    // called every frame
    update (dt) {
        this.updateEdge();
    },

    //更新地图边缘图片的位置
    updateEdge () {
        if (!this._selfSnake) return;

        let snakePos = this._selfSnake.getWorldPosition();
        let disX = snakePos.x - this.node.x;
        let disY = snakePos.y - this.node.y;
        if (snakePos.x > this.radius - 1000 & snakePos.x < this.radius + 1000 & snakePos.y > this.radius - 1000 & snakePos.y < this.radius + 1000) return;
        
        let angle = Math.atan2(disY, disX);
        if(this._edge){
            let edgeDis = this.node.y + this._edge.height - this.radius * 0.11;
            let x = this.node.x + edgeDis * Math.cos(angle);
            let y = this.node.y + edgeDis * Math.sin(angle);
            this._edge.setRotation(90 - angle*(180/Math.PI));
            this._edge.setPosition(x, y);
        }

    },

});
