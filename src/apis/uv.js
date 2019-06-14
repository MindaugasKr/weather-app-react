import keys from './keys.js';
import axios from 'axios';

const uv = async (lat, lon) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${keys.openWeatherKey}`);

  if (response.status !== 200) throw Object.assign(
    new Error('Invalid response from server'),
    { code: response.status }
  );

  return response.data.value;
}

export default uv;