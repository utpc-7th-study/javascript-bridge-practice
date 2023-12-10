import BridgeMaker from '../../src/BridgeMaker';
import Refree from '../../src/domains/Refree';
import { BridgeLengthInputError } from '../../src/errors/UserInputErros';

jest.mock('../../src/BridgeMaker.js', () => ({
  makeBridge: jest.fn(),
}));

describe('다리 길이 입력 예외처리 test', () => {
  test('숫자 이외의 값이 들어왔을때 예외가 발생한다.', () => {
    // given
    const bridgeLength = 'a';

    // when
    // then
    expect(() => {
      new Refree(bridgeLength);
    }).toThrow(BridgeLengthInputError);
  });

  test.each([0, 21])(
    '다리 길이 범위를 벗어난 값이 들어왔을때 들어오면 예외가 발생한다.',
    (overRangeNumber) => {
      // given
      const bridgeLength = overRangeNumber;

      // when
      // then
      expect(() => {
        new Refree(bridgeLength);
      }).toThrow(BridgeLengthInputError);
    },
  );
});

describe('isMovable test', () => {
  test('생성된 다리에 일치하는 move 입력이 들어왔을때 반환값을 확인한다.', () => {
    // given
    const bridgeLength = 3;
    BridgeMaker.makeBridge.mockReturnValue(['U', 'U', 'U']);
    const refree = new Refree(bridgeLength);
    const moveChar = 'U';
    const position = 0;

    // when
    // then
    [
      ['U', 0, true],
      ['D', 1, false],
    ].forEach(([moveChar, position, expected]) => {
      expect(refree.isMovable(moveChar, position)).toBe(expected);
    });
  });
});

describe('method : isFinish test', () => {
  test('user의 moveHistory가 모두 성공했을때 true를 반환한다.', () => {
    // given
    const bridgeLength = 3;
    BridgeMaker.makeBridge.mockReturnValue(['U', 'U', 'U']);
    const refree = new Refree(bridgeLength);
    const moveHistory = [
      { position: 'U', isSuccess: true },
      { position: 'D', isSuccess: true },
      { position: 'U', isSuccess: true },
    ];

    // when
    // then
    expect(refree.isFinish(moveHistory)).toBe(true);
  });

  test.each([
    [
      [
        { position: 'U', isSuccess: true },
        { position: 'D', isSuccess: true },
        { position: 'D', isSuccess: false },
      ],
    ],
    [[{ position: 'U', isSuccess: true }]],
  ])('finish 조건이 충족하지 않을때 false를 반환한다.', (moveHistory) => {
    // given
    const bridgeLength = 3;
    BridgeMaker.makeBridge.mockReturnValue(['U', 'U', 'U']);
    const refree = new Refree(bridgeLength);

    // when
    // then
    expect(refree.isFinish(moveHistory)).toBe(false);
  });
});
