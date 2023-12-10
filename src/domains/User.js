export default class User {
  #tryCount;
  #moveHistory;

  constructor() {
    this.#tryCount = 1;
    this.#moveHistory = [];
  }

  increaseTryCount() {
    this.#tryCount += 1;
  }

  getTryCount() {
    return this.#tryCount;
  }

  getMoveHistory() {
    return [...this.#moveHistory];
  }

  setMoveHistory(moveChar) {
    this.#moveHistory = [...this.#moveHistory, moveChar];
  }

  resetMoveHistory() {
    this.#moveHistory = [];
  }

  getBridgeLocationToCross() {
    return [...this.#moveHistory].length;
  }
}
