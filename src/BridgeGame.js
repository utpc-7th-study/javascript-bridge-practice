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
    this.#assignBridge(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate));
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async move(command) {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  #assignBridge(bridge) {
    bridge.forEach((crossAbleSection) => {
      if (crossAbleSection === COMMAND.UP) {
        this.#bridge.U.push('O');
        this.#bridge.D.push('X');
      }
      if (crossAbleSection === COMMAND.DOWN) {
        this.#bridge.U.push('X');
        this.#bridge.D.push('O');
      }
    });
  }
}

export default BridgeGame;
