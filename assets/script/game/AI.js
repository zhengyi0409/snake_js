const AI_LEVEL_SCORE = [300, 600, 1000, 1500, 2000, 3000, 5000];

let Game;
let GameMap;
let FoodMgr;
let RADIUS_LOOKUP_FOOD;
let RADIUS_MAP;
const MAP_WIDTH = 9600/2;
const MAP_HEIGHT = 9600/2;
const MAP_CENTER_X = MAP_WIDTH / 2;
const MAP_CENTER_Y = MAP_HEIGHT / 2;

Math.fmod = function (a,b) { return Number((a - (Math.floor(a / b) * b)).toPrecision(8)); };

cc.Class({
    extends: cc.Component,
    
    ctor  () {
        this._radius = 200;
        RADIUS_LOOKUP_FOOD = this._radius * this._radius;
    },

    properties: {
        radius: {
            get: function() {
                return this._radius;
            },
            set: function(r) {
                this._radius = r;
                let collider = this.getComponent(cc.Collider);
                collider.size.height = r;
                collider.offset.y = -r * 0.5;
            },
            displayName: "检测半径"
        },
        avoidRatio: {
            default: 0.9,
            displayName: "躲避概率"
        },
        level: {
            default: 2,
            displayName: "AI等级"
        },

        eatfoodAi:false,
        _dt: 0,
        _selfSnake: null,
        _selfHead: null,
        _avoid: false,
        _catchDt:0,
        _catchTime:0,
        curFrameId:0,
        curFrameId_cur:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.curFrameId_cur = 0;
        this._selfHead = this.node.parent;
        this._selfSnake = this._selfHead.parent.getComponent("Snake");
    },

    start () {
        Game = cc.director.getScene().getChildByName("Game").getComponent("Game");
        this._catchDt = 0;
        if (Game) {
            FoodMgr = Game.foodMgr;
            GameMap = Game.map;
            RADIUS_MAP = (GameMap.radius - this._radius - 100) * (GameMap.radius - this._radius - 100);
        }
        if(this.eatfoodAi == false){
            this.CheckColliderAI();
        }
    },

    update (dt) {
        this.curFrameId ++;
        this.CheckCollider4AI(this.curFrameId);
        this.avoidEdge();
        if(this.eatfoodAi){
            this.lookUpFood();
            this._catchDt += dt;
            if (this._catchDt < this._catchTime) return;
            this._catchDt = 0;
        }
    },

    lookUpFood () {
        if (this._catchDt != 0) return;
        if (this._selfSnake._score > AI_LEVEL_SCORE[this.level]) return;
        
        let pos = this._selfSnake.getWorldPosition();
        let foods = FoodMgr._deadFoods;
        for (let i = 0; i < foods.length; i++) {
            let food = foods[i];
            if (cc.pDistanceSQ(food.position, pos) < RADIUS_LOOKUP_FOOD) {
                this._catchDt = 0;
                this._catchTime = Math.floor(Math.random()) + 1;
                this._selfSnake._needRotate = true;
                this._selfSnake._targetAngle = 90 - Math.atan2(food.y - pos.y, food.x - pos.x) * (180/Math.PI);
                return;
            }
        }

        foods = FoodMgr._areas;
        for (let i = 0; i < foods.length; i++) {
            let area = foods[i];
            for (let j = 0; j < area.length;j++) {
                let food = area[j];
                if (cc.pDistanceSQ(food.position, pos) < RADIUS_LOOKUP_FOOD) {
                    this._catchDt = 0;
                    this._catchTime = Math.ceil(Math.random() * 10) + 2;
                    this._selfSnake._needRotate = true;
                    this._selfSnake._targetAngle = 90 - Math.atan2(food.y - pos.y, food.x - pos.x) * (180/Math.PI);
                    return;
                }
            }
        }
    },

    avoidEdge () {
        let pos = this._selfSnake.getWorldPosition();
        if (!pos) return;

        let mapPos = GameMap.node.position;
        if (cc.pDistanceSQ(pos, mapPos) > RADIUS_MAP) {
            this._selfSnake._needRotate = true;
            this._selfSnake._targetAngle = Math.random() * 90 + 45 - Math.atan2(mapPos.y - pos.y, mapPos.x - pos.x) * (180/Math.PI);
        }
    },

    checkLR (snake, selfPos) {
        if (!selfPos)
            return 1;
        
        let dst = 100000000;
        let bodys = snake._bodys;
        let minDstPos;
        for (let i = 0; i < bodys.length; i++) {
            let body = bodys[i];
            let pos = body.parent.convertToWorldSpace(body.position);
            if (cc.pDistanceSQ(pos, selfPos) < dst)
                minDstPos = pos;
        }
        if (!minDstPos) {
            return 1;
        }
        return cc.pCross(minDstPos, selfPos) <= 0 ? 1 : -1;
    },

    // AI
    CheckCollider4AI(curFrameId){
        if(curFrameId - this.curFrameId_cur >= 8){
            this.curFrameId_cur = curFrameId;
        }else{
            return;
        }

        let iPreCalcFrames = 16;
        let turnSpeed_Stand = 0.22;
        let CheckDistanse = 120 * 120;
        let s = this._selfSnake;
        let angle = Math.round(90 - this._selfSnake.head.rotation);
        let x0 = s.head.x;
        let y0 = s.head.y;
        let m_vx = Game._cosTable[angle] * this._selfSnake._speed
        let m_vy = Game._sinTable[angle] * this._selfSnake._speed
        let x1 = s.head.x + iPreCalcFrames * m_vx;
        let y1 = s.head.y + iPreCalcFrames * m_vy;

        for (let i = 0; i < Game.m_arrSnake.length; i++){
            let si = Game.m_arrSnake[i];
            if(Utils.isEmptyObject(si)){
                continue;
            }
            if (si._m_iStatus == eSnakeStatus_Dead){
                continue;
            }
            if (si._gid == s._gid) {
                continue;
            }

            CheckDistanse = (s._width + si._width) / 2.0 + 100;
            CheckDistanse = CheckDistanse * CheckDistanse;
            let nGap = 1;
            for (let k = 0; k < si._bodys.length; k = k + nGap){
                let body = si._bodys[k];
                if(Utils.isEmptyObject(body)){
                    continue;
                }

                //考虑到性能，节点检测数量减半
                if(k%2 == 0){
                    continue;
                }

                let pt = cc.v2(body.x, body.y)
                let distM = this.PointToSegDist_Square(pt.x, pt.y, x0, y0, x1, y1);
                if (distM < CheckDistanse) {
                    this._selfSnake._needRotate = true;
                    //this._selfSnake._targetAngle = this.directTo2(this._selfHead.rotation + s.m_fLastAvoidDirection * turnSpeed_Stand * (3+Math.random()%3));
                    this.onCollisionCall(si);
                    return;
                }

            }
        }
    },

    directTo2(angle){
        let m_toAngle = Math.fmod(angle + Math.PI*2, Math.PI*2);
        return m_toAngle;
    },

    CalcDistSquare(x1, y1, x2, y2){
        return (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
    },

    PointToSegDist_Square(x, y, x1, y1, x2, y2){
        let cross = (x2 - x1) * (x - x1) + (y2 - y1) * (y - y1);
        if (cross <= 0) return ((x - x1) * (x - x1) + (y - y1) * (y - y1));
        let d2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
        if (cross >= d2) return ((x - x2) * (x - x2) + (y - y2) * (y - y2));
        let r = cross / d2;
        let px = x1 + (x2 - x1) * r;
        let py = y1 + (y2 - y1) * r;
        return ((x - px) * (x - px) + (py - y1) * (py - y1));
    },

    onCollisionCall (other) {
        if(Utils.isEmptyObject(other))return;
        this._avoid = Math.random() < this.avoidRatio;
        let dir = this.checkLR(other, this._selfSnake.head.position);
        if (this._avoid && this._selfSnake) {
             this._selfSnake._targetAngle = this._selfHead.rotation + dir * (90 + Math.random() * 180);
             if(this._selfSnake._targetAngle > 720 ){
                 this._selfSnake._targetAngle -= 720;
             }
             if(this._selfSnake._targetAngle < -720){
                 this._selfSnake._targetAngle += 720;
             }
            this.avoidRatio -= 0.01;
            this._selfSnake._needRotate = true;
        }
    },


    // 物理碰撞回调
    onCollisionEnter (other, self) {
        if (other.tag == self.tag) return;
        if (other.node.name != "ColliderNode") return;
        this._avoid = Math.random() < this.avoidRatio;
        let dir = this.checkLR(other.node.parent.getComponent("Snake"), this._selfSnake.getWorldPosition());
        if (this._avoid && this._selfSnake) {
            this.avoidRatio -= 0.01;
            this._selfSnake._needRotate = true;
            this._selfSnake._targetAngle = this._selfHead.rotation + dir * (90 + Math.random() * 180);
        }
    },

    // 简单AI,定时随机修改方向
    CheckColliderAI(){
        this.changeState = function () {
            //cc.log("---------------------------------- CheckColliderAI");
            this._selfSnake._needRotate = true;
            this._selfSnake._targetAngle += Math.floor(1 + Math.random() * 360);// [1,360]
        }
        this.schedule(this.changeState,2);
    },
});
