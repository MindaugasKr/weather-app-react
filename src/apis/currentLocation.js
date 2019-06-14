import keys from './keys.js';
import axios from 'axios';

const currentLocation = async () => {
  const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${keys.ipGeolocation}`);
  
  if (response.status !== 200) throw Object.assign(
    new Error('Invalid response from server'),
    { code: response.status }
  );

  const data = response.data;

  return {
      lat: data.latitude,
      lon: data.longitude,
  }
}

export default currentLocation;