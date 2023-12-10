import { Console } from '@woowacourse/mission-utils';

const INPUT_BRIDGE_SIZE_MESSAGE = '다리의 길이를 입력해주세요.\n';
const INPUT_MOVING_MESSAGE = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';

const InputView = {
  async readBridgeSize() {
    return await Console.readLineAsync(INPUT_BRIDGE_SIZE_MESSAGE);
  },

  async readMoving() {
    return await Console.readLineAsync(INPUT_MOVING_MESSAGE);
  },

  readGameCommand() {},
};

export default InputView;
