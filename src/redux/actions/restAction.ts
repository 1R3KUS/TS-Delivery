import axios from 'axios';

import { setLoading } from './restaurants';

export const activeRestNum = (payload: number) => ({
  type: 'ACTIVE_REST_NUM',
  payload,
});

export const setRestItems = (payload: Array<object>) => ({
  type: 'SET_REST_ITEMS',
  payload,
});

export const fetchRestItems = (sortBy: any) => (dispatch: Function) => {
  dispatch(setLoading(false));
  axios.get(`/restaurants?id=${sortBy}&_embed=menu`).then(({ data }) => {
    dispatch(setRestItems(data));
    dispatch(setLoading(true));
  });
};
