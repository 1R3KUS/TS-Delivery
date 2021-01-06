import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { restItemsReducer } from './restItemReducer';
import { restsReducer } from './restReducer';

const rootReducer = combineReducers({
  rests: restsReducer,
  activeRests: restItemsReducer,
  cart: cartReducer,
});

export default rootReducer;
