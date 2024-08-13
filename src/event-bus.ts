class EventBus {
    private callbacksByEvents = new Map<string, { (payload: any): void }[]>();

    send(eventName: string, payload: any = {}, onDone: (res: any) => void = (res) => {}) {
        if (this.callbacksByEvents.has(eventName)) {
            const callbacks = this.getCallbacks(eventName);

            for (let event of callbacks) onDone(event(payload));
        }
    }

    addEvent(eventName: string, callback: (payload: any) => void) {
        if (this.callbacksByEvents.has(eventName)) {
            const callbacks = this.getCallbacks(eventName);

            callbacks.push(callback);
        } else {
            this.callbacksByEvents.set(eventName, [callback]);
        }
    }

    removeEvent(eventName: string) {
        this.callbacksByEvents.delete(eventName);
    }

    removeCallback(callback: (payload: any) => void) {
        for (let events of this.callbacksByEvents.values()) {
            let idx = events.findIndex((event) => event == callback);
            if (idx != -1) events.splice(idx, 1);
        }
    }

    getCallbacks(eventName: string): ((payload: any) => void)[] {
        const callbacks = this.callbacksByEvents.get(eventName);
        if (!callbacks) throw new Error(`callbacks triggered by event:"${eventName}" were not found`);

        return callbacks;
    }
}

export default new EventBus();
