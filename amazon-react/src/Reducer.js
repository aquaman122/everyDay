export const initalState = {
  basket: [],
  user: null,
} 

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket:[...state.basket, action.item],
      };
    
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index > -1) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          '(id' +
          action.id + ')이 장바구니에 존재하지 않습니다.'
        )
      }

      return {
        ...state,
        basket: newBasket,
      }

      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        }

      default:
        return state;
  }
}

export default reducer;