export default class Subject {
  constructor(state) {
    this.observers = [];
    this.state = state;
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  setState(newState) {
    this.state = newState;
    this.notifyAll(newState);
  }

  getState() {
    return this.state;
  }

  notifyConcrete(observerKey, data) {
    const concreteObserver = this.observers.find(
      (observer) => observer.key === observerKey
    );

    concreteObserver.update(data);
  }

  notifyAll(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}
