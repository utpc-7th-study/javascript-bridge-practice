import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printMap() {},

  printResult(isMove, totalCount) {
    Console.print(`\n게임 성공 여부: ${isMove ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${totalCount}`);
  },

  print(message) {
    Console.print(message);
  },

  printRoundResult(isSuccess, moved) {
    if (isSuccess) {
      Console.print('\n최종 게임 결과');
    }

    const lower = moved.map(([{ Lower }]) => Lower);
    const upper = moved.map(([{ Uppper }]) => Uppper);

    this.printUp(upper);
    this.printDown(lower);
  },

  printUp(upper) {
    let result = '';
    upper.forEach((item) => {
      if (item === null) result += '[   ]';
      if (item === true) result += '[ O ]';
      if (item === false) result += '[ X ]';
    });
    Console.print(result.replaceAll('][', '|'));
  },

  printDown(lower) {
    let result = '';
    lower.forEach((item) => {
      if (item === null) result += '[   ]';
      if (item === true) result += '[ O ]';
      if (item === false) result += '[ X ]';
    });
    Console.print(result.replaceAll('][', '|'));
  },
};

export default OutputView;
