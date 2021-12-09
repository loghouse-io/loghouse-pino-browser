"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeBrowserLog = void 0;
var http_transport_1 = require("@loghouse/http-transport");
function writeBrowserLog(options) {
    var client = new http_transport_1.LoghouseClient(__assign({}, options));
    return function (logEvent) {
        if (options.enabledConsoleOutput) {
            console.log(logEvent);
        }
        console.log(logEventFormatter(logEvent));
        //client.log(logEventFormatter(logEvent))
    };
}
exports.writeBrowserLog = writeBrowserLog;
function logEventFormatter(logEvent) {
    var metadata = (function (_a) {
        var msg = _a.msg, time = _a.time, level = _a.level, o = __rest(_a, ["msg", "time", "level"]);
        return o;
    })(logEvent);
    metadata.level = logEvent.level;
    var message;
    if (logEvent.msg) {
        if (typeof logEvent.msg === 'object') {
            message = JSON.stringify(logEvent.msg);
        }
        else {
            message = logEvent.msg;
        }
    }
    else {
        message = 'N/A';
    }
    return {
        message: message,
        timestamp: logEvent.time,
        metadata: metadata
    };
}
//# sourceMappingURL=index.js.map