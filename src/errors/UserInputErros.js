export class UserInputError extends Error {
  #TEMPLETE = '[ERROR]';

  constructor(message) {
    super();
    this.message = `${this.#TEMPLETE} ${message}`;
  }
}

export class BridgeLengthInputError extends UserInputError {}
export class MoveInputError extends UserInputError {}
