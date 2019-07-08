import keys from './keys.js';
import axios from 'axios';
import openweathermapAdapter from '../utils/openweathermapAdapter.js';

const returnOnFailure = { failedToRetrieveData: true };

const currentWeather = async (lat, lon) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keys.openWeatherKey}`);
    
    return response.status === 200 ? 
      openweathermapAdapter(response.data)
      :
      returnOnFailure;
  } catch {
    return returnOnFailure;
  }
}

export default currentWeather;