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

  isFinish(currentPosition) {
    return currentPosition === this.#bridgeAnswer.length;
  }

  isMovable(moveNumber, position) {
    return this.#bridgeAnswer[position] === moveNumber;
  }

  // eslint-disable-next-line max-lines-per-function
  #validate(bridgeLength) {
    const numericRegExp = new RegExp('^[0-9]+$');

    if (!numericRegExp.test(bridgeLength)) {
      throw new BridgeLengthInputError(
        '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
      );
    }

    if (bridgeLength < 3 || bridgeLength > 20) {
      throw new BridgeLengthInputError(
        '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
      );
    }
  }
}
