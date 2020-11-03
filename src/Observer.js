export default class Observer {
  constructor(key) {
    this.key = key;
    this.data = {};
    this.callbacks = [];
  }

  subscribe(subscriptor) {
    this.callbacks.push(subscriptor);
  }

  update(data) {
    this.data = data;
    this.callbacks.forEach((fn) => fn(this.data));
  }
}
