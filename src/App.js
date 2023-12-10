import BridgeGame from './BridgeGame.js';
import { BRIDGE_LENGTH } from './constant/BridgeGame.js';
import ERROR_MESSAGE from './constant/BridgeGameMessage.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    const bridgeSize = await this.readBridgeSize();
    const bridgeGame = new BridgeGame(bridgeSize);
  }

  async readBridgeSize() {
    try {
      const bridgeSizeInput = Number(await InputView.readBridgeSize());
      this.#validateBridgeSize(bridgeSizeInput);
      return bridgeSizeInput;
    } catch (error) {
      OutputView.print(error.message);
      return this.readBridgeSize();
    }
  }

  #validateBridgeSize(bridgeSizeInput) {
    const isValidSize =
      bridgeSizeInput >= BRIDGE_LENGTH.MIN && bridgeSizeInput <= BRIDGE_LENGTH.MAX;

    if (!isValidSize) {
      throw new Error(ERROR_MESSAGE.INVALID_BRIDGE_SIZE);
    }
  }
}

const app = new App();
app.play();

export default App;
