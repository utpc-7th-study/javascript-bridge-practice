import BridgeMaker from '../src/BridgeMaker';
import BridgeRandomNumberGenerator from '../src/domains/BridgeRandomNumberGenerator';

describe('BridgeMaker test', () => {
  test('입력받은 사이즈 만큼 길이를 반환해야 한다.', () => {
    // given
    const size = 10;

    // when
    const result = BridgeMaker.makeBridge(size, () => 0);

    // then
    expect(result).toHaveLength(size);
  });

  test('반환값의 모든 요소는 0과 1로 이루어져야 한다.', () => {
    // given
    const size = 10;

    // when
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );
    const result = bridge.every((value) => value === 'U' || value === 'D');

    // then
    expect(result).toBe(true);
  });
});
