import keys from './keys.js';
import axios from 'axios';
import openweathermapAdapter from '../utils/openweathermapAdapter.js';

const currentWeather = async (lat, lon) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keys.openWeatherKey}`)

  if (response.status !== 200) throw Object.assign(
    new Error('Invalid response from server'),
    { code: response.status }
  );

  return openweathermapAdapter(response.data);
}

export default currentWeather;