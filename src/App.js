import BridgeGame from './controller/BridgeGame.js';
import { BRIDGE_LENGTH, COMMAND } from './constant/BridgeGame.js';
import ERROR_MESSAGE from './constant/BridgeGameMessage.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #bridgeGame;

  async play() {
    const bridgeSize = await this.readBridgeSize();
    this.#bridgeGame = new BridgeGame(bridgeSize);
    await this.#mainBridgeGameLoop();

    OutputView.printResult(
      this.#bridgeGame.status(),
      this.#bridgeGame.done(),
      this.#bridgeGame.tryCount(),
    );
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

  async readMoving() {
    try {
      const movingCommandInput = await InputView.readMoving();
      this.#validateMovingCommand(movingCommandInput);
      return movingCommandInput;
    } catch (error) {
      OutputView.print(error.message);
      return this.readMoving();
    }
  }

  async readRestart() {
    try {
      const restartCommand = await InputView.readRestartCommand();
      this.#validateRestartCommand(restartCommand);
      return restartCommand === COMMAND.RESTART;
    } catch (error) {
      OutputView.print(error.message);
      return this.readRestart();
    }
  }

  async #mainBridgeGameLoop() {
    while (!this.#bridgeGame.done()) {
      const moving = await this.readMoving();
      const safe = this.#bridgeGame.move(moving);
      OutputView.printMap(this.#bridgeGame.status());
      if (!safe && !(await this.#handleUnsafeMove())) break;
    }
  }

  async #handleUnsafeMove() {
    OutputView.printMap(this.#bridgeGame.status());
    if (await this.readRestart()) {
      this.#bridgeGame.retry();
      return true;
    }
    return false;
  }

  #validateBridgeSize(bridgeSizeInput) {
    const isValidSize =
      bridgeSizeInput >= BRIDGE_LENGTH.MIN && bridgeSizeInput <= BRIDGE_LENGTH.MAX;

    if (!isValidSize) {
      throw new Error(ERROR_MESSAGE.INVALID_BRIDGE_SIZE);
    }
  }

  #validateMovingCommand(movingCommandInput) {
    if (!(movingCommandInput === COMMAND.UP || movingCommandInput === COMMAND.DOWN)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  #validateRestartCommand(restartCommand) {
    if (!(restartCommand === COMMAND.RESTART || restartCommand === COMMAND.QUIT)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }
}

const app = new App();
app.play();

export default App;
