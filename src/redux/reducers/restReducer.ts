const initialState = {
  rest: [],
  isLoading: false,
  sortBy: {
    type: 'rating',
    order: 'desc',
  },
};

export const restsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_REST':
      return {
        ...state,
        rest: action.payload,
        isLoading: true,
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};
