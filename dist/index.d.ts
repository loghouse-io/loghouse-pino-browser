interface ILogEvent {
    time: number;
    level: number;
    msg?: string;
    [key: string]: any;
}
interface ILoghousePinoOptions {
    accessToken: string;
    bucketId: string;
    enabledConsoleOutput: boolean;
}
export declare function writeBrowserLog(options: ILoghousePinoOptions): (logEvent: ILogEvent) => void;
export {};
