import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';
import { COMMAND } from '../constant/BridgeGame.js';
import BridgeSpace from './BridgeSpace.js';

class Bridge {
  #bridge = [];

  #commands = [];

  #status = {
    U: [],
    D: [],
  };

  #lastResult = false;

  constructor(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge = bridge.map((crossAbleCommand) => new BridgeSpace(crossAbleCommand));
  }

  done() {
    return this.#lastResult && this.#bridge.length === this.#commands.length;
  }

  size() {
    return this.#bridge.length();
  }

  status() {
    return this.#status;
  }

  retry() {
    this.#commands = [];
    this.#status = {
      U: [],
      D: [],
    };
  }

  moveUp() {
    this.#recordCommand(COMMAND.UP);
    const targetSpace = this.#bridge[this.#commands.length - 1];
    const safe = targetSpace.crossAble(COMMAND.UP);
    this.#status.U.push(safe ? 'O' : 'X');
    this.#status.D.push(' ');
    this.#lastResult = safe;

    return safe;
  }

  moveDown() {
    this.#recordCommand(COMMAND.DOWN);
    const targetSpace = this.#bridge[this.#commands.length - 1];
    const safe = targetSpace.crossAble(COMMAND.DOWN);
    this.#status.D.push(safe ? 'O' : 'X');
    this.#status.U.push(' ');
    this.#lastResult = safe;

    return safe;
  }

  #recordCommand(command) {
    this.#commands.push(command);
  }
}

export default Bridge;
