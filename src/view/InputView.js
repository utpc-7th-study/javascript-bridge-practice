import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {},

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

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
