export declare class D {
    static readonly standardDays: string[];
    static readonly daysNames: string[];
    static parseDateFromString(date: string): Date;
    static getToday(): Date;
    static getDayIndex(date: string): string;
    static getWeekDay(date: string): string;
    static getWeekName(index: any): string;
    static strToDate(dtStr: any): Date;
}
