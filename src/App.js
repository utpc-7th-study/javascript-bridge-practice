/* eslint-disable max-lines-per-function */
import BridgeGame from './controller/BridgeGame.js';
import { BRIDGE_LENGTH, COMMAND } from './constant/BridgeGame.js';
import ERROR_MESSAGE from './constant/BridgeGameMessage.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #bridgeGame;

  async play() {
    const bridgeSize = await this.readBridgeSize();
    const bridgeGame = new BridgeGame(bridgeSize);

    while (!bridgeGame.done()) {
      const moving = await this.readMoving();
      const safe = bridgeGame.move(moving);
      OutputView.printMap(bridgeGame.status());
      if (!safe) {
        const restart = await this.readRestart();
        if (!restart) break;
        bridgeGame.retry();
      }
    }

    OutputView.printResult(bridgeGame.status(), bridgeGame.done(), bridgeGame.tryCount());
  }

  async mainLoop() {
    let continueGame = true;
    while (!this.#bridgeGame.done() && continueGame) {
      continueGame = await this.#processMove();
      if (continueGame) {
        this.#bridgeGame.retry();
      }
    }
  }

  async #processMove() {
    const moving = await this.readMoving();
    if (!this.#bridgeGame.move(moving)) {
      OutputView.printMap(this.#bridgeGame.status());
      return await this.readRestart();
    }
    OutputView.printMap(this.#bridgeGame.status());
    return true;
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
