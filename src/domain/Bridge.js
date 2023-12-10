import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';
import { COMMAND } from '../constant/BridgeGame.js';
import BridgeSpace from './BridgeSpace.js';

class Bridge {
  #bridge = [];

  #commands = [];

  #move = 0;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate).map(
      (crossAble) => new BridgeSpace(crossAble),
    );
  }

  size() {
    return this.#bridge.length();
  }

  status() {
    const Up = [];
    const Down = [];
    const COMMAND_ACTIONS = {
      [COMMAND.UP]: { pushTo: Up, value: 'O', pushToOther: Down, valueOther: ' ' },
      [COMMAND.DOWN]: { pushTo: Down, value: 'O', pushToOther: Up, valueOther: ' ' },
    };
    this.#commands.forEach((command) => {
      const action = COMMAND_ACTIONS[command];
      action.pushTo.push(action.value);
      action.pushToOther.push(action.valueOther);
    });
    return { U: Up, D: Down };
  }

  moveUp() {
    this.#move += 1;
    this.#recordCommand(COMMAND.UP);
    const targetSpace = this.#bridge[this.#move].crossAble(COMMAND.UP);
    return targetSpace;
  }

  moveDown() {
    this.#move += 1;
    this.#recordCommand(COMMAND.DOWN);
    const targetSpace = this.#bridge[this.#move];
    return targetSpace.crossAble(COMMAND.DOWN);
  }

  #recordCommand(command) {
    this.#commands.push(command);
  }
}

export default Bridge;
