class EventBus {
    constructor() {
        this.callbacksByEvents = new Map();
    }
    send(eventName, payload = {}, onDone = (res) => { }) {
        if (this.callbacksByEvents.has(eventName))
            for (let event of this.callbacksByEvents.get(eventName))
                onDone(event(payload));
    }
    addEvent(eventName, callback) {
        if (this.callbacksByEvents.has(eventName))
            this.callbacksByEvents.get(eventName).push(callback);
        else
            this.callbacksByEvents.set(eventName, [callback]);
    }
    removeEvent(eventName) {
        this.callbacksByEvents.delete(eventName);
    }
    removeCallback(callback) {
        for (let events of this.callbacksByEvents.values()) {
            let idx = events.findIndex((event) => event == callback);
            if (idx != -1)
                events.splice(idx, 1);
        }
    }
}
export default new EventBus();
//# sourceMappingURL=event-bus.js.map