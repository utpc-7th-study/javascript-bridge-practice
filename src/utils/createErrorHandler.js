import OutputView from '../view/OutputView.js';

/**
 *
 * @param {*} operator - Error 객체와 Error 객체에 대응하는 Action 객체를 가진 Map
 * @returns
 */

// eslint-disable-next-line max-lines-per-function
const createErrorHandler = (operator) => {
  return (error) => {
    const errorAction = operator.get(error.constructor);

    if (!errorAction) throw error;

    OutputView.printError(error.message);

    return errorAction();
  };
};

export default createErrorHandler;
