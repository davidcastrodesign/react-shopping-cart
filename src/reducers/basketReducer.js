import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../actions/types';

const intialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    ReaperHoodie: {
      name: 'Reaper Hoodie',
      tagName: 'ReaperHoodie',
      price: 45.0,
      numbers: 0,
      inCart: false,
    },
    LoveHoodie: {
      name: 'Love Hoodie',
      tagName: 'LoveHoodie',
      price: 45.0,
      numbers: 0,
      inCart: false,
    },
    TearsHoodie: {
      name: 'Tears Hoodie',
      tagName: 'TearsHoodie',
      price: 45.0,
      numbers: 0,
      inCart: false,
    },
    RageHoodie: {
      name: 'Rage Hoodie',
      tagName: 'RageHoodie',
      price: 45.0,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = intialState, action) => {
  let productSelected = '';
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers = +1;
      productSelected.inCart = true;
      console.log(productSelected);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        product: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload],
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCartCost = 0;
      if (productSelected.numbers === 0) {
        productSelected.numbers = 0;
      } else {
        productSelected.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload];
      }

      return {
        ...state,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    default:
      return state;
  }
};
