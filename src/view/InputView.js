import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const userInput = await this.onRead(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    );
    return userInput;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const userInput = await this.onRead('다리의 길이를 입력해주세요.\n');
    return userInput;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  async onRead(message) {
    const userInput = await Console.readLineAsync(message);

    if (userInput === undefined) {
      throw new Error('유저 입력이 없습니다.\n');
    }

    return userInput.trim();
  },
};

export default InputView;
