"use strict";
/**
 * types
 *
 * created by keng42 @2020-07-27 10:51:36
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.isUndefined = exports.isString = exports.isRegExp = exports.isNumber = exports.isNull = exports.isFunction = exports.isError = exports.isDate = exports.isBoolean = exports.isArray = void 0;
function isArray(obj) {
    return Object.prototype.toString.call(obj) === `[object Array]`;
}
exports.isArray = isArray;
function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === `[object Boolean]`;
}
exports.isBoolean = isBoolean;
function isDate(obj) {
    return Object.prototype.toString.call(obj) === `[object Date]`;
}
exports.isDate = isDate;
function isError(obj) {
    return Object.prototype.toString.call(obj) === `[object Error]`;
}
exports.isError = isError;
function isFunction(obj) {
    return Object.prototype.toString.call(obj) === `[object Function]`;
}
exports.isFunction = isFunction;
function isNull(obj) {
    return Object.prototype.toString.call(obj) === `[object Null]`;
}
exports.isNull = isNull;
function isNumber(obj) {
    return Object.prototype.toString.call(obj) === `[object Number]`;
}
exports.isNumber = isNumber;
function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === `[object RegExp]`;
}
exports.isRegExp = isRegExp;
function isString(obj) {
    return Object.prototype.toString.call(obj) === `[object String]`;
}
exports.isString = isString;
function isUndefined(obj) {
    return Object.prototype.toString.call(obj) === `[object Undefined]`;
}
exports.isUndefined = isUndefined;
function isObject(obj) {
    return Object.prototype.toString.call(obj) === `[object Object]`;
}
exports.isObject = isObject;
