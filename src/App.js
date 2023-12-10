import OutputView from './OutputView.js';

class App {
  async play() {
    OutputView.printStartMessage();
  }
}

const app = new App();
app.play();

export default App;
