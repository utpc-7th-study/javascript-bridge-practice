import OutputView from '../view/OutputView.js';

/**
 *
 * @param {Map<Error, Function>} operator - Error 객체와 Error 객체에 대응하는 Action 객체를 가진 Map
 * @returns
 */

// eslint-disable-next-line max-lines-per-function
const createErrorHandler = (operator) => {
  // eslint-disable-next-line max-lines-per-function
  return async (excuteFunction) => {
    try {
      return await excuteFunction();
    } catch (error) {
      const errorAction = operator.get(error.constructor);

      if (!errorAction) throw error;

      OutputView.onPrint(error.message);

      return errorAction();
    }
  };
};

export default createErrorHandler;

//   #handleErrorAsRecursive = this.createUserInputErrorHandler();

// async visitDateProcess() {
//   return await this.#handleErrorAsRecursive(async () => {
//     const visitDateInput = await InputView.readVisitDate();
//     this.#discount = new Discount(visitDateInput);
//   });
// }

//   createUserInputErrorHandler() {
//     const operator = new Map([
//       [VisitDateInputError, this.visitDateProcess.bind(this)],
//       [OrderMenuInputError, this.orderProcess.bind(this)],
//     ]);
//     const errorHandler = createErrorHandler(operator);

//     return async (excuteFunction) => {
//       return await errorHandler(excuteFunction);
//     };
