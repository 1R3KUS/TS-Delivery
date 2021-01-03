import axios from 'axios';
import { IRest } from '../../components/interfaces/HomeInterface';

export const setRest = (items: Array<IRest>) => ({
  type: 'SET_REST',
  payload: items,
});

export const setLoading = (payload: boolean) => ({
  type: 'SET_LOADING',
  payload,
});

export const setSortBy = (payload: ISortBy) => ({
  type: 'SET_SORT_BY',
  payload,
});

interface ISortBy {
  type: string;
  order: string;
}

export const fetchRest = (sortBy: ISortBy) => (dispatch: Function) => {
  dispatch(setLoading(false));
  axios
    .get(`/restaurants?_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({ data }) => dispatch(setRest(data)));
};
