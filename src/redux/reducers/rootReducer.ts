import { combineReducers } from 'redux';
import { restsReducer } from './restReducer';

const rootReducer = combineReducers({
  rests: restsReducer,
});

export default rootReducer;
