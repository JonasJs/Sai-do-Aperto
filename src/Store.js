import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers/index';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

export {store};
