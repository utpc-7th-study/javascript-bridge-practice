import BridgeGame from '../../src/domains/BridgeGame';
import Refree from '../../src/domains/Refree';
import User from '../../src/domains/User';
import { MoveInputError } from '../../src/errors/UserInputErros';
import paramType from '../../src/lib/src/paramType';

jest.mock('../../src/lib/src/paramType', () => jest.fn(() => true));

jest.mock('../../src/domains/Refree', () => {
  return {
    default: jest.fn().mockImplementation(() => ({
      isMovable: jest.fn(),
      isFinish: jest.fn(),
    })),
    __esModule: true,
  };
});

jest.mock('../../src/domains/User', () => {
  return {
    default: jest.fn().mockImplementation(() => ({
      resetMoveHistory: jest.fn(),
      increaseTryCount: jest.fn(),
      getMoveHistory: jest.fn(),
    })),
    __esModule: true,
  };
});

describe('예외처리 테스트', () => {
  const mockUser = new User();
  const mockRefree = new Refree();

  test('U와 D 이외의 값이 들어오면 예외가 발생해야 한다', () => {
    // given
    const moveChar = 'A';
    const bridgeGame = new BridgeGame(mockUser, mockRefree);

    // when
    // then
    expect(() => {
      bridgeGame.isMoveFoward(moveChar);
    }).toThrow(MoveInputError);
  });
});

describe('retry test', () => {
  test('retry 메서드를 호출하면 user의 moveHistory가 초기화 되어야 한다.', () => {
    // given
    const mockUser = new User();
    const mockRefree = new Refree();
    const bridgeGame = new BridgeGame(mockUser, mockRefree);

    // when
    bridgeGame.retry();

    // then
    expect(mockUser.resetMoveHistory).toBeCalled();
    expect(mockUser.increaseTryCount).toBeCalled();
  });
});

describe('isGameOver test', () => {
  test('isGameOver를 호출하면 refree의 isFinish도 호출되어야 한다.', () => {
    // given
    const mockUser = new User();
    const mockRefree = new Refree();
    const bridgeGame = new BridgeGame(mockUser, mockRefree);

    // when
    bridgeGame.isGameOver();

    // then
    expect(mockRefree.isFinish).toBeCalled();
    expect(mockUser.getMoveHistory).toBeCalled();
  });
});
