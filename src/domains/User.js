class User {
  #currentPosition;
  #tryNumber;

  constructor() {
    this.#currentPosition = 0;
    this.#tryNumber = 1;
  }

  canMove(moving, winningBridge) {
    return winningBridge.isSame(moving, this.#currentPosition);
  }

  move() {
    this.#currentPosition += 1;
  }
}

export default User;
