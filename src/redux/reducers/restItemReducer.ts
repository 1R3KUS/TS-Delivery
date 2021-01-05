interface IRestReducer {
  type: string;
  payload: [number | Array<object>];
}

const initialState = {
  activeItem: 0,
};

export function restItemsReducer(state = initialState, action: IRestReducer) {
  switch (action.type) {
    case 'ACTIVE_REST_NUM':
      return {
        ...state,
        activeItem: action.payload,
      };
    default:
      return state;
  }
}
