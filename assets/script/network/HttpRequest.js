
window.HttpRequest = cc.Class({

    ctor: function () {
        this.packet = [];

        for (var i = 0; i < 5000; i++) {
            this.packet[i] = {
                status: 0,
                data: null
            };
        }

        this.imagePacket = {};
    },

    getHttpPacket: function (myTag) {
        return this.packet[parseInt(myTag)];
    },

    sendHttpGet: function (myTag, requrl) {
        var myTimeout = 5000;
        var index = parseInt(myTag);

        cc.log("sendHttpGet[" + index + "] [" + requrl + "]");
        var myPacket = this.packet[index];
        myPacket.status = 0;

        var xhr = cc.loader.getXMLHttpRequest();
        xhr.open("GET", requrl, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
        xhr.timeout = myTimeout;
        xhr.send();

        xhr.onreadystatechange = function () {
            // cc.log("readyState = " + xhr.readyState);

            if (xhr.readyState === 4) {
                cc.log("xhr_readyState[" + xhr.readyState + "] xhr.status[" + xhr.status + "]");

                if (xhr.status >= 200 && xhr.status < 300) {
                    var respone = xhr.responseText;
                    cc.log("[" + myTag + "][" + respone + "]");
                    if (!respone) {
                        cc.log("请检查网络!");
                        myPacket.status = 2;
                    }
                    else {
                        myPacket.status = 3;
                        myPacket.data = respone;
                    }
                }
                else {
                    myPacket.status = 1;
                }
            }
        };
    },

    sendHttpPost: function (myTag, requrl, myString) {
        var myTimeout = 5000;
        var index = parseInt(myTag);

        cc.log("sendHttpGet[" + index + "] [" + requrl + "]");
        var myPacket = this.packet[index];
        myPacket.status = 0;

        var xhr = cc.loader.getXMLHttpRequest();
        xhr.open("POST", requrl, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
        xhr.timeout = myTimeout;
        xhr.send(myString);

        xhr.onreadystatechange = function () {
            cc.log("readyState = " + xhr.readyState);

            if (xhr.readyState === 4) {
                cc.log("xhr_readyState[" + xhr.readyState + "] xhr.status[" + xhr.status + "]");

                if (xhr.status >= 200 && xhr.status < 300) {
                    var respone = xhr.responseText;
                    cc.log("[" + myTag + "][" + respone + "]");
                    if (!respone) {
                        cc.log("请检查网络!");
                        myPacket.status = 2;
                    }
                    else {
                        myPacket.status = 3;
                        myPacket.data = respone;
                    }
                }
                else {
                    myPacket.status = 1;
                }
            }
        };
    },
});

HttpRequest.instance = null;

HttpRequest.getInstance = function () {
    if (HttpRequest.instance == null) {
        HttpRequest.instance = new HttpRequest();
    }
    return HttpRequest.instance;
};
