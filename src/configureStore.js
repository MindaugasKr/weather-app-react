import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './redux/reducers';

// for tests
export const middlewares = [ReduxThunk];

export default () => applyMiddleware(...middlewares)(createStore)(rootReducer);