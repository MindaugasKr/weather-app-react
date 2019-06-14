import { combineReducers } from 'redux';

import weatherDataReducer from './weatherDataReducer';
import tempTypeReducer from './tempTypeReducer';
import appStateReducer from './appStateReducer';

export default combineReducers({
  weatherData: weatherDataReducer,
  tempType: tempTypeReducer,
  appState: appStateReducer,
})