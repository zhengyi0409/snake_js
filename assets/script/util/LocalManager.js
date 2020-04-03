/**
    * 写入数据，将数据存储在本地
    * @param jsonName:json文件名字
**/
window.LocalManager  = {};


var encrypt = require('../proto/encryptjs'); // 字符串数据加密
var secretkey= 'zhengyi_js'; // 加密密钥

LocalManager.setBool = function(_key,_value){
    var encrypted = encrypt.encrypt(_value.toString(),secretkey,256);
    cc.sys.localStorage.setItem(_key,encrypted);
};

LocalManager.getBool = function(_key){
    if(cc.sys.localStorage.getItem(_key) == null)
        return null;
    else{
        var cipherText = cc.sys.localStorage.getItem(_key);
        return encrypt.decrypt(cipherText,secretkey,256) == "false" ? false : true
    }
};

LocalManager.setInt = function(_key,_value){
    var encrypted = encrypt.encrypt(_value.toString(),secretkey,256);
    cc.sys.localStorage.setItem(_key,encrypted);
};

LocalManager.getInt = function(_key){
    if(cc.sys.localStorage.getItem(_key) == null)
        return null;
    else{
        var cipherText = cc.sys.localStorage.getItem(_key);
        return Number(encrypt.decrypt(cipherText,secretkey,256))
    }
};

LocalManager.setString = function(_key,_value){
    var encrypted = encrypt.encrypt(_value,secretkey,256);
    cc.sys.localStorage.setItem(_key,encrypted);
};

LocalManager.getString = function(_key){
    if(cc.sys.localStorage.getItem(_key) == null)
        return null;
    else{
        var cipherText = cc.sys.localStorage.getItem(_key);
        return encrypt.decrypt(cipherText,secretkey,256);
    }
};

LocalManager.setObject = function(_key,_value){
    cc.sys.localStorage.setItem(_key,JSON.stringify(_value))
};

LocalManager.getObject = function(_key){
    return JSON.parse(cc.sys.localStorage.getItem(_key))
};

LocalManager.clear = function(){
    cc.sys.localStorage.clear();
}


