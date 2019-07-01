import keys from './keys.js';
import axiosOpenWeatherMap from './axiosOpenWeatherMap';

const returnOnFailure = undefined;

const uv = async (lat, lon) => {
  try {
    const response = await axiosOpenWeatherMap.get(`uvi?lat=${lat}&lon=${lon}&appid=${keys.openWeatherKey}`);

    return response.status === 200 ?
      response.data.value : returnOnFailure;
  } catch {
    return returnOnFailure;
  }
}

export default uv;