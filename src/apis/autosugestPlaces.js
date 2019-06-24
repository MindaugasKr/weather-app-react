import keys from './keys.js';

const places = require('places.js');

export default inputElement => places({
  appId: keys.algoliaId,
  apiKey: keys.algoliaKey,
  container: inputElement
});