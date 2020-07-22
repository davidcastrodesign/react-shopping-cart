import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';

const intialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    ReaperHoodie: {
      name: 'Reaper Hoodie',
      price: 45.0,
      numbers: 0,
      inCart: false,
    },
    LoveHoodie: {
      name: 'Love Hoodie',
      price: 45.0,
      numbers: 0,
      inCart: false,
    },
    TearsHoodie: {
      name: 'Tears Hoodie',
      price: 45.0,
      numbers: 0,
      inCart: false,
    },
    RageHoodie: {
      name: 'Rage Hoodie',
      price: 45.0,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      let addQuantity = { ...state.products[action.payload] };
      addQuantity.numbers = +1;
      addQuantity.inCart = true;
      console.log(addQuantity);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        product: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
