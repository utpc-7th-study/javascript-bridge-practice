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
    await this.#moveBridgeProces();
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

  async #moveBridgeProces() {
    const size = this.#bridgeGame.getSize();
    for (let i = 0; i < size; i++) {
      const isMove = await this.#moveBridge(i);
      if (!isMove) break;
    }
  }

  async #moveBridge(idx) {
    while (true) {
      try {
        const input = await InputView.readMoving();
        Validation.moving(input);
        return this.#checkMove(input, idx);
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  #checkMove(input, idx) {
    const isMoved = this.#bridgeGame.move(input, idx);
    if (isMoved) {
      this.#bridgeGame.addMoveCount();
      return true;
    }
    return false;
  }
}

const app = new App();
app.play();

export default App;
