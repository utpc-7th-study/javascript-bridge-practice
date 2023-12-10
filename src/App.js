import BridgeGame from './domains/BridgeGame.js';
import Refree from './domains/Refree.js';
import User from './domains/User.js';
import {
  BridgeLengthInputError,
  MoveInputError,
  RetryInputError,
} from './errors/UserInputErros.js';
import createErrorHandler from './utils/createErrorHandler.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

const RETRY = 'R';
const QUIT = 'Q';
class App {
  #handleErrorAsRecursive = this.createUserInputErrorHandler();
  #user;
  #refree;
  #bridgeGame;

  async play() {
    OutputView.printStartMessage();
    await this.bridgeLengthProcess();
    this.#bindForBridgeGame();
    await this.moveProcess();
  }

  async bridgeLengthProcess() {
    return await this.#handleErrorAsRecursive(async () => {
      const bridgeLengthInput = await InputView.readBridgeSize();

      this.#refree = new Refree(bridgeLengthInput);
      this.#user = new User();
    });
  }

  // eslint-disable-next-line max-lines-per-function
  async moveProcess() {
    // eslint-disable-next-line max-lines-per-function
    return await this.#handleErrorAsRecursive(async () => {
      while (!this.#bridgeGame.isGameOver()) {
        const moveInput = await InputView.readMoving();
        if (!this.#bridgeGame.isMoveFoward(moveInput)) {
          this.#bridgeGame.move(moveInput);
          OutputView.printMap(this.#bridgeGame.getUserMoveHistory());

          return await this.retryProcess();
        }

        this.#bridgeGame.move(moveInput);
        OutputView.printMap(this.#bridgeGame.getUserMoveHistory());
      }

      this.#end();
    });
  }

  // eslint-disable-next-line max-lines-per-function
  async retryProcess() {
    // eslint-disable-next-line max-lines-per-function
    return await this.#handleErrorAsRecursive(async () => {
      const retryInput = await InputView.readGameCommand();
      this.#validateRetryInput(retryInput);

      if (retryInput === RETRY) {
        this.#bridgeGame.retry();
        await this.moveProcess();
      }

      if (retryInput === QUIT) this.#end();
    });
  }

  #end() {
    const result = this.#bridgeGame.getResult();
    OutputView.printResult(result);
  }

  #validateRetryInput(retryChar) {
    if (retryChar !== RETRY && retryChar !== QUIT) {
      throw new RetryInputError('R 또는 Q를 입력해주세요.');
    }
  }

  #bindForBridgeGame() {
    this.#bridgeGame = new BridgeGame(this.#user, this.#refree);
  }

  // eslint-disable-next-line max-lines-per-function
  createUserInputErrorHandler() {
    const operator = new Map([
      [BridgeLengthInputError, this.bridgeLengthProcess.bind(this)],
      [MoveInputError, this.moveProcess.bind(this)],
      [RetryInputError, this.retryProcess.bind(this)],
    ]);
    const errorHandler = createErrorHandler(operator);

    return async (excuteFunction) => {
      return await errorHandler(excuteFunction);
    };
  }
}

const app = new App();
app.play();

export default App;
