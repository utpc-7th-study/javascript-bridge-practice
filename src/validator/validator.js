const Validator = {
  numberType(bridgeSize) {
    if (isNaN(Number(bridgeSize))) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },

  invalidSize(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },

  invalidMoving(moving) {
    if (moving !== 'U' && moving !== 'D') {
      throw new Error('[ERROR] 이동할 칸은 U 또는 D로만 입력해야 합니다.');
    }
  },

  invalidGameCommand(gameCommand) {
    if (gameCommand !== 'R' && gameCommand !== 'Q') {
      throw new Error('[ERROR] 재시작 여부는 R 또는 Q로만 입력해야 합니다.');
    }
  },
};

export const validateBridgeSize = (bridgeSize) => {
  Validator.numberType(bridgeSize);
  Validator.invalidSize(bridgeSize);
};

export const validateMoving = (moving) => {
  Validator.invalidMoving(moving);
};

export const validateGameCommand = (gameCommand) => {
  Validator.invalidGameCommand(gameCommand);
};
