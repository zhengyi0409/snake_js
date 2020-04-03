/**
 * 全局事件通知类(Notification Center)
 */

'use strict';

window.Notification = {
    listeners: {},

    /**
     * 注册监听
     * 
     * @params {String} name 通知事件名
     * @params {String} cb 回调方法
     * @params {Object} obj 回调方法所属对象
     */ 
    on: function(name, cb, obj) {
        if (typeof(name) != 'string') {
            cc.error('add event listener error: eventName must be string!');
            return;
        }

        name = name.toUpperCase();
        var cbs = this.listeners[name];
        if (!cbs) {
            cbs = [{cb:cb, obj:obj}];
            this.listeners[name] = cbs;
        } else {
            for (var i = 0; i < cbs.length; i++) {
                var dic = cbs[i];
                if (dic.cb === cb && dic.obj === obj) {
                    return;
                }
            }
            cbs.push({cb:cb, obj:obj});
        }
    },

    /**
     * 广播通知
     * 
     * @params {String} name 通知事件名
     * @params {Object} msg 消息
     */ 
    dispatch: function(name,msg,obj) {
        name = name.toUpperCase();
        var cbs = this.listeners[name];
        if (!cbs) {
            cc.warn('dispatch event %s no handler', name);
            return;
        }

        if(obj){
            for (var i = 0; i < cbs.length; i++) {
                var dic = cbs[i];
                var cb = dic.cb;
                if(dic.obj === obj){
                    cb.call(dic.obj, msg);
                }
            }
        }else{
            for (var i = 0; i < cbs.length; i++) {
                var dic = cbs[i];
                var obj = dic.obj;
                var cb = dic.cb;
                cb.call(obj, msg);
            }
        }
    },

    /**
     * 移除监听
     * 
     * @param  {String} name 通知事件名
     * @param  {String} cb 回调方法
     * @param  {Object} obj 回调方法所属对象
     */
    remove: function(name, cb, obj) {
        if(name) {
            if (cb && obj) {
                this.removeListener(name, cb, obj);
            } else if (!cb && !obj) {
                this.removeListenersByName(name);
            } else {
                cc.error('params is error!');
            }
        } else {
            if (cb && !obj) {
                this.removeListenersByCb(cb);
            } else if (!cb && obj) {
                this.removeListenersByObj(obj);
            } else {
                cc.error('params is error!');
            }
        }
    },

    /**
     * 移除一个监听
     * 
     * @param  {String} name 通知事件名
     * @param  {String} cb 回调方法
     * @param  {Object} obj 回调方法所属对象
     */
    removeListener: function(name, cb, obj) {
        var cbs = this.listeners[name];
        if (!cbs) {
            return;
        }

        for (var i = cbs.length - 1; i > 0; i--) {
            var dic = cbs[i];
            if (dic.cb === cb && dic.obj === obj) {
                cbs.splice(i, 1);
            }
        }
        if (!cbs.length) {
            delete this.listeners[name];
        }
    },

    /**
     * 移除所有同名事件的监听
     * 
     * @param  {String} name 通知事件名
     */
    removeListenersByName: function(name) {
        var cbs = this.listeners[name];
        if (!cbs) {
            return;
        }

        delete this.listeners[name];
    },

    /**
     * 移除所有同名回调方法的监听
     * 
     * @param  {String} cb 回调方法
     */
    removeListenersByCb: function(cb) {
        var listeners = this.listeners;
        for (var key in listeners) {
            var cbs = listeners[key];
            if (!cbs) {
                continue;
            }
            for (var i = cbs.length - 1; i >= 0; i--) {
                var dic = cbs[i];
                if (dic.cb === cb) {
                    cbs.splice(i, 1);
                    break;
                }
            }
        }
    },

    /**
     * 移除一个对象的所有监听
     * 
     * @param  {Object} obj 回调方法所属对象
     */
    removeListenersByObj: function(obj) {
        var listeners = this.listeners;
        for (var key in listeners) {
            var cbs = listeners[key];
            if (!cbs) {
                continue;
            }
            for (var i = cbs.length - 1; i >= 0; i--) {
                var dic = cbs[i];
                if (dic.obj === obj) {
                    cbs.splice(i, 1);
                    break;
                }
            }
        }
    },

    /**
     * 移除所有监听
     */
    removeAllListeners: function() {
        delete this.listeners;
        this._listeners = {};
    }
}