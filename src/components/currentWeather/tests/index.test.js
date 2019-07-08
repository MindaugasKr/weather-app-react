import {
  cleanup,
} from '@testing-library/react';

import {
  rendersNodeWithDataTestId,
  rendersNodeWithExactText,
} from 'genericTests';

import {
  stateAfterSuccesfullDataFetchingMock,
} from 'stateMocks';

import CurrentWeather from '../';

afterEach(() => {
  cleanup();
})

describe('renders', () => {
  rendersNodeWithDataTestId(CurrentWeather, 'component-current-weather', 1);
  rendersNodeWithDataTestId(CurrentWeather, 'btn-celsius', 1);
  rendersNodeWithDataTestId(CurrentWeather, 'btn-fahrenheit', 1);

  describe('when failedToRetrieveData === true', () => {
    const initialState = { weatherData: { currentWeatherData: { failedToRetrieveData: true } } };
    rendersNodeWithDataTestId(CurrentWeather, 'ErrorContainer', 1, initialState);
    rendersNodeWithDataTestId(CurrentWeather, 'InfoDay', 0, initialState);
    rendersNodeWithDataTestId(CurrentWeather, 'InfoLocatioAndDate', 0, initialState);
    rendersNodeWithDataTestId(CurrentWeather, 'InfoWeather', 0, initialState);
    rendersNodeWithDataTestId(CurrentWeather, 'InfoCurrentTemp', 0, initialState);
  })
  describe('when failedToRetrieveData === false', () => {
    const initialState = { weatherData: { currentWeatherData: { failedToRetrieveData: false } } };
    rendersNodeWithDataTestId(CurrentWeather, 'ErrorContainer', 0, initialState);
    rendersNodeWithDataTestId(CurrentWeather, 'InfoDay', 1, initialState);
    rendersNodeWithDataTestId(CurrentWeather, 'InfoLocatioAndDate', 1, initialState);
    rendersNodeWithDataTestId(CurrentWeather, 'InfoWeather', 1, initialState);
    rendersNodeWithDataTestId(CurrentWeather, 'InfoCurrentTemp', 1, initialState);
  })
});

describe('renders data', () => {
  rendersNodeWithExactText(CurrentWeather, 'Garliava, LT', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '2019 Jul 1 7:20', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '+21°', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '+221° C ... +121° C', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '413 mm', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '68%', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '1006 mbar', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, 'W, 5.1 m/s', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '777', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '4:50', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '22:05', 1, stateAfterSuccesfullDataFetchingMock);
  rendersNodeWithExactText(CurrentWeather, '17:14', 1, stateAfterSuccesfullDataFetchingMock);
});