export const setCartItem = (payload: object) => ({
  type: 'SET_CART_ITEM',
  payload,
});

export const deleteCartItem = (payload: number) => ({
  type: 'DELETE_CART_ITEM',
  payload,
});
