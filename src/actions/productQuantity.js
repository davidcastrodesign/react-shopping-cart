import { INCREASE_QUANTITY, DECREASE_QUANTITY } from './types';

export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log('Inside product Quantity');
    console.log('The action is ', action);
    console.log('The action is ', name);
  };
};