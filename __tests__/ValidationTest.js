import Validation from '../src/Validation';

describe('', () => {
  test.each([['1'], ['2'], ['0'], ['-5'], ['O'], [''], ['    '], ['21']])(
    'readBridgeSize 테스트',
    (input) => {
      expect(() => {
        Validation.bridgeSize(input);
      }).toThrow();
    }
  );

  test.each([['u'], ['d'], [''], [' ']])('readMoving 테스트', (input) => {
    expect(() => {
      Validation.moving(input);
    }).toThrow();
  });

  test.each([['r'], ['q'], [''], [' ']])('reStartOrQuit 테스트', (input) => {
    expect(() => {
      Validation.reStartOrQuit(input);
    }).toThrow();
  });
});
