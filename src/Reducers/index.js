import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer.js';
import BathroomReducer from './BathroomReducer';

export default combineReducers({
  auth: AuthReducer,
  bathroom: BathroomReducer,
});
