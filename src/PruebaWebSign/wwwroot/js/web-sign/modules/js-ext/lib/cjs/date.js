"use strict";
/**
 * Date utilities
 *
 * created by keng42 @2020-07-27 09:52:18
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ts6 = exports.ts8 = exports.ts = exports.toChinaTimeString = exports.toTimeString = exports.toChineseDateString = exports.toChinaDateString = exports.toDateString = exports.toChinaDate = exports.deconstructDate = void 0;
const number_1 = require("./number");
const offset = (480 + new Date().getTimezoneOffset()) * 60000;
function deconstructDate(date) {
    return {
        y: date.getFullYear().toString(),
        m: number_1.pad(date.getMonth() + 1),
        d: number_1.pad(date.getDate()),
        h: number_1.pad(date.getHours()),
        min: number_1.pad(date.getMinutes()),
        sec: number_1.pad(date.getSeconds()),
    };
}
exports.deconstructDate = deconstructDate;
function toChinaDate(date) {
    return offset === 0 ? date : new Date(date.getTime() + offset);
}
exports.toChinaDate = toChinaDate;
// 1970-01-01 00:00:00
function toDateString(date) {
    const { y, m, d, h, min, sec } = deconstructDate(date);
    return `${y}-${m}-${d} ${h}:${min}:${sec}`;
}
exports.toDateString = toDateString;
// 1970-01-01 08:00:00
function toChinaDateString(date) {
    return toDateString(toChinaDate(date));
}
exports.toChinaDateString = toChinaDateString;
// 1970年01月01日 08:00:00
function toChineseDateString(date) {
    const { y, m, d, h, min, sec } = deconstructDate(toChinaDate(date));
    return `${y}年${m}月${d}日 ${h}:${min}:${sec}`;
}
exports.toChineseDateString = toChineseDateString;
// 00:00:00
function toTimeString(date) {
    const { h, min, sec } = deconstructDate(date);
    return `${h}:${min}:${sec}`;
}
exports.toTimeString = toTimeString;
// 08:00:00
function toChinaTimeString(date) {
    return toTimeString(toChinaDate(date));
}
exports.toChinaTimeString = toChinaTimeString;
// 19700101000000
function ts(date) {
    const { y, m, d, h, min, sec } = deconstructDate(date);
    return `${y}${m}${d}${h}${min}${sec}`;
}
exports.ts = ts;
// 19700101
function ts8(date) {
    const { y, m, d } = deconstructDate(date);
    return `${y}${m}${d}`;
}
exports.ts8 = ts8;
// 000000
function ts6(date) {
    const { h, min, sec } = deconstructDate(date);
    return `${h}${min}${sec}`;
}
exports.ts6 = ts6;
