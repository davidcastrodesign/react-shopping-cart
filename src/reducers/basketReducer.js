import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';

const intialState = {
  basketNumbers: 0,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return {
        basketNumbers: state.basketNumbers + 1,
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
