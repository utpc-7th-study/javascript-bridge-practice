class BridgeSpace {
  #crossAbleCommand;

  /**
   * @param {string} crossAbleSection - 'U', 'D'의 형태로 생성자에 주입됩니다.
   */
  constructor(crossAbleCommand) {
    this.#crossAbleCommand = crossAbleCommand;
  }

  crossAble(command) {
    return this.#crossAbleCommand === command;
  }

  rep() {
    return this.#crossAbleCommand;
  }
}

export default BridgeSpace;
