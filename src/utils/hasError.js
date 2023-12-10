import OutputView from '../views/OutputView.js';

const hasError = (validate, input) => {
  try {
    validate(input);
    return false;
  } catch (error) {
    OutputView.print(error.message);
    return true;
  }
};

export default hasError;
