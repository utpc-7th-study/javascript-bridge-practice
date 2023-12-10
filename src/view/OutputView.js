import { Console } from '@woowacourse/mission-utils';
import { EOL } from 'os';

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  BRIDGE_SEPARATOR: '|',

  convertBridgeStatus(bridge) {
    const printFormat = `[ ${bridge.join(` ${this.BRIDGE_SEPARATOR} `)} ]`;

    return printFormat;
  },

  /**
   * @param {object} brigde 다리의 상태
   * @param {boolean[]} bridge.U - 위 다리의 상태
   * @param {boolean[]} bridge.D - 아래 다리의 상태
   */
  printMap(bridge) {
    const { U, D } = bridge;
    const brideStatus = [this.convertBridgeStatus(U), this.convertBridgeStatus(D)];

    this.print(`${brideStatus.join(EOL)}${EOL}`);
  },

  /**
   * @param {object} brigde 다리의 상태
   * @param {boolean[]} bridge.U - 위 다리의 상태
   * @param {boolean[]} bridge.D - 아래 다리의 상태
   * @param {boolean} result - 게임 성공 여부
   * @param {number} tryCount - 게임 시도 횟수
   */
  printResult(bridge, result, tryCount) {
    const { U, D } = bridge;
    const message = [
      '최종 게임 결과',
      this.convertBridgeStatus(U),
      this.convertBridgeStatus(D),
      `게임 성공 여부: ${result ? '성공' : '실패'}`,
      `총 시도한 횟수: ${tryCount}`,
    ];

    this.print(message.join(EOL));
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
