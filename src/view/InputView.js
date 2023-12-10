import { EOL } from 'os';
import { Console } from '@woowacourse/mission-utils';
import { COMMAND } from '../constant/BridgeGame.js';

const InputView = {
  async readBridgeSize() {
    const bridgeSizeInput = await this.read(`다리의 길이를 입력해주세요.${EOL}`);

    return bridgeSizeInput;
  },

  async readMoving() {
    const movingInput = await this.read(
      `이동할 칸을 선택해주세요. (위: ${COMMAND.UP}, 아래: ${COMMAND.DOWN})${EOL}`,
    );

    return movingInput;
  },

  async readGameCommand() {
    const gameCommandInput = await this.read(
      `게임을 다시 시작할지 여부를 입력해주세요. (재시도: ${COMMAND.RESTART}, 종료: ${COMMAND.QUIT})${EOL}`,
    );

    return gameCommandInput;
  },

  async read(message) {
    const input = await Console.readLineAsync(message);

    return input;
  },
};

export default InputView;
