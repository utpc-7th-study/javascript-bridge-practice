import { Console } from '@woowacourse/mission-utils';

const INPUT_BRIDGE_SIZE_MESSAGE = '다리의 길이를 입력해주세요.\n';

const InputView = {
  async readBridgeSize() {
    return await Console.readLineAsync(INPUT_BRIDGE_SIZE_MESSAGE);
  },

  readMoving() {},

  readGameCommand() {},
};

export default InputView;
