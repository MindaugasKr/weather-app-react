import keys from './keys';
import axios from 'axios';

const placeGeolocation = async (query) => {
  const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${keys.locationIqKey}&q=${query}&format=json`);

  if (response.status !== 200) throw Object.assign(
    new Error('Invalid response from server'),
    { code: response.status }
  );

  // console.log('place geocoding:', response.data[0]);
  return {
      lat: response.data[0].lat,
      lon: response.data[0].lon
  }
}

export default placeGeolocation;