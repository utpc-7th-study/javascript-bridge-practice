import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

import WinningBridge from '../domains/WiningBridge.js';
import User from '../domains/User.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #winningBridge;
  #user;

  constructor() {
    OutputView.printStartMessage();
    this.#user = new User();
  }

  createWinningBridge(size) {
    this.#winningBridge = new WinningBridge(size);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async move() {
    if (this.#user.isFinished(this.#winningBridge)) {
      return this.close(true);
    }

    const moving = await InputView.readMoving();
    if (this.#user.canMove(moving, this.#winningBridge)) {
      this.#user.succeed(moving);
      OutputView.printMap(this.#user.getBridge());
      return await this.move();
    }

    this.#user.fail(moving);
    OutputView.printMap(this.#user.getBridge());
    await this.retry();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async retry() {
    const gameCommand = await InputView.readGameCommand();
    if (gameCommand === 'R') {
      this.#user.addTryNumber();
      this.#user.removeLast();
      return await this.move();
    }

    return this.close(false);
  }

  close(succeed) {
    OutputView.printResult(succeed);
  }
}

export default BridgeGame;
