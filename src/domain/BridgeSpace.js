class BridgeSpace {
  #crossAbleSection;

  /**
   * @param {string} crossAbleSection - 'U', 'D'의 형태로 생성자에 주입됩니다.
   */
  constructor(crossAbleSection) {
    this.#crossAbleSection = crossAbleSection;
  }

  crossAble(command) {
    return this.#crossAbleSection === command;
  }
}

export default BridgeSpace;
