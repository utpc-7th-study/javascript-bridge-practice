const Validation = {
  bridgeSize(size) {
    if (!/^[1-9][0-9]*$/.test(size)) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }

    if (Number(size) < 3 || Number(size) > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },
};

export default Validation;
