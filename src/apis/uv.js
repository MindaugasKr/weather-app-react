import keys from './keys.js';
import axiosOpenWeatherMap from './axiosOpenWeatherMap';

const uv = async (lat, lon) => {
  const response = await axiosOpenWeatherMap.get(`uvi?lat=${lat}&lon=${lon}&appid=${keys.openWeatherKey}`);

  if (response.status === 200) {
    return response.data.value;
  } else {
    return undefined;
  }
}

export default uv;