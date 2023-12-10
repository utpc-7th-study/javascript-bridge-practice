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
    this.#tryCount += 1;
  }

  tryCount() {
    return this.#tryCount;
  }

  done() {
    return this.#bridge.done();
  }

  status() {
    return this.#bridge.status();
  }

  move(command) {
    let safe = null;
    if (command === COMMAND.UP) safe = this.#bridge.moveUp();
    if (command === COMMAND.DOWN) safe = this.#bridge.moveDown();
    return safe;
  }

  retry() {
    this.#tryCount += 1;
    this.#bridge.retry();
  }
}

export default BridgeGame;
