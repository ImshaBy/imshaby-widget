import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export declare class ImshaBySchedule {
    parishId: string;
    expanded: boolean;
    private srvr;
    private colorStyle;
    private navigation;
    componentWillLoad(): Promise<void>;
    private getParishId;
    private createColors;
    render(): any;
}
