import BridgeGame from './controller/BridgeGame.js';
import InputView from './views/InputView.js';

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  async play() {
    const bridgeSize = await InputView.readBridgeSize();
    this.#bridgeGame.createWinningBridge(bridgeSize);

    await this.#bridgeGame.move();
  }
}

const app = new App();
await app.play();

export default App;
