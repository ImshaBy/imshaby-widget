export declare class Mass {
    accordionIndex: number;
    accordionExpanded: string;
    massIndex: number;
    expanded: boolean;
    massInfo: {
        time: string;
        info: string;
        duration: string;
        langCode: string;
        needUpdate: boolean;
        lastConfirmRelevance: string;
        updatePeriodInDays: string;
        online: boolean;
        rorate: boolean;
        address: string;
        broadcastUrl: string;
    };
    actual: boolean;
    render(): any;
}
