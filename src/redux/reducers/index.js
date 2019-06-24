import { combineReducers } from 'redux';

import weatherDataReducer from './weatherDataReducer';
import appStateReducer from './appStateReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  weatherData: weatherDataReducer,
  appState: appStateReducer,
  settings: settingsReducer,
})