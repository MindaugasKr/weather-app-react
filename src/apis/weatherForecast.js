import keys from './keys.js';
import axiosOpenWeatherMap from './axiosOpenWeatherMap';
import openweathermapAdapter from '../utils/openweathermapAdapter.js';

const weatherForecast = async (lat, longitude) => {
  const response = await axiosOpenWeatherMap.get(`forecast?lat=${lat}&lon=${longitude}&appid=${keys.openWeatherKey}`);

  if (response.status === 200) {
    const data = response.data;
    const dataList = data.list.map(item => openweathermapAdapter(item));
    return [
      ...dataList
    ]
  } else {
    return null;
  }
}

export default weatherForecast;