import { combineReducers } from 'redux';
import { restItemsReducer } from './restItemReducer';
import { restsReducer } from './restReducer';

const rootReducer = combineReducers({
  rests: restsReducer,
  activeRests: restItemsReducer,
});

export default rootReducer;
