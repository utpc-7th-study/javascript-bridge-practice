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
    await this.#reStartOrQuitProces();
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

      if (isMove) {
        this.#bridgeGame.addMoveCount();
        continue;
      }

      break;
    }
  }

  async #moveBridge(idx) {
    while (true) {
      try {
        const input = await InputView.readMoving();
        Validation.moving(input);
        const moved = this.#bridgeGame.move(input, idx);
        const { isMoved } = moved[moved.length - 1][0];
        OutputView.printRoundResult(moved);
        return isMoved;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #reStartOrQuitProces() {
    while (true) {
      try {
        const input = await InputView.readGameCommand();
        Validation.reStartOrQuit(input);
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
