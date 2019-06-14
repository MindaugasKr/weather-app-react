import keys from './keys.js';

const places = require('places.js');

export default (inputRef) => places({
  appId: keys.algoliaId,
  apiKey: keys.algoliaKey,
  container: inputRef
});