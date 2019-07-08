import keys from './keys.js';
import axios from 'axios';

const returnOnFailure = undefined;

const uv = async (lat, lon) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${keys.openWeatherKey}`);
    
    return response.status === 200 ?
      response.data.value : returnOnFailure;
  } catch {
    return returnOnFailure;
  }
}

export default uv;