import { BRIDGE_LENGTH } from './BridgeGame.js';

const ERROR_PREFIX = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  INVALID_BRIDGE_SIZE: `${ERROR_PREFIX} 다리 길이는 ${BRIDGE_LENGTH.MIN}부터 ${BRIDGE_LENGTH.MAX} 사이의 숫자여야 합니다.`,
  INVALID_VALUE: `${ERROR_PREFIX} 올바르지 않은 입력입니다. 다시 입력해주세요.`
});

export default ERROR_MESSAGE;
