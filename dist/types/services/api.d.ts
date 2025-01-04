export declare class API {
    scheduleInfo: any;
    colorScheme: string;
    colorSchemeHash: string;
    requestInfo(props: any): Promise<void>;
    getScheduleInfo(): any;
    getColorScheme(): string;
    getColorSchemeHash(): string;
    private getScheduleFromAPI;
    private getColorSchemeFromAPI;
}
