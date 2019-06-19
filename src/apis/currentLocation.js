import keys from './keys.js';
import axios from 'axios';

const currentLocation = async () => {
  const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${keys.ipGeolocation}`);

  if (response.status === 200) {
    return {
      lat: response.data.latitude,
      lon: response.data.longitude,
    }
  } else {
    // fallback if finding current location fails
    return {
      lat: 54.6872,
      lon: 25.2797,
    }
  }
}

export default currentLocation;