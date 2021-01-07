interface ICartReducer {
  type: string;
  payload: any;
}

const initialState: any = {
  cartItems: {},
  totalCount: 0,
  totalPrice: 0,
};

//getTotalPrice нужен для получения общей суммы одного продукта в корзине
//Берется массив добавляемого объекта товара и с помощью reduce составляется его общая сумма в зависимости от количества
const getTotalPrice = (arr: Array<object>) =>
  arr.reduce((sum: number, obj: any) => obj.price + sum, 0);

const _get = (obj: any, path: string) => {
  const [firstKey, ...keys] = path.split('.');

  // При path: 'totalPrice', нижнее выражение возвращает totalPrice из всех items в cartItems
  // При path: 'items.length', нижнее выражение возвращает все массивы items из cartItems

  return keys.reduce((val: any, key: any) => val[key], obj[firstKey]);
};

//getTotalSum нужен для получения общей стоимости всех продуктов и их количества в корзине
//Берется новый items из cartItems
const getTotalSum = (obj: any, path: string) => {
  //На данный момент obj это - { action.payload.id: { items:[...], totalPrice: ... } }

  //Берет все значения items и передает в массив, то есть в данном случае: items:[...], totalPrice: ...
  return Object.values(obj).reduce((sum, obj) => {
    //На данный момент obj это - { items:[...], totalPrice: ... }

    //value = количество всех массивов в items или totalPrice всех items
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

export const cartReducer = (state = initialState, action: ICartReducer) => {
  switch (action.type) {
    case 'SET_CART_ITEM': {
      const currentCartItems = !state.cartItems[action.payload.id]
        ? [action.payload]
        : [...state.cartItems[action.payload.id].items, action.payload];

      const newItems = {
        ...state.cartItems,
        [action.payload.id]: {
          items: currentCartItems,
          totalPrice: getTotalPrice(currentCartItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        totalCount: totalCount,
        totalPrice,
      };
    }

    case 'DELETE_CART_ITEM': {
      const newState = {
        ...state.cartItems,
      };

      const currentTotalCount = newState[action.payload].items.length;
      const currentTotalPrice = newState[action.payload].totalPrice;

      delete newState[action.payload];

      return {
        ...state,
        cartItems: newState,
        totalCount: state.totalCount - currentTotalCount,
        totalPrice: state.totalPrice - currentTotalPrice,
      };
    }

    case 'PLUS_CART_ITEM': {
      const newState = [
        ...state.cartItems[action.payload].items,
        state.cartItems[action.payload].items[0],
      ];

      const newItems = {
        ...state.cartItems,
        [action.payload]: {
          items: newState,
          totalPrice: getTotalPrice(newState),
        },
      };

      const currentTotalCount = getTotalSum(newItems, 'items.length');
      const currentTotalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        totalCount: currentTotalCount,
        totalPrice: currentTotalPrice,
      };
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = state.cartItems[action.payload].items;

      const newObjItems =
        oldItems.length > 1 ? state.cartItems[action.payload].items.slice(1) : oldItems;

      const newItems = {
        ...state.cartItems,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
};
