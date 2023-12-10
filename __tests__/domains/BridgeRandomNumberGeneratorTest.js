import BridgeRandomNumberGenerator from '../../src/domains/BridgeRandomNumberGenerator';

describe('method : generate test', () => {
  test('생성된 숫자는 모두 0과 1이여야 한다', () => {
    // given
    const randomNumbers = Array.from({ length: 10 }, () =>
      BridgeRandomNumberGenerator.generate(),
    );

    // when
    // then
    randomNumbers.forEach((randomNumber) => {
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(1);
    });
  });
});
