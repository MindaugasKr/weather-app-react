import '../../test/setupTests';
import {
  renderComponentWithValue,
  hasStateAsProp
} from '../../test/genericTests';
import Background from './';

describe('reders', () => {
  renderComponentWithValue(Background, 'component-background');
  renderComponentWithValue(Background, 'child-background-img', 2);
})

describe('state', () => {

  hasStateAsProp(Background, {
    weatherData: {
      currentWeatherData: {
        conditionCodeOpenWeather: 777
      }
    }
  },
    { conditionCodeOpenWeather: 777 }
  );

})