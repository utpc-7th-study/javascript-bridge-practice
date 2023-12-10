import BridgeGame from './BridgeGame.js';
import InputView from './views/InputView.js';

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  async play() {
    const bridgeSize = await InputView.readBridgeSize();
  }
}

const app = new App();
await app.play();

export default App;
