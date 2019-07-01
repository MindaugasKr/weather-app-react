import keys from './keys.js';
import axiosOpenWeatherMap from './axiosOpenWeatherMap';
import openweathermapAdapter from '../utils/openweathermapAdapter.js';

const returnOnFailure = { failedToRetrieveData: true };

const currentWeather = async (lat, lon) => {
  try {
    const response = await axiosOpenWeatherMap.get(`weather?lat=${lat}&lon=${lon}&appid=${keys.openWeatherKey}`);

    return response.status === 200 ? 
      openweathermapAdapter(response.data)
      :
      returnOnFailure;
  } catch {
    return returnOnFailure;
  }
}

export default currentWeather;