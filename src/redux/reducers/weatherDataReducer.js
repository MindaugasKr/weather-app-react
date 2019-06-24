import {
  FETCH_WEATHER_DATA,
  HISTORY_STATE_TO_CURRENT_STATE,
} from '../actions/types';

const initialState = {
  currentWeatherData: {},
  uvIndex: '',
  weatherForecastData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA:
      return {...action.payload};
    case HISTORY_STATE_TO_CURRENT_STATE:
      return { ...action.payload };
    default: return state;
  }
}