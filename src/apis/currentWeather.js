import keys from './keys.js';
import axiosOpenWeatherMap from './axiosOpenWeatherMap';
import openweathermapAdapter from '../utils/openweathermapAdapter.js';

const currentWeather = async (lat, lon) => {
  const response = await axiosOpenWeatherMap.get(`weather?lat=${lat}&lon=${lon}&appid=${keys.openWeatherKey}`);

  if (response.status === 200) {
    return openweathermapAdapter(response.data);
  } else {
    // Must return object because other code relies on this object existing
    return { failedToRetrieveData: true };
  }
}

export default currentWeather;