import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printMap() {},

  printResult() {},

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
