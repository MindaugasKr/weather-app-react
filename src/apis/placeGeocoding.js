import keys from './keys';
import axios from 'axios';

const returnOnFailure = {};

const placeGeolocation = async query => {
  try {
    const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${keys.locationIqKey}&q=${query}&format=json`);
    
    return response.status === 200 ?
      {lat: response.data[0].lat,
       lon: response.data[0].lon}
      :
      returnOnFailure;
  } catch {
    return returnOnFailure;
  }
}

export default placeGeolocation;