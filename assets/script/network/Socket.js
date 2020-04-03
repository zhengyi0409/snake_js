/**
 * 网络类
 */
'use strict';

window.slither_pb = require("../proto/slither_pb");
window.syncfood_pb = require("../proto/syncfood_pb");
window.synctrace_pb = require("../proto/synctrace_pb");
window.common_pb = require("../proto/common_pb");
window.games_pb = require("../proto/games_pb");

window.Socket = {
    isConnect: true,

    init: function () {
        PSAppUtils.setSocketResponseCb(this.socketResponse);
        PSAppUtils.setUdpSocketResponseCb(this.udpsocketResponse);
    },

    request: function (cmd, subcmd, srcuid, desuid, data, ip, port) {
        ip = ip || IP_TCP;
        port = port || PORT_TCP;
        let _buff = (data && JSON.stringify(data)) || "";
        let _len = 0;
        if (_buff) {
            _len = Utils.getStrLength(_buff);
        }
        PSAppUtils.socketRequest(cmd, subcmd, srcuid, desuid, _buff, _len, ip, port);
    },

    requestPB: function (cmd,srcuid,desuid,data, ip, port) {
        ip = ip || IP_TCP;
        port = port || PORT_TCP;
        PSAppUtils.socketRequestPB2(cmd, 0, srcuid, 0, data, ip || "", port || 0);
    },

    // 团战
    requestPBforVS: function (cmd, data, len) {
        PSAppUtils.socketRequest(cmd, 1, ID, 0, data, len)
    },

    udpRequest: function (cmd, subcmd, srcuid, desuid, data, port) {
        let _buff = (data && JSON.stringify(data)) || null;
        let _len = 0;
        if (_buff) {
            _len = _buff.length;　
        }
        //cc.log("udpRequest_cmd[" + cmd + "]subcmd[" + subcmd + "]srcuid[" + srcuid
          //  + "]desuid[" + desuid + "]port[" + port + "]data[" + _buff + "]");
        PSAppUtils.udpSocketRequest(cmd, subcmd, srcuid, desuid, _buff, _len, IP_UDP, port || PORT_UDP);
    },

    udpRequestPB: function (cmd, srcuid,data) {
        //cc.log("udpRequestPB_cmd[" + cmd + "]data[" + data + "]");
        PSAppUtils.udpSocketRequestPB(cmd, 0, srcuid, 0, data);
    },

    connect: function (t, id, lv, ip, port) {
        ip = ip || IP_TCP;
        port = port || PORT_TCP;
        this.request(0, 0, id, 0, {type: t, id: id, lv: lv}, ip, port);
    },

    close: function () {
        this.request(0x084B, 0, ID, 0, null,IP_TCP,PORT_TCP);
    },

    udpReset: function (){
        PSAppUtils.udpReset();
    },

    socketResponse: function (cmd, subCmd, srcUid, data) {
        // console.log("socketResponse");
        //console.log("---------------------------------- socketResponse cmd:" + cmd);
        // console.log(subCmd);
        // console.log(srcUid);
        // console.log(data);

        if (cmd == 0x1000) {//4096用户登录
            // cc.log("socketResponse——0x1000");
            let message = slither_pb.SC_Snake.deserializeBinary(data);
            //console.log("socketResponse_cmd[" + cmd + "] subCmd[" + subCmd + "] srcUid[" + srcUid + "] data[" + message + "]");
            Notification.dispatch(message.getCmdid() + "msg", message);
            return;
        }
        if (cmd == 0x0856) {//2133同步轨迹
            // cc.log("socketResponse——0x0856");
            let message = synctrace_pb.SyncTrace.deserializeBinary(data);
            //console.log("socketResponse_cmd[" + cmd + "] subCmd[" + subCmd + "] srcUid[" + srcUid + "] data[" + message + "]");
            Notification.dispatch(cmd + "", message);
            return;
        }
        if (cmd == 0x0857) { // 2134
            // cc.log("socketResponse——0x0857");
            let message = syncfood_pb.SyncFood.deserializeBinary(data);
            //console.log("socketResponse_cmd[" + cmd + "] subCmd[" + subCmd + "] srcUid[" + srcUid + "] data[" + message + "]");
            Notification.dispatch(cmd + "", message);
            return;
        }

        let datastr = Utils.utf8ByteToUnicodeStr(data);
        Notification.dispatch(cmd + "", JSON.parse(datastr));
    },

    udpsocketResponse: function (cmd, subCmd, srcUid, data) {
        // console.log("udpsocketResponse");
        // console.log(cmd);
        // console.log(subCmd);
        // console.log(srcUid);
        // console.log(JSON.stringify(data));
        if (cmd == 0x1000) {//4096
            //cc.log("udpsocketResponse——0x1000");
            let message = slither_pb.SC_Snake.deserializeBinary(data);
            //console.log("udpsocketResponse_cmd[" + cmd + "] subCmd[" + subCmd + "] srcUid[" + srcUid + "] data[" + message + "]");
            if(message.getCmdid() == 5){
                return // 移动食物，暂时屏蔽
            }
            Notification.dispatch(message.getCmdid() + "msg", message);
            return;
        }
        if (cmd == 0x0856) {//2133
            //cc.log("udpsocketResponse——0x0856");
            let message = synctrace_pb.SyncTrace.deserializeBinary(data);
            //console.log("udpsocketResponse_cmd[" + cmd + "] subgetCmdid()Cmd[" + subCmd + "] srcUid[" + srcUid + "] data[" + message + "]");
            Notification.dispatch(cmd + "", message);
            return;
        }
        if (cmd == 0x0857) {
            //cc.log("udpsocketResponse——0x0857");
            let message = syncfood_pb.SyncFood.deserializeBinary(data);
            //console.log("udpsocketResponse_cmd[" + cmd + "] subCmd[" + subCmd + "] srcUid[" + srcUid + "] data[" +　message + "]");
            Notification.dispatch(cmd + "", message);
            return;
        }

        let list = [];
        data.forEach(element => {
            list.push(String.fromCharCode(element));
        });

        let str = list.join("");
        Notification.dispatch(cmd + "", JSON.parse(str));
    }
}

window.socketStateChange = function (state) {
    state = parseInt(state);
    console.log("-------------------------------- socketStateChange  state = " + state);
    if (state === 1) {
        if(Socket.isConnect == false){
            console.log("-------------------------------- socketStateChange = " + state + " 网络重新链上");
            Notification.dispatch("netConnect");
        }
        Socket.isConnect = true;
    } else if (state === 0) {
        console.log("-------------------------------- socketStateChange = " + state + " 网络断开");
        Socket.isConnect = false;
        Notification.dispatch("netBreak");
    }
}
