import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';
import BridgeMaker from '../BridgeMaker.js';

class WinningBridge {
  #bridge;

  constructor(bridgeSize) {
    this.#bridge = [];
    this.#set(bridgeSize);
  }

  #set(size) {
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    this.#bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
  }

  isSame(moving, currentPosition) {
    return this.#bridge[currentPosition] === moving;
  }

  isSameSize(size) {
    return this.#bridge.length === size;
  }
}

export default WinningBridge;
