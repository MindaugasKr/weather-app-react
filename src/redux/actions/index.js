import placeGeocoding from '../../apis/placeGeocoding';
import currentWeather from '../../apis/currentWeather';
import uv from '../../apis/uv';
import weatherForecast from '../../apis/weatherForecast';
import currentLocation from '../../apis/currentLocation';

import history from '../../history';

import {
  FETCH_WEATHER_DATA,
  SET_TEMP_TYPE_CELSIUS,
  SET_TEMP_TYPE_FAHRENHEIT,
  FETCHING_DATA,
  HISTORY_STATE_TO_CURRENT_STATE,
  ERROR_FETCH_COORDINATES,
} from './types';

import config from '../../config';

// time zone look up
const tzlookup = require("tz-lookup");

export const fetchWeatherData = query => async (dispatch, getState) => {

  // dispatch({
  //   type: FETCHING_DATA,
  //   payload: true
  // })

  // let lat, lon;
  // // get coordinates fron location search query
  // if (query) {
  //   ({lat, lon} = await placeGeocoding(query));
  //   // On placeGeocoding failure
  //   if (!lat || !lon) {
  //     dispatch({
  //       type: FETCHING_DATA,
  //       payload: false
  //     });
  //     dispatch({
  //       type: ERROR_FETCH_COORDINATES,
  //       payload: true
  //     });
  //     return;
  //   }
  // // Get coordinates of current location
  // } else {
  //   ({lat, lon} = await currentLocation());
  // }

  // let currentWeatherData, uvIndex, weatherForecastData;

  // await Promise.all([
  //   (async () => {currentWeatherData = await currentWeather(lat, lon);} )(),
  //   (async () => {uvIndex = await uv(lat, lon);} )(),
  //   (async () => {weatherForecastData = await weatherForecast(lat, lon);} )(),
  // ]);

  // dispatch({
  //   type: FETCHING_DATA,
  //   payload: false
  // })

  // const data = {
  //   timeZone: tzlookup(lat, lon),
  //   currentWeatherData,
  //   uvIndex,
  //   weatherForecastData,
  // }

  // for testing
  // localStorage.setItem('data', JSON.stringify(data));
  const data = JSON.parse(localStorage.getItem('data'));

  dispatch({
    type: FETCH_WEATHER_DATA,
    payload: data,
  })

  history.push(config.subpath, [getState()]);
}

export const changeTempType = (isCelsius) => {
  return {
    type: isCelsius ? SET_TEMP_TYPE_CELSIUS : SET_TEMP_TYPE_FAHRENHEIT,
  }
}

export const histoyStateToCurrentState = (historyState) => {
  return {
    type: HISTORY_STATE_TO_CURRENT_STATE,
    payload: historyState,
  }
}

export const changeFetchCoordinatesErrorStatus = isError => {
  return {
    type: ERROR_FETCH_COORDINATES,
    payload: isError
  }
}