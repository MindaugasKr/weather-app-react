import keys from './keys.js';
import axios from 'axios';
import openweathermapAdapter from '../utils/openweathermapAdapter.js';

const returnOnFailure = null;

const weatherForecast = async (lat, longitude) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${longitude}&appid=${keys.openWeatherKey}`);

    if (response.status === 200) {
      const data = response.data;
      const dataList = data.list.map(item => openweathermapAdapter(item));
      return [
        ...dataList
      ]
    } else {
      return returnOnFailure;
    }

  } catch {
    return returnOnFailure;
  }
}

export default weatherForecast;