import keys from './keys.js';
import axiosOpenWeatherMap from './axiosOpenWeatherMap';
import openweathermapAdapter from '../utils/openweathermapAdapter.js';

const returnOnFailure = null;

const weatherForecast = async (lat, longitude) => {
  try {
    const response = await axiosOpenWeatherMap.get(`forecast?lat=${lat}&lon=${longitude}&appid=${keys.openWeatherKey}`);

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