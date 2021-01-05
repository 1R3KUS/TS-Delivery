import axios from 'axios';

export const activeRestNum = (payload: number) => ({
  type: 'ACTIVE_REST_NUM',
  payload,
});

export const setRestItems = (payload: Array<object>) => ({
  type: 'SET_REST_ITEMS',
  payload,
});

export const fetchRestItems = (sortBy: any) => (dispatch: Function) => {
  axios
    .get(`http://localhost:3001/restaurants?id=${sortBy}&_embed=menu`)
    .then(({ data }) => dispatch(setRestItems(data)));
};
