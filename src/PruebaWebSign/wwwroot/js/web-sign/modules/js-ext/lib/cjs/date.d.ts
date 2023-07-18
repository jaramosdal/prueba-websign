/**
 * Date utilities
 *
 * created by keng42 @2020-07-27 09:52:18
 */
export declare function deconstructDate(date: Date): {
    y: string;
    m: string;
    d: string;
    h: string;
    min: string;
    sec: string;
};
export declare function toChinaDate(date: Date): Date;
export declare function toDateString(date: Date): string;
export declare function toChinaDateString(date: Date): string;
export declare function toChineseDateString(date: Date): string;
export declare function toTimeString(date: Date): string;
export declare function toChinaTimeString(date: Date): string;
export declare function ts(date: Date): string;
export declare function ts8(date: Date): string;
export declare function ts6(date: Date): string;
