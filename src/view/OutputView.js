import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  // eslint-disable-next-line max-lines-per-function
  printMap(moveHistory) {
    const upside = moveHistory.map(({ location, isSuccess }) => {
      if (location !== 'U') return ' ';
      return isSuccess ? 'O' : 'X';
    });
    const downside = moveHistory.map(({ location, isSuccess }) => {
      if (location !== 'D') return ' ';
      return isSuccess ? 'O' : 'X';
    });

    this.onPrint(`[ ${upside.join(' | ')} ]`);
    this.onPrint(`[ ${downside.join(' | ')} ]\n`);
  },

  printResult({ tryCount, isWin, moveHistory }) {
    this.onPrint('\n최종 게임 결과');
    this.printMap(moveHistory);

    this.onPrint(`게임 성공 여부: ${isWin ? '성공' : '실패'}`);
    this.onPrint(`총 시도한 횟수: ${tryCount}\n`);
  },

  printStartMessage() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  onPrint(message) {
    Console.print(message);
  },
};

export default OutputView;
