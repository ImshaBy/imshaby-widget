export declare class DaysNavigation {
    scheduleInfo: any;
    allDays: any[];
    daysNavs: {
        day: string;
        date: any;
        disabled: string;
        active: string;
        dayNumber: string;
    }[];
    constructor(props: any);
    private dayInDaysExists;
    prepareMassData(): void;
    prepareNavs(): void;
}
