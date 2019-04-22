import { Handler } from "./Handler";

export class EventDispatcher<E> {
    private handlers: Array<Handler<E>> = [];
    public fire(event: E) {
        for (const handler of this.handlers) {
            handler(event);
        }
    }
    public register(handler: Handler<E>) {
        this.handlers.push(handler);
    }
}
