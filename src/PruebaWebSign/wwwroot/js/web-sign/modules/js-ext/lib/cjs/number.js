"use strict";
/**
 * Number utilities
 *
 * created by keng42 @2020-07-27 09:52:59
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeDiv = exports.safeMul = exports.safeSub = exports.safeAdd = exports.pad = void 0;
// pad zero before numbers
function pad(num, len = 2) {
    if (num >= Math.pow(10, len)) {
        return num.toString();
    }
    return '0'.repeat(len - num.toString().length) + num;
}
exports.pad = pad;
// js has a precision problem with decimals,
// so convert them to integers before calculating.
// be careful with the overflow problems with larger numbers
// https://segmentfault.com/a/1190000000324193
function decodeNum(a, b) {
    const aStr = a.toString();
    const bStr = b.toString();
    const aInt = Number(aStr.replace('.', ''));
    const bInt = Number(bStr.replace('.', ''));
    const [, r1Str = ''] = aStr.split('.');
    const [, r2Str = ''] = bStr.split('.');
    return {
        aInt,
        bInt,
        r1: r1Str.length,
        r2: r2Str.length,
    };
}
function safeAdd(a, b) {
    let { r1, r2, aInt, bInt } = decodeNum(a, b);
    const c = Math.abs(r1 - r2);
    if (c > 0) {
        const cm = Math.pow(10, c);
        if (r1 > r2) {
            bInt *= cm;
        }
        else {
            aInt *= cm;
        }
    }
    const m = Math.pow(10, Math.max(r1, r2));
    return (aInt + bInt) / m;
}
exports.safeAdd = safeAdd;
function safeSub(a, b) {
    let { r1, r2, aInt, bInt } = decodeNum(a, b);
    const c = Math.abs(r1 - r2);
    if (c > 0) {
        const cm = Math.pow(10, c);
        if (r1 > r2) {
            bInt *= cm;
        }
        else {
            aInt *= cm;
        }
    }
    const m = Math.pow(10, Math.max(r1, r2));
    return (aInt - bInt) / m;
}
exports.safeSub = safeSub;
function safeMul(a, b) {
    const { r1, r2, aInt, bInt } = decodeNum(a, b);
    const m = Math.pow(10, r1 + r2);
    return (aInt * bInt) / m;
}
exports.safeMul = safeMul;
function safeDiv(a, b) {
    const { r1, r2, aInt, bInt } = decodeNum(a, b);
    const m = Math.pow(10, r1 - r2);
    return safeMul(aInt / bInt, m);
}
exports.safeDiv = safeDiv;
