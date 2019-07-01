import keys from './keys.js';
import axios from 'axios';

const returnOnFailure = {
  lat: 54.6872,
  lon: 25.2797,
};

const currentLocation = async () => {
  try {
    const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${keys.ipGeolocation}`);

    return response.status === 200 ? 
      {lat: response.data.latitude,
       lon: response.data.longitude,}
      :
      returnOnFailure;
  } catch {
    return returnOnFailure;
  }
}

export default currentLocation;