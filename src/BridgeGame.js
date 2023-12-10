import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import { COMMAND } from './constant/BridgeGame.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = {
    U: [],
    D: [],
  };

  #move = 0;

  #tryCount = 0;

  constructor(size) {
    const bridge = this.#convertBridge(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate),
    );
    this.#bridge = bridge;
  }

  status() {
    return {
      U: this.#bridge.U.slice(0, this.#move),
      D: this.#bridge.D.slice(0, this.#move),
    };
  }

  done() {
    return this.#bridge.U.length === this.#move;
  }

  move(command) {
    this.#bridge[command === COMMAND.UP ? 'D' : 'U'][this.#move] = null;
    this.#move += 1;

    return this.#bridge[command][this.#move];
  }

  retry() {
    this.#move = 0;
    this.#tryCount += 1;
  }

  #convertBridge(bridge) {
    bridge.forEach((crossAbleSection) => {
      if (crossAbleSection === COMMAND.UP) {
        this.#bridge.U.push(true);
        this.#bridge.D.push(false);
      }
      if (crossAbleSection === COMMAND.DOWN) {
        this.#bridge.U.push(false);
        this.#bridge.D.push(true);
      }
    });
  }
}

export default BridgeGame;
