
// 小游戏平台测试服
window.HOSTNAME = "115.159.208.238:9503"; // 测试服
window.IP_TCP = "115.159.208.238"; // 测试服
window.PORT_TCP = 49480; // 测试服

// 线上独立版本贪吃蛇正式服
// window.HOSTNAME = "greedyeater31.soulgame.mobi"; //5.0.0正式服(4.0.8更新内容)
// window.IP_TCP = "greedyeater32.soulgame.mobi"; // 正式服
// window.PORT_TCP = 49478; // 正式服

// 小游戏平台正式服
// window.HOSTNAME = "greedyeater31.soulgame.mobi";
// window.IP_TCP = "casual_games-app.soulgame.mobi"; // 平台正式服
// window.PORT_TCP = 49480;  // 平台正式服


window.IP_UDP = IP_TCP;
window.PORT_UDP = PORT_TCP;
window.GAME_TYPE = 0;   //1联网 0房间
window.GAME_MODE = 0;   //1联网 0单机
window.TEAM_ID = 0;  // 房间号为0说明房间不存在
window.ID = "";
window.PHP_ID = "";
window.NICK_NAME = "Snake";
window.UID = 0;
window.ROOM_ID = 0;
window.SNAKE_ID = 1;
window.PSAppUtils = PSAppUtils.getInstance();
window.G_IMEI = 0;
window.G_OnSessionNtfData = null
window.G_VoiceGameExit = false   // 语音房退出游戏
window.GAME_ID = 0;
window.BACKSTAGE = false;      // false游戏中 true进入后台
window.FRIST_GAME = true      // 是否第一次进入游戏
window.HISTORY_SCORE_STAND_DATA = 0    // 单机最高分数
window.HISTORY_SCORE_DATA = 0          // 联网最该分数

window.sBattleMsg = {
    gameOver : 1001,  //游戏结束
    touchBegan : 1002,
    touchMoved : 1003,
    touchEnded : 1004,
    otherSnakeDead : 1005,
    didEatFood  :  1006, //确定吃食物
    updateUIScore : 1007,
    sendvoidtoken : 1008,
    sessionStart : 1009,
    getauthkey : 1010,
    getisfriend : 1011,
    gamerestart : 1012
};

window.sUserMsg = {
    changeName : 2001 //改昵称
};

window.EGoodsEventBegin = 3000;

// 从网络初始化信息完成
window.EInitDataFromNetFinish = 4000;

// 网络状态
window.NetworkStateEnum = {
    Good : 1,       // 极佳
    Medium : 2,     // 还行
    Poor : 3       // 极差
};

//鉴于时差导致的死亡检测的不准确性，以及作弊的可能，检测到死亡后，只立即改变自己的状态
window.eSnakeStatus_Normal = 1;
window.eSnakeStatus_Dead = -1;


window.FrameIdx = {
    ID : 0,
    SCORE : 1,
    SPEED : 2,
    X : 3,
    Y : 4,
    SKINTYPE : 5,
    PROTECT : 6,
    LENGTH : 7
};

window.shopItemData = [];
shopItemData[1] = {
    id:1,
    name:"小白",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[2] = {
    id:2,
    name:"小红",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[3] = {
    id:3,
    name:"小蓝",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[4] = {
    id:4,
    name:"小青",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[5] = {
    id:5,
    name:"小绿",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[6] = {
    id:6,
    name:"彩虹",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:4,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[7] = {
    id:7,
    name:"小蜜蜂",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:8,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[9] = {
    id:9,
    name:"呆萌黄",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:8,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[10] = {
    id:10,
    name:"满天星",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:3,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[11] = {
    id:11,
    name:"小粉",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[12] = {
    id:12,
    name:"黑白",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:5,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[13] = {
    id:13,
    name:"小黄眼",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:2,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[16] = {
    id:16,
    name:"经典黄",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[17] = {
    id:17,
    name:"大白",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:20,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[18] = {
    id:18,
    name:"小精灵",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:12,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[19] = {
    id:19,
    name:"小魔女",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:12,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[20] = {
    id:20,
    name:"蓝瘦香菇",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:20,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[21] = {
    id:21,
    name:"万圣南瓜",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:4,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[22] = {
    id:22,
    name:"小甜猫",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:12,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[23] = {
    id:23,
    name:"买买君",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:20,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[24] = {
    id:24,
    name:"叮咚狗",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:12,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[25] = {
    id:25,
    name:"冷漠君",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:12,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[26] = {
    id:26,
    name:"吃瓜宝宝",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:9,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[27] = {
    id:27,
    name:"66崽",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:27,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[28] = {
    id:28,
    name:"非酋",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:36,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[29] = {
    id:29,
    name:"欧皇",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:69,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[30] = {
    id:30,
    name:"老司机",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:19,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[31] = {
    id:31,
    name:"招财猫",
    open:0,       // 是否开启(1 开启  0关闭)
    type:5,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[32] = {
    id:32,
    name:"传奇大师",
    open:0,       // 是否开启(1 开启  0关闭)
    type:6,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[33] = {
    id:33,
    name:"雪人",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:9,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[34] = {
    id:34,
    name:"圣诞老人",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:19,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[35] = {
    id:35,
    name:"圣诞树",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:12,     // 消耗次数
    num:0,        // 已经看了的广告次数
}
shopItemData[36] = {
    id:36,
    name:"火车侠",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:19,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[37] = {
    id:37,
    name:"和谐号",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:12,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[38] = {
    id:38,
    name:"小萌鸡",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:39,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[39] = {
    id:39,
    name:"福娃",
    open:0,       // 是否开启(1 开启  0关闭)
    type:7,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[40] = {
    id:40,
    name:"财娃",
    open:0,       // 是否开启(1 开启  0关闭)
    type:7,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[41] = {
    id:41,
    name:"鸡仔君",
    open:0,       // 是否开启(1 开启  0关闭)
    type:8,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[42] = {
    id:42,
    name:"幸运锦鲤",
    open:0,       // 是否开启(1 开启  0关闭)
    type:7,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[43] = {
    id:43,
    name:"年兽",
    open:0,       // 是否开启(1 开启  0关闭)
    type:10,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[44] = {
    id:44,
    name:"爆笑红虫",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:29,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[45] = {
    id:45,
    name:"爆笑黄虫",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:24,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[46] = {
    id:46,
    name:"财神爷",
    open:0,       // 是否开启(1 开启  0关闭)
    type:10,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[47] = {
    id:47,
    name:"绿野精灵",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:59,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[48] = {
    id:48,
    name:"花仙子",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:59,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[49] = {
    id:49,
    name:"熊猫",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:9,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[50] = {
    id:50,
    name:"小黄鸭",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:9,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[51] = {
    id:51,
    name:"流氓兔",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:19,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[52] = {
    id:52,
    name:"泰格",
    open:1,       // 是否开启(1 开启  0关闭)
    type:4,       // 4 看广告
    usenum:39,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[53] = {
    id:53,
    name:"西瓜",
    open:0,       // 是否开启(1 开启  0关闭)
    type:11,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[54] = {
    id:54,
    name:"灵蛇",
    open:0,       // 是否开启(1 开启  0关闭)
    type:9,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}

shopItemData[55] = {
    id:55,
    name:"战神",
    open:0,       // 是否开启(1 开启  0关闭)
    type:9,       // 4 看广告
    usenum:0,     // 消耗次数
    num:0,        // 已经看了的广告次数
}









