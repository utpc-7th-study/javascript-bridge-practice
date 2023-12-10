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
};

export const validateBridgeSize = (bridgeSize) => {
  Validator.numberType(bridgeSize);
  Validator.invalidSize(bridgeSize);
};
