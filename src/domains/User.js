class User {
  #bridge;
  #tryNumber;

  constructor() {
    this.#bridge = new Map();
    this.#set();
    this.#tryNumber = 1;
  }

  #set() {
    this.#bridge.set('U', []);
    this.#bridge.set('D', []);
  }

  canMove(moving, winningBridge) {
    return winningBridge.isSame(moving, this.#bridge.get('U').length);
  }

  succeed(moving) {
    this.#bridge.get(moving).push('O');
    this.#bridge.get(moving === 'U' ? 'D' : 'U').push(' ');
  }

  fail(moving) {
    this.#bridge.get(moving).push('X');
    this.#bridge.get(moving === 'U' ? 'D' : 'U').push(' ');
  }

  getBridge() {
    return this.#bridge;
  }

  addTryNumber() {
    this.#tryNumber += 1;
  }

  removeLast() {
    this.#bridge.get('U').pop();
    this.#bridge.get('D').pop();
  }

  isFinished(winningBridge) {
    return winningBridge.isSameSize(this.#bridge.get('U').length);
  }
}

export default User;
