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
}

export default WinningBridge;
