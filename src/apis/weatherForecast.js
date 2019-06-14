import keys from './keys.js';
import axios from 'axios';
import openweathermapAdapter from '../utils/openweathermapAdapter.js';

const weatherForecast = async (lat, longitude) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${longitude}&appid=${keys.openWeatherKey}`);

  if (response.status !== 200) throw Object.assign(
    new Error('Invalid response from server'),
    { code: response.status }
  );

  const data = response.data;

  const dataList = data.list.map(item => openweathermapAdapter(item));

  return [
    ...dataList
  ]
}

export default weatherForecast;