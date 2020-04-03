/**
 * 工具类
 */

'use strict';

Array.prototype.unique = function () {
    var o = {},
        i,
        l = this.length,
        r = [];
    for (i = 0; i < l; i++) {
        o[this[i]] = this[i];
    }for (i in o) {
        r.push(o[i]);
    }return r;
};

window.Utils = {};

Utils.fixedFloat = function (num, fixed) {
    var param = fixed ? Math.pow(10, fixed) : 100;
    return Math.floor(num * param) / param;
};

//获取当前时间戳(毫秒)
Utils.getTime = function () {
    var now = new Date().getTime();
    return parseInt(now);
};

//得到时间戳（精确到秒）
Utils.getTimeSec = function () {
    var now = new Date().getTime() / 1000;
    return parseInt(now);
};

Utils.doubleDigit = function (num) {
    var n = parseInt(num);
    if (n < 10) {
        n = "0" + n;
    }
    return n;
};

Utils.getRandomName = function () {
    return name_list[Math.floor(Math.random() * name_list.length)];
};

Utils.getStrLength = function (str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var a = str.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 4;
        } else {
            len += 1;
        }
    }
    return len;
};

// m - n 之间随机数
Utils.sum = function (m, n) {
    var num = Math.floor(Math.random() * (m - n) + n);
    return num;
};

//生成从minNum到maxNum的随机数
Utils.randomNum = function (minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
};

// 两点之间的距离
Utils.getDistance = function (x1, y1, x2, y2) {
    var _x = Math.abs(x1 - x2);
    var _y = Math.abs(y1 - y2);
    return Math.sqrt(_x * _x + _y * _y);
};

Utils.getLength = function (str) {
    var l = str.length;
    var unicodeLen = 0;
    for (i = 0; i < l; i++) {
        if (str.charCodeAt(i) > 127) {
            unicodeLen++;
        }
        unicodeLen++;
    }
    return unicodeLen;
};

Utils.encodeUtf8 = function (text) {
    var code = encodeURIComponent(text);
    var bytes = [];
    for (var i = 0; i < code.length; i++) {
        var c = code.charAt(i);
        if (c === '%') {
            var hex = code.charAt(i + 1) + code.charAt(i + 2);
            var hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
};

Utils.decodeUtf8 = function (bytes) {
    var encoded = "";
    for (var i = 0; i < bytes.length; i++) {
        encoded += '%' + bytes[i].toString(16);
    }
    return decodeURIComponent(encoded);
};

Utils.isEmptyObject = function (obj) {
    if (obj == null || obj.length == 0) return true;else return false;
};

Utils.lerp = function (p1, p2, d) {
    if (d <= 0) {
        return p1;
    }

    var vx = p2.x - p1.x;
    var vy = p2.y - p1.y;
    var sd = vx * vx + vy * vy;
    if (sd <= d * d) {
        return p2;
    }

    var scale = d / Math.sqrt(sd);
    return cc.v2(p1.x + vx * scale, p1.y + vy * scale);
};

//差距太小的不lerp
Utils.lerp_Percs = function (v1, v2, perc) {
    var eps3 = 1e-6;
    if (Math.abs(v1 - v2) <= eps3) {
        return v1;
    }
    return (v2 - v1) * perc + v1;
};

Utils.lerp_Perc = function (p1, p2, perc) {
    return cc.v2(Utils.lerp_Percs(p1.x, p2.x, perc), Utils.lerp_Percs(p1.y, p2.y, perc));
};

Utils.dist = function (a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
};

Utils.resize = function (array, count) {
    var length = array.length;
    if (length < count) {
        for (var i = length; i < count; i++) {
            array[i] = 0;
        }
    } else if (length > count) {
        array.length = count;
    } else if (length == count) {}
};

// 深拷贝
Utils.deepCopy = function (arry1, arry2) {
    for (var i = 0, l = arry1.length; i < l; i++) {
        arry2[i] = arry1[i];
    }
};

// 数组按固定大小一组拆分
Utils.chunk = function (array, size) {
    //获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
    var length = array.length;
    //判断不是数组，或者size没有设置，size小于1，就返回空数组
    if (!length || !size || size < 1) {
        return [];
    }
    //核心部分
    var index = 0; //用来表示切割元素的范围start
    var resIndex = 0; //用来递增表示输出数组的下标

    //根据length和size算出输出数组的长度，并且创建它。
    var result = new Array(Math.ceil(length / size));
    //进行循环
    while (index < length) {
        //循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
        result[resIndex++] = array.slice(index, index += size);
    }
    //输出新数组
    return result;
};

// 数组arr分割成poslength指定的大小
Utils.split_array = function (arr, poslength) {

    var lens = arr.length / poslength;
    var len = Math.floor(lens + 0.5);
    var up = false; // 五入
    var down = false; // 四舍
    if (lens < len) {
        // 五入
        up = true;
    } else {
        // 四舍
        down = true;
    }

    var arr_length = arr.length;
    var newArr = [];
    var posNum = 0; // 点的数量
    var yunum = 0;
    var uptag = false;

    for (var _i = 0; _i < arr_length; _i += len) {
        if (uptag) {
            break;
        }

        posNum = posNum + 1;
        if (down) {
            if (posNum == poslength) {
                newArr.push(arr.slice(_i, arr_length - 1));
                break;
            } else {
                newArr.push(arr.slice(_i, _i + len));
            }
        }

        if (up) {
            yunum = arr_length - posNum * len;
            if (posNum + yunum == poslength) {
                uptag = true;
            }
            newArr.push(arr.slice(_i, _i + len));
        }
    }

    if (up) {
        for (var _i2 = posNum * len; _i2 < arr_length; _i2++) {
            newArr.push(arr.slice(_i2, _i2 + 1));
        }
    }

    return newArr;
};

//v表示要转换的值 e表示要保留的位数
Utils.round = function (v, e) {
    var t = 1;
    for (; e > 0; t *= 10, e--) {}
    for (; e < 0; t /= 10, e++) {}
    return Math.round(v * t) / t;
};

Utils.stringFormat = function () {
    if (arguments.length == 0) return null;
    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
};

Utils.utf8ByteToUnicodeStr = function (utf8Bytes) {
    var unicodeStr = "";
    for (var pos = 0; pos < utf8Bytes.length;) {
        var flag = utf8Bytes[pos];
        var unicode = 0;
        if (flag >>> 7 === 0) {
            unicodeStr += String.fromCharCode(utf8Bytes[pos]);
            pos += 1;
        } else if ((flag & 0xFC) === 0xFC) {
            unicode = (utf8Bytes[pos] & 0x3) << 30;
            unicode |= (utf8Bytes[pos + 1] & 0x3F) << 24;
            unicode |= (utf8Bytes[pos + 2] & 0x3F) << 18;
            unicode |= (utf8Bytes[pos + 3] & 0x3F) << 12;
            unicode |= (utf8Bytes[pos + 4] & 0x3F) << 6;
            unicode |= utf8Bytes[pos + 5] & 0x3F;
            unicodeStr += String.fromCharCode(unicode);
            pos += 6;
        } else if ((flag & 0xF8) === 0xF8) {
            unicode = (utf8Bytes[pos] & 0x7) << 24;
            unicode |= (utf8Bytes[pos + 1] & 0x3F) << 18;
            unicode |= (utf8Bytes[pos + 2] & 0x3F) << 12;
            unicode |= (utf8Bytes[pos + 3] & 0x3F) << 6;
            unicode |= utf8Bytes[pos + 4] & 0x3F;
            unicodeStr += String.fromCharCode(unicode);
            pos += 5;
        } else if ((flag & 0xF0) === 0xF0) {
            unicode = (utf8Bytes[pos] & 0xF) << 18;
            unicode |= (utf8Bytes[pos + 1] & 0x3F) << 12;
            unicode |= (utf8Bytes[pos + 2] & 0x3F) << 6;
            unicode |= utf8Bytes[pos + 3] & 0x3F;
            unicodeStr += String.fromCharCode(unicode);
            pos += 4;
        } else if ((flag & 0xE0) === 0xE0) {
            unicode = (utf8Bytes[pos] & 0x1F) << 12;;
            unicode |= (utf8Bytes[pos + 1] & 0x3F) << 6;
            unicode |= utf8Bytes[pos + 2] & 0x3F;
            unicodeStr += String.fromCharCode(unicode);
            pos += 3;
        } else if ((flag & 0xC0) === 0xC0) {
            //110
            unicode = (utf8Bytes[pos] & 0x3F) << 6;
            unicode |= utf8Bytes[pos + 1] & 0x3F;
            unicodeStr += String.fromCharCode(unicode);
            pos += 2;
        } else {
            unicodeStr += String.fromCharCode(utf8Bytes[pos]);
            pos += 1;
        }
    }
    return unicodeStr;
};


/**参数说明：
 * 根据长度截取先使用字符串，超长部分追加…
 */
Utils.cutstr = function (maxLength, text) {
    var count = 0;
    var curL = 0;

    if (text == null) {
        text = "";
    }

    for (var i = 0; i < text.length; i++) {
        if (text[i] >= '0' && text[i] < '9' || text[i] >= 'a' && text[i] <= 'z' && text[i] != "m") {
            count += 1;
            curL += 1;
            if (curL <= maxLength * 2) {
                continue;
            } else {
                if (curL > maxLength * 2) {
                    count -= 1;
                }

                break;
            }
        } else if (text[i] >= 'A' && text[i] <= 'Z') {
            count += 1;
            curL += 2;
            if (curL <= maxLength * 2) {
                continue;
            } else {
                if (curL > maxLength * 2) {
                    count -= 1;
                }
                break;
            }
        } else if (text[i] >= 0 && text[i] <= 127) {
            count += 1;
            curL += 1;
            if (curL < maxLength * 2) {
                continue;
            } else {
                if (curL > maxLength * 2) {
                    count -= 1;
                }
                break;
            }
        } else {
            count += 1;
            curL += 2;
            if (curL <= maxLength * 2) {
                continue;
            } else {
                if (curL > maxLength * 2) {
                    count -= 1;
                }
                break;
            }
        }
    }

    var tBuf = "";
    for (var j = 0; j < count; j++) {
        tBuf += text[j];
    }

    if (curL >= maxLength * 2) {
        if (tBuf == text) {
            return text;
        }
        return tBuf + "..";
    } else {
        return text;
    }
};