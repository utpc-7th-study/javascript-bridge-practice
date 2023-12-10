import BridgeMaker from './BridgeMaker.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #bridgeRandomNumberGenerator;

  constructor(size, bridgeRandomNumberGenerator) {
    this.#bridgeRandomNumberGenerator = bridgeRandomNumberGenerator;
    this.#bridge = this.#generageBridge(size);
    console.log(this.#bridge);
  }

  getSize() {
    return this.#bridge.length;
  }

  #generageBridge(size) {
    const result = BridgeMaker.makeBridge(size, this.#bridgeRandomNumberGenerator);
    return result;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving, idx) {
    const bridgePosition = this.#bridge[idx];
    if (moving === 'U') return 1 === bridgePosition;
    return 0 === bridgePosition;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

export default BridgeGame;
