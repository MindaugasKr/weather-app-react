import keys from './keys.js';
import axios from 'axios';
import openweathermapAdapter from '../utils/openweathermapAdapter.js';

const currentWeather = async (lat, lon) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keys.openWeatherKey}`)

  if (response.status === 200) {
    return openweathermapAdapter(response.data);
  } else {
    // Must return object because other code relies on this object existing
    return { failedToRetrieveData: true };
  }
}

export default currentWeather;