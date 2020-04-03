let GameMap;
let SnakeLayer;

const FOOD_TYPE_NUM = 36;

cc.Class({
    extends: cc.Component,

    properties: {
        atlas: {
            default: null,
            type: cc.SpriteAtlas,
            displayName: "食物图集"
        },
        areaFoodNum: {
            default: 15,
            displayName: "区域食物数"
        },
        areaRadius: {
            default: 600,
            displayName: "区域边长"
        },
        maxAreaNum: {
            default: 6,
            displayName: "区域行数与列数"
        },
        scores: {
            default: [],
            type: cc.Integer,
            tooltip: "食物类型分数表"
        },

        // 光圈
        gqprefad:{
            default: null,
            type: cc.Prefab,
        },

        _ratios: {                          //食物出现概率 单机版
            default: function () {
                return [0.45, 0.7, 0.85, 0.95, 1];
            }
        },
        // _target: null,
        // _targetGrid: null,
        _areas: [],                         //局域集合
        _aresNodes: [],                     //局域节点集合
        _dt: 0,                             //计时器
        _foodPool: [],                      //食物对象池
        _needFillAreas: [],                 //需要填充食物的局域集合 单机版
        _speedFoods: [],                    //加速食物的集合 单机版
        _deadFoods: [],                     //死亡食物的集合 单机版
        _dtIdx: -1,                         //计时器2
        _dtIdxfood: -1,                         //计时器3
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {

        this.scheduleOnce(function() {
            //创建不同类型的食物对象池
            for (let i = 0; i < FOOD_TYPE_NUM; i++) {
                if (!this._foodPool[i])
                    this._foodPool[i] = new cc.NodePool("Food");
                for (let k = 0; k < this.areaFoodNum + 5; k++) {
                    let node = new cc.Node("Food_" + i);
                    let sp = node.addComponent(cc.Sprite);
                    let foodcolor = (Math.floor(i / 6) + 1);
                    let foodtype = (i % 6 + 1);
                    node._foodcolor = foodcolor;
                    node._foodtype = foodtype;
                    sp.spriteFrame = this.atlas.getSpriteFrame("food" + foodcolor + foodtype);
                    // if(foodtype == 4 || foodtype == 5){
                    //     node.addComponent("FoodAi"); // 添加FoodAi脚本组件
                    // }
                    //sp.dstBlendFactor = cc.BlendFunc.BlendFactor.ONE;
                    this._foodPool[i].put(node);
                }
            }
        }, 0.1);

        Notification.on("E_GAME_SPEEDFOOD", this.onNewSpeedFood, this);
        Notification.on("E_GAME_DEADFOOD", this.onNewDeadFood, this);
    },

    start () {
        let Game = cc.director.getScene().getChildByName("Game").getComponent("Game");
        GameMap = Game.map;
        SnakeLayer = Game.snakeLayer;
        if (GAME_MODE == 0) {
            this.initFoods();
        } else {
            this.maxAreaNum = 8;
        }
    },

    update (dt) {
        this._dtIdx += 1;
        let children = SnakeLayer.children;
        //检测所有局域的食物与蛇的碰撞
        if (this._dtIdx % 4 == 0) {
            for (let i = 0; i < this._areas.length; i++) {
                let area = this._areas[i];
                if (!area) continue;
                for (let j = 0; j < area.length;) {
                    let food = area[j];
                    let eated = false;
                    for (let k = 0; k < children.length; k++) {
                        let element = children[k];
                        let snake = element.getComponent("Snake");
                        if (snake._isDead)
                            continue;

                        let headPos = snake.getWorldPosition();
                        if ((Math.abs(headPos.x - food.x) + Math.abs(headPos.y - food.y)) / 1.41 < snake._width + 16) {     //碰撞处理
                            area.splice(j, 1);
                            snake._gridIdx = i;
                            snake.eatFood(food);
                            // 给food加一个光圈
                            this.moveFood(food, headPos);
                            eated = true;
                            break;
                        }
                    }
                    if (!eated)
                        j++;
                }
            }
        }

        //检测死亡和加速食物和蛇的碰撞
        if (this._dtIdx % 9 == 0) {
            this._dtIdx = 0;
            this.checkFoods(this._speedFoods, children);
            this.checkFoods(this._deadFoods, children);
        }

        if (GAME_MODE == 1) return;

        this._dt += dt;
        if (this._dt < 10) return;

        this._dt = 0;
        //填充食物
        this.fillFoods();
    },

    onDestroy () {
        Notification.removeListenersByObj(this);
    },

    //初始化食物
    initFoods () {
        console.log("----------------------------------------------- 初始化食物");
        let row = this.maxAreaNum;      // 区域行数与列数 6
        let radius = this.areaRadius;   // 区域边长 600
        let fNum = this.areaFoodNum;    // 区域食物数 15
        let originX = GameMap.radius - Math.floor(radius * row * 0.5);
        
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < row; j++) {
                let idx = row * i + j;
                if (!this._areas[idx]) {
                    this._aresNodes[idx] = new cc.Node("Area");
                    this._aresNodes[idx].parent = this.node;
                    this._areas[idx] = [];
                }
                
                if ((i == 0 || i == row - 1) && (j == 0 || j == row - 1))
                    continue;

                let beginX = originX + j * radius;
                let beginY = originX + i * radius;
                for (let k = 0; k < fNum; k++) {
                    let score = this.randScore();
                    let food = this.newFood(score[0]);
                    food.parent = this._aresNodes[idx];
                    food.setLocalZOrder(900);
                    if(food._foodtype == 4){
                        food.setLocalZOrder(999);
                    }else if(food._foodtype == 5){
                        food.setLocalZOrder(1000);
                    }
                    food._score = score[1];
                    food.areaIdx = idx;
                    food.idx = k;
                    food.setPosition(Math.random() * radius + beginX, Math.random() * radius + beginY);
                    this._areas[idx].push(food);
                }
            }
        }
    },

    //加载食物 网络json数据
    initFoodsByNet (data) {
        //console.log("----------------------------------------------- 加载食物 网络json数据");
        let radius = this.areaRadius;  // 区域边长 600
        let num = this.maxAreaNum;     // 区域行数与列数 8
        let row, col, idx;

        let copypos = [];
        for (let i = 0; i < data.length; i++) {
            let fd = data[i];
            col = Math.floor(fd[0] / radius);
            row = Math.floor(fd[1] / radius);
            idx = num * row + col;
            if (!this._areas[idx]) {
                this._aresNodes[idx] = new cc.Node("Area");
                this._aresNodes[idx].parent = this.node;
                this._areas[idx] = [];
            }

            // 重要，否则食物会重复生成
            let samefood = this.sameFood(idx,fd[0],fd[1]);
            if(samefood){
                break;
            }

            let food = this.newFood(fd[2]);
            food.active = true;
            food.parent = this._aresNodes[idx];
            food.setLocalZOrder(900);
            food.opacity = 255;
            food._score = this.scores[fd[2] > this.scores.length ? 6 : fd[2] - 1];
            food.areaIdx = idx;
            food.id = fd[3];
            food.type = fd[2];
            food.setPosition(fd[0],fd[1]);
            this._areas[idx].push(food);
        }

    },

    //加载食物 网络pb数据
    initFoodsByPB (msg) {
        //console.log("----------------------------------------------- 加载食物 网络pb数据");
        let radius = this.areaRadius;
        let num = this.maxAreaNum;
        let row, col, idx;
        for (let i = 0; i < msg.length; i++) {
            let fd = msg[i].getInfoList();

            col = Math.floor(fd[0] / radius);
            row = Math.floor(fd[1] / radius);
            idx = num * row + col;
            if (!this._areas[idx]) {
                this._aresNodes[idx] = new cc.Node("Area");
                this._aresNodes[idx].parent = this.node;
                this._areas[idx] = [];
            }

            // 重要，否则食物会重复生成
            let samefood = this.sameFood(idx,fd[0],fd[1]);
            if(samefood){
                break;
            }
            let food = this.newFood(fd[2]);
            food.parent = this._aresNodes[idx];
            food.setLocalZOrder(900);
            if(food._foodtype == 4){
                food.setLocalZOrder(999);
            }else if(food._foodtype == 5){
                food.setLocalZOrder(1000);
            }
            food._score = this.scores[fd[2] > this.scores.length ? 6 : fd[2] - 1];
            food.areaIdx = idx;
            food.id = fd[3];
            food.type = fd[2];
            food.setPosition(fd[0], fd[1]);
            this._areas[idx].push(food);
        }
    },


    // 判断是否有相同坐标的食物了
    sameFood(idx,x,y){
        let data = this._areas[idx];
        for (let i = 0; i < data.length; i++) {
            let food = data[i];
            if(food.x == x && food.y == y){
                return true;
            }
        }
        return false;
    },

    //填充食物
    fillFoods () {
        //console.log("---------------------------------------- 填充食物");
        let row = this.maxAreaNum;
        let radius = this.areaRadius;
        let fNum = this.areaFoodNum;
        let originX = GameMap.radius - Math.floor(row * radius * 0.5);
        let _areas = this._needFillAreas.unique();  //数组去重
        for (let i = 0; i < _areas.length; i++) {
            let areaIdx = _areas[i];
            let num = this._areas[areaIdx].length;
            if (num == fNum)
                continue;

            let beginX = originX + (areaIdx % row) * radius;
            let beginY = originX + Math.floor(areaIdx / row) * radius;
            for (let j = num; j < fNum; j++) {
                let score = this.randScore()
                let food = this.newFood(score[0]);
                food.parent = this._aresNodes[areaIdx];
                food.setLocalZOrder(900);
                if(food._foodtype == 4){
                    food.setLocalZOrder(999);
                }else if(food._foodtype == 5){
                    food.setLocalZOrder(1000);
                }
                food._score = score[1];
                food.areaIdx = areaIdx;
                food.idx = j;
                food.setPosition(Math.random() * radius + beginX, Math.random() * radius + beginY);
                this._areas[areaIdx].push(food);
            }
        }

        this._needFillAreas = [];
    },

    //随机分数 单机版
    randScore () {
        let rand = Math.random();
        for (let i = 0; i < this._ratios.length; i++) {
            let ratio = this._ratios[i];
            if (rand <= ratio)
                return [i + 1, this.scores[i]];
        }
    },

    //根据类型创建食物
    newFood (type) {
        let color = Math.floor(Math.random() * 6 + 1);
        if(color > 6){
            color = 6;
        }
        if(type > 6){
            type = 6;
        }
        let node;
        let idx = (color - 1) * 6 + type - 1;
        if (this._foodPool[idx] && this._foodPool[idx].size() > 0) {
            node = this._foodPool[idx].get();
            //if(type == 4 || type == 5){
                //let sp = node.getComponent("FoodAi");
                //sp.runActionCall();
            //}
        } else {
            node = new cc.Node("Food_" + idx);
            let sp = node.addComponent(cc.Sprite);
            sp.spriteFrame = this.atlas.getSpriteFrame("food" + color + type);
            // if(type == 4 || type == 5){
            //     let sp = node.addComponent("FoodAi"); // 添加FoodAi脚本组件
            //     sp.runActionCall();
            // }
            node._foodcolor = color;
            node._foodtype = type;
            //sp.dstBlendFactor = cc.BlendFunc.BlendFactor.ONE;
        }

        return node;
    },

    //食物移除
    removeFood (node) {
        if(node._foodtype == 4 || node._foodtype == 5){
            node.stopAllActions();
        }
        let areaIdx = node.areaIdx;
        let area = this._areas[areaIdx];
        if (areaIdx) {
            this._needFillAreas.push(areaIdx);
        }
        let name = node.name;
        let idx = name.slice(5);
        //cc.log("idx = " + idx);
        node.scale = 1;
        if(this._foodPool[parseInt(idx)]){
            this._foodPool[parseInt(idx)].put(node);  // 通过 put 接口放入对象池
        }
    },

    //食物飘向蛇头
    moveFood (node, targetPos) {
        //console.log("------------------------------------------ 食物飘向蛇头 food color:" + node._foodcolor + " food type:" + node._foodtype);
        // 屏蔽光圈特效
        // if(node._foodtype != 6){
        //     let gqnode = cc.instantiate(this.gqprefad);
        //     gqnode.parent = this.node;
        //     gqnode.position = node.position;
        //     let action = cc.scaleTo(0.1, 0);
        //     //let delayTimeAction = cc.delayTime(0.1);
        //     let seq = cc.sequence(action,cc.callFunc(function() {
        //         gqnode.destroy();
        //     }, this));
        //     gqnode.runAction(seq);
        // }
        node.runAction(cc.sequence(cc.spawn(cc.moveTo(0.3, targetPos), cc.scaleTo(0.3, 0)), cc.callFunc(function() {
            this.removeFood(node);
        }, this)));
    },

    //检测碰撞
    checkFoods (foods, snakes) {
        for (let i = 0; i < foods.length;) {
            let food = foods[i];
            let eated = false;
            for (let j = 0; j < snakes.length; j++) {
                let element = snakes[j];
                let snake = element.getComponent("Snake");
                if (snake._isDead)
                    continue;

                let headPos = snake.getWorldPosition();
                if ((Math.abs(headPos.x - food.x) + Math.abs(headPos.y - food.y)) / 1.41 < snake._width + 16) {
                    foods.splice(i, 1);
                    snake._gridIdx = i;
                    snake.eatFood(food);
                    this.moveFood(food, headPos);
                    eated = true;
                    break;
                }
            }
            if (!eated)
                i++;
        }
    },



    //生成加速食物(单机版)
    onNewSpeedFood (pos) {
        //console.log("---------------------------------单机版生成加速食物");
        let food = this.newFood(1);
        food.position = pos;
        food.parent = this.node;
        food._score = 5;
        this._speedFoods.push(food);
    },

    //生成死亡食物(单机版)
    onNewDeadFood (snake) {
        let idx = 0;
        let obj = snake.score2DeadFoods();
        while (idx < obj[1]) {
            if(!Utils.isEmptyObject(snake._bodys[idx])){
                //if(idx%2 == 0){
                    let food = food = this.newFood(6);
                    food.parent = this.node;
                    food._score = obj[0];
                    food.position = snake.node.convertToWorldSpace(snake._bodys[idx].position);
                    this._deadFoods.push(food);
                //}
            }
            idx++;
        }
    }
});
