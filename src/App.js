import BridgeGame from './BridgeGame.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validation from './Validation.js';

class App {
  #bridgeGame;

  async play() {
    OutputView.printStartMessage();
    await this.#generageBridgeProcess();
  }

  async #generageBridgeProcess() {
    while (true) {
      try {
        const size = await InputView.readBridgeSize();
        Validation.bridgeSize(size);
        this.#bridgeGame = new BridgeGame(Number(size), BridgeRandomNumberGenerator.generate);
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
