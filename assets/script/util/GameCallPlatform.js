"use strict";

window.GameCallPlatform = {};

GameCallPlatform.COCOSJAVALIBAPI = "mobi/soulgame/littlegamecenter/cocos/api/DataApi";
GameCallPlatform.COCOSJAVALIBACTIVITY = "mobi/soulgame/littlegamecenter/cocos/activity/CocosAcvity";
GameCallPlatform.isDebugLog = true; //是否开启调试打印
/*
* android调试打印日志
* @param logStr
* */
GameCallPlatform.log = function (logStr) {
    if (!this.isDebugLog) return;
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBAPI, "LogEE", "(Ljava/lang/String;)V", logStr);
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

/*
* 获取游戏玩家信息（平台匹配成功，进入cocos场景，cocos主动去获取游戏数据）
* */
GameCallPlatform.GetGameData = function () {
    var data = null;
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        data = jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "GetGameData", "()Ljava/lang/String;");
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
    return data;
};

/*
* 关闭Loading界面（配成成功后，平台留一个加载界面在游戏上，cocos加载完游戏后主动请求关闭加载界面）
* */
GameCallPlatform.CloseLoadingDialog = function () {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "CloseLoadingDialog", "()V");
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

/*
* 游戏结算界面
* @param pkID(string)
* @param gameType(string)
* */
GameCallPlatform.sendDialogChatData = function (pkID, gameType) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "sendDialogChatData", "(Ljava/lang/String;Ljava/lang/String;)V", pkID, gameType);
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

/*
* 点击头像出来的个人信息
*@param userId (string)
* */
GameCallPlatform.sendDialogInfoData = function (userId) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "sendDialogInfoData", "(Ljava/lang/String;)V", userId);
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

/*
* 退出游戏弹出框
* */
GameCallPlatform.showGameExitDialog = function () {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "showGameExitDialog", "()V");
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};


//退出游戏弹出框回调
if (cc.sys.os === cc.sys.OS_ANDROID) {
    window.exitDialogCall = function () {
        GameCallPlatform.log("exisDialogCall");
        Notification.dispatch("exitDialogCall", null);
    };
}

/*
* 发送表情
*@param emoji (string)  表情标识 1开心 2 斜眼笑 3愤怒 4 哭泣
*@param userId (string) 对手id
* */
GameCallPlatform.sendEmojiData = function (emoji, userId) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "sendEmojiData", "(Ljava/lang/String;Ljava/lang/String;)V", emoji.toString(), userId.toString());
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

//收到对方表情的回调
if (cc.sys.os === cc.sys.OS_ANDROID) {
    window.emojiReceive = function (emoji) {
        GameCallPlatform.log("emojiReceive: " + emoji);
        Notification.dispatch("emojiReceive", emoji);
    };
}

// 连麦初始化 //(zhengyi连麦处理)
GameCallPlatform.startMultiLianMai = function (roomId) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "startMultiLianMai", "(Ljava/lang/String;)V", roomId.toString());
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

//控制其它玩家的音频流 //(zhengyi连麦处理)
GameCallPlatform.muteAllRemoteAudioStreams = function (status) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "muteAllRemoteAudioStreams", "(Z)V",status);
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

//控制自己的音频流（自己开关麦） //(zhengyi连麦处理)
GameCallPlatform.muteSelfAudioStreams = function (status) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "muteSelfAudioStreams", "(Z)V",status);
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

// 关闭音频流 //(zhengyi连麦处理)
GameCallPlatform.backToLastPage = function () {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        console.log("----------------------------------------- js backToLastPage")
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "backToLastPage", "()V");
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

// 连麦按钮状态  1连麦失败 2开麦 3闭麦 //(zhengyi连麦处理)
if (cc.sys.os === cc.sys.OS_ANDROID) {
    window.setOppositeMultiBtnStatus = function (userId,status) {
        console.log("---------------------------------------------------- Mai js setOppositeMultiBtnStatus userId:" + userId + " status:" + status)
        status = parseInt(status);
        Notification.dispatch("setmaiSelfStatus",status);
    };
}

// 音频按钮状态 1开启 2关闭 //(zhengyi连麦处理)
if (cc.sys.os === cc.sys.OS_ANDROID) {
    window.setAllRemoteAudioBtnStatus = function (status) {
        console.log("---------------------------------------------------- Mai js setAllRemoteAudioBtnStatus status:" + status)
        status = parseInt(status);
        Notification.dispatch("setmaiOtherStatus",status);
    };
}

// 设置活跃用户 //(zhengyi连麦处理)
if (cc.sys.os === cc.sys.OS_ANDROID) {
    window.setActiveUser = function (userId) {
        if(G_VoiceGameExit == false){
            //console.log("---------------------------------------------------- Mai js setActiveUser222 userId:" + userId)
            Notification.dispatch("maiTalkingPlayer",userId);
        }
    }
}


// 获取平台在线玩家数据
GameCallPlatform.getFriendsList = function (gameId) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "getOnlineUserList", "(Ljava/lang/String;)V",gameId.toString());
    } else if (cc.sys.os === cc.sys.OS_IOS) {
    }
}


if (cc.sys.os === cc.sys.OS_ANDROID) {
    window.setOnlineUserList = function (info) {
        console.log("-------------------------------------- java -> js setOnlineUserList info: " + JSON.stringify(info))
        Notification.dispatch("setFriendList",info)
    }
}

// 获取排位段位信息
GameCallPlatform.getStageInfo = function (uids,gameid) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        console.log("---------------------------------- js getStageInfo")
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "getStageInfo", "(Ljava/lang/String;Ljava/lang/String;)V", uids.toString(), gameid.toString())
    } else if (cc.sys.os === cc.sys.OS_IOS) {
    }else{
        var info = []
        info[0] = {}
        info[0].stage = 6
        info[0].cur_score = 4
        info[0].need_score = 20
        info[0].pk_score = 10
        info[0].uid = ID
        info[0].level = 3
        console.log("---------------------------------------- getStageInfo info:" + JSON.stringify(info))
        Notification.dispatch("setStagesInfo",info)
    }
}

if (cc.sys.os === cc.sys.OS_ANDROID) {
    window.setStageInfo = function (info) {
        console.log("-------------------------------------- java -> js setStageInfo info: " + JSON.stringify(info))
        Notification.dispatch("setStagesInfo",info)
    }
}

// 获取关注信息
GameCallPlatform.getFollowState = function (gameid,uids) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "getFollowState", "(Ljava/lang/String;Ljava/lang/String;)V",gameid.toString(),uids.toString());
    } else if (cc.sys.os === cc.sys.OS_IOS) {
    }
}

if (cc.sys.os === cc.sys.OS_ANDROID) {
    window.setFollowState = function (info) {
        console.log("-------------------------------------- java -> js setFollowState info: " + JSON.stringify(info))
        Notification.dispatch("setFollowState",info)
    }
}

// 根据场景名称-是否可以显示广告
GameCallPlatform.canShowAds = function (sceneName) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        let net = jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "canShowAds", "(Ljava/lang/String;)Z",sceneName);
        return net
    }else if(cc.sys.os === cc.sys.OS_WINDOWS) {
        return true
    }
}

// 调用看广告
GameCallPlatform.showAd = function (sceneName) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "showAdsWithScene", "(Ljava/lang/String;)V", sceneName)
    }else if(cc.sys.os === cc.sys.OS_WINDOWS) {
        Notification.dispatch("showAdCall")
    }
};

// 看广告回调
if (cc.sys.os === cc.sys.OS_ANDROID) {
    window.AdsCallback = function (info) {
        console.log("------------------------------------ js AdsCallback info: " + JSON.stringify(info))
        Notification.dispatch("showAdCall")
    };
}

// 邀请平台好友
GameCallPlatform.inviteGame = function (userId,userName,head,gameId,roomId) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "inviteGame", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", userId.toString(),userName,head,gameId.toString(),roomId.toString());
    }else if(cc.sys.os === cc.sys.OS_WINDOWS) {
    }
}


// 游戏分享-qq
GameCallPlatform.inviteGameQQ = function (userId,gameId,roomId) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "shareQqByCipher", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", userId.toString(),gameId.toString(),roomId.toString());
    }else if(cc.sys.os === cc.sys.OS_WINDOWS) {
    }
}


// 游戏分享-wx
GameCallPlatform.inviteGameWX = function (userId,gameId,roomId) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "shareWechatByCipher", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", userId.toString(),gameId.toString(),roomId.toString());
    }else if(cc.sys.os === cc.sys.OS_WINDOWS) {
    }
}


// 游戏分享
GameCallPlatform.shareAloneGame = function(gameId) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "shareAloneGame", "(Ljava/lang/String;)V",gameId.toString());
    }else if(cc.sys.os === cc.sys.OS_WINDOWS) {
    }
}


// 关注好友
GameCallPlatform.followPlayer = function (userId,state) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "setFollowState", "(Ljava/lang/String;Z)V", userId.toString(),state);
    }else if(cc.sys.os === cc.sys.OS_WINDOWS) {
    }
}

// 语音房按钮状态同步
GameCallPlatform.initGameSpeakerAndMicUi = function () {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "initGameSpeakerAndMicUi", "()V");
    }else if(cc.sys.os === cc.sys.OS_WINDOWS) {
    }
}

// 退出语音房
GameCallPlatform.sendleaveRoom = function () {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "sendleaveRoom", "()V");
    }else if(cc.sys.os === cc.sys.OS_WINDOWS) {
    }
}


//启动游戏看完广告回调
if(cc.sys.os === cc.sys.OS_ANDROID){
    window.finishAds = function () {
        console.log("-------------------------------------- window.finishAds")
        GameCallPlatform.CloseLoadingDialog(); // 关闭android 端loading层
    };
}


//上传数据
GameCallPlatform.setGameJsonData = function (game_id,gameJson) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        console.log("------------------------------------ Bestscore 上传数据")
        return jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "setGameJsonData", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V",game_id.toString(),gameJson.toString(),0);
    }else if (cc.sys.os === cc.sys.OS_IOS) {
    }
};


//上传数据成功回调
window.uploadDataSucc = function (msg) {
    console.log("-----------------------------------Bestscore uploadDataSucc");
    let type = msg["type"];
    let content = msg["content"];
    if (type == 1) {
        if (!content) return;
        if (content.length <= 0) return; 
    }
};


//上传数据失败回调
window.uploadDataFail = function (msg) {
    console.log("-------------------------------------Bestscore uploadDataFail--code-" + JSON.stringify(msg));
};


//获取单机数据
GameCallPlatform.getSingleGameData = function (game_id) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "getSingleGameData", "(Ljava/lang/String;)V", game_id.toString());
    }else if (cc.sys.os === cc.sys.OS_IOS){
    }
};

/**
 * 获取单机数据回调
 * msg----{"state": true, "gameJson" : "...."}  state:状态 成功或失败 true or false
 */
window.setSingleGame = function (msg) {
    console.log("-------------------------------------Bestscore setSingleGame 获取数据回调 msg:" + JSON.stringify(msg));
    let state = msg["state"];
    if(state) {
        var gameJson = JSON.parse(msg["gameJson"]);
        var customData = gameJson["customData"]
        console.log("--------------------------------------Bestscore setSingleGame 获取数据回调　customData:" + JSON.stringify(customData));
        Notification.dispatch("setBestGameData",customData);
    }else{
        console.log("--------------------------------------Bestscore setSingleGame 获取游戏数据失败")
    }
};

// 支付
/**
 * @param gameId 游戏id
 * @param gamePropId 游戏道具ID（测试编号：1，2，3，4均可）
 * @param amount 商品价格(RMB)
 * @param payType 支付方式：wechat=微信,alipay=支付宝
 */
GameCallPlatform.thirdPay = function (gameId,gamePropId,amount,payType) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "thirdPay", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", gameId.toString(),gamePropId.toString(),amount.toString(),payType.toString());
    }else if (cc.sys.os === cc.sys.OS_IOS){
    }else{
        Notification.dispatch("payResultCall",true);
    }
}

if (cc.sys.os === cc.sys.OS_ANDROID) {
    // 支付回调
    window.payResult = function(flag) {
        Notification.dispatch("payResultCall",flag);
    };
}

/**
 * 普通游戏弹窗
 * @param id: 弹框标识
 * @param title: 标题
 * @param content: 内容
 * @param yes: 确定文本
 * @param no: 取消文本
 */
GameCallPlatform.showGameCommonDialog = function (id, title, content, yes, no) {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "showGameCommonDialog", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", id.toString(), title.toString(), content.toString(), yes.toString(), no.toString());
    } else if (cc.sys.os === cc.sys.OS_IOS) {}
};

if (cc.sys.os === cc.sys.OS_ANDROID) {
    // 普通弹出框回调
    window.commonDialogCall = function (id, yes) {
        GameCallPlatform.log("commonDialogCall_" + id + " _" + yes);
        Notification.dispatch("commonDialog", [id, yes]);
    };
}

/*
* 获取网速
* */
GameCallPlatform.GetNetSpeed = function () {
    if (cc.sys.os === cc.sys.OS_ANDROID) {
        return jsb.reflection.callStaticMethod(this.COCOSJAVALIBACTIVITY, "GetNetSpeed", "()I");
    } else if (cc.sys.os === cc.sys.OS_IOS) {} else {
        return 0;
    }
};