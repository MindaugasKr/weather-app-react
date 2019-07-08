import React from 'react';
import { Provider } from 'react-redux';

import {
  render,
  cleanup,
} from '@testing-library/react';

import {
  FETCH_WEATHER_DATA,
} from '../../../redux/actions/types';

import {
  storeFactory,
} from 'testUtils';

import {
  rendersNodeWithDataTestId,
} from 'genericTests';

import {
  initialStateMock,
} from 'stateMocks';

import Background from '../';

afterEach(() => {
  cleanup();
})

describe('renders', () => {
  rendersNodeWithDataTestId(Background, 'component-background', 1);
  rendersNodeWithDataTestId(Background, 'component-background-image', 2);
});

describe('Background image', () => {
  let qs, store;
  beforeEach(() => {
    store = storeFactory(initialStateMock);
    qs = render(<Provider store={store}><Background /></Provider>);
  })

  test('Initially, no image is displayed, with weather code not provided', () => {
    expect(qs.getByTestId('component-background').querySelectorAll('[src=""]').length).toBe(2);
  });

  test('After receiving weather code for the first time, one img element displays image', () => {
    store.dispatch({
      type: FETCH_WEATHER_DATA,
      payload: { currentWeatherData: {conditionCodeOpenWeather: 800}},
    });
    expect(qs
      .getByTestId('component-background')
      .querySelectorAll('[src="nicholas-kampouris-97080-unsplash.jpg"]')
      .length)
      .toBeGreaterThanOrEqual(1);
  });

  test('After receiving weather code for the second time, at least one img element displays image', () => {
    store.dispatch({
      type: FETCH_WEATHER_DATA,
      payload: { currentWeatherData: { conditionCodeOpenWeather: 800 } },
    });
    store.dispatch({
      type: FETCH_WEATHER_DATA,
      payload: { currentWeatherData: { conditionCodeOpenWeather: 800 } },
    });
    expect(qs
      .getByTestId('component-background')
      .querySelectorAll('[src="nicholas-kampouris-97080-unsplash.jpg"]')
      .length)
      .toBeGreaterThanOrEqual(1);
  });
});
