import { MoveInputError, RetryInputError } from '../errors/UserInputErros.js';
import paramType from '../lib/src/paramType.js';
import Refree from './Refree.js';
import User from './User.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const UP = 'U';
const DOWN = 'D';
const MOVE_SYMBOLS = {
  U: UP,
  D: DOWN,
};

class BridgeGame {
  #user;
  #refree;

  constructor(
    user,
    refree,
    _0 = paramType(user, User),
    _1 = paramType(refree, Refree),
  ) {
    this.#user = user;
    this.#refree = refree;
  }

  move(moveChar) {
    const moveSymbol = MOVE_SYMBOLS[moveChar];
    const userLocation = this.#user.getBridgeLocationToCross();

    this.#user.setMoveHistory({
      location: moveSymbol,
      isSuccess: this.#refree.isMovable(moveSymbol, userLocation),
    });
  }

  isMoveFoward(moveChar) {
    this.#validateMoveInput(moveChar);

    const moveSymbol = MOVE_SYMBOLS[moveChar];
    const userLocation = this.#user.getBridgeLocationToCross();

    return this.#refree.isMovable(moveSymbol, userLocation);
  }

  getUserMoveHistory() {
    return this.#user.getMoveHistory();
  }

  retry() {
    this.#user.resetMoveHistory();
    this.#user.increaseTryCount();
  }

  isGameOver() {
    return this.#refree.isFinish(this.#user.getMoveHistory());
  }

  getResult() {
    return {
      tryCount: this.#user.getTryCount(),
      isWin: this.#refree.isFinish(this.#user.getMoveHistory()),
      moveHistory: this.#user.getMoveHistory(),
    };
  }

  #validateMoveInput(moveChar) {
    if (MOVE_SYMBOLS[moveChar] === undefined) {
      throw new MoveInputError('U 또는 D를 입력해주세요.');
    }
  }
}

export default BridgeGame;
