import { EventDispatcher } from './EventDispatcher';
import { Handler } from './Handler';

// tslint:disable-next-line: no-empty-interface
export interface IDataLoadedEvent {}

export interface IDisposable {
    dispose(): void;
}

export class PreloaderManager implements IDisposable {
    private dataLoadedDispatcher: EventDispatcher<IDataLoadedEvent>;
    private timer: NodeJS.Timeout;

    constructor() {
        this.dataLoadedDispatcher = new EventDispatcher<IDataLoadedEvent>();      
    }

    public onDataLoaded(handler: Handler<IDataLoadedEvent>) {
        this.dataLoadedDispatcher.register(handler);
    }
    
    public dispose(): void {
        clearTimeout(this.timer);
    }

    public loadData(timeout: number): void {
        this.timer = setTimeout(() => {
            this.fireDataLoaded({});
        }, timeout);
    }

    private fireDataLoaded(event: IDataLoadedEvent) {
        this.dataLoadedDispatcher.fire(event);
    }
}
