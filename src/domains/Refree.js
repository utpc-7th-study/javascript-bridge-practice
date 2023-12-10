import BridgeMaker from '../BridgeMaker.js';
import { BridgeLengthInputError } from '../errors/UserInputErros.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';

export default class Refree {
  #bridgeAnswer;

  constructor(bridgeLength) {
    this.#validate(bridgeLength);
    this.#bridgeAnswer = BridgeMaker.makeBridge(
      Number(bridgeLength),
      BridgeRandomNumberGenerator.generate,
    );
  }

  isFinish(moveHistory) {
    const isFinish = moveHistory.every(({ isSuccess }) => isSuccess);

    return !!isFinish && moveHistory.length === this.#bridgeAnswer.length;
  }

  isMovable(moveChar, position) {
    return this.#bridgeAnswer[position] === moveChar;
  }

  #validate(bridgeLength) {
    this.#checkNumeric(bridgeLength);
    this.#checkRange(bridgeLength);
  }

  #checkNumeric(bridgeLength) {
    const numericRegExp = new RegExp('^[0-9]+$');

    if (!numericRegExp.test(bridgeLength)) {
      throw new BridgeLengthInputError(
        '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
      );
    }
  }

  #checkRange(bridgeLength) {
    if (bridgeLength < 3 || bridgeLength > 20) {
      throw new BridgeLengthInputError(
        '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
      );
    }
  }
}
