import { COMMAND } from '../constant/BridgeGame.js';
import Bridge from '../domain/Bridge.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #tryCount = 0;

  constructor(size) {
    this.#bridge = new Bridge(size);
  }

  status() {
    return this.#bridge.status();
  }

  move(command) {
    let crossAble = null;

    if (command === COMMAND.UP) crossAble = this.#bridge.moveUp();
    if (command === COMMAND.DOWN) crossAble = this.#bridge.moveDown();

    return crossAble;
  }

  retry() {
    this.#tryCount += 1;
  }
}

export default BridgeGame;
