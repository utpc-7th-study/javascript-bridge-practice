import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async play() {
    OutputView.printStartMessage();
    await this.#generageBridgeProcess();
  }

  async #generageBridgeProcess() {
    while (true) {
      try {
        const size = await InputView.readBridgeSize();

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
