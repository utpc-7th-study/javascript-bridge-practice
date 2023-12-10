import { Console } from '@woowacourse/mission-utils';
import { COMMAND } from '../constant/BridgeGame';

const InputView = {
  readBridgeSize() {
    const bridgeSizeInput = this.read('다리의 길이를 입력해주세요.');

    return bridgeSizeInput;
  },

  readMoving() {
    const movingInput = this.read(
      `이동할 칸을 선택해주세요. (위: ${COMMAND.UP}, 아래: ${COMMAND.DOWN})`,
    );

    return movingInput;
  },

  readGameCommand() {
    const gameCommandInput = this.read(
      `게임을 다시 시작할지 여부를 입력해주세요. (재시도: ${COMMAND.RESTART}, 종료: ${COMMAND.QUIT})`,
    );

    return gameCommandInput;
  },

  read(message) {
    const input = Console.readLineAsync(message);

    return input;
  },
};

export default InputView;
