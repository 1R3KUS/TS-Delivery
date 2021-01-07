export const setCartItem = (payload: object) => ({
  type: 'SET_CART_ITEM',
  payload,
});

export const deleteCartItem = (payload: number) => ({
  type: 'DELETE_CART_ITEM',
  payload,
});

export const plusCartItem = (payload: number) => ({
  type: 'PLUS_CART_ITEM',
  payload,
});

export const minusCartItem = (payload: number) => ({
  type: 'MINUS_CART_ITEM',
  payload,
});
