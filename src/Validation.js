const Validation = {
  bridgeSize(size) {
    if (!/^[1-9][0-9]*$/.test(size)) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }

    if (Number(size) < 3 || Number(size) > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },

  moving(input) {
    if (input === 'U' || input === 'D') {
      return;
    }

    throw new Error('[ERROR] 이동할 칸은 (위: U, 아래: D)를 입력해주세요.');
  },
};

export default Validation;
