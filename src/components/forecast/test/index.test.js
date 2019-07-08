import React from 'react';
import { Provider } from 'react-redux';

import {
  render,
  cleanup,
} from '@testing-library/react';

import {
  storeFactory,
  createRender,
} from 'testUtils';

import {
  rendersNodeWithDataTestId,
} from 'genericTests';

import {
  initialStateMock,
  stateAfterSuccesfullDataFetchingMock,
  stateAfterFailedAllDataFetchesMock,
} from 'stateMocks';

import {
  FETCH_WEATHER_DATA,
} from '../../../redux/actions/types';

import Forecast from '../';

beforeEach(() => {
  cleanup();
});

const props = { type: 'hourly' };

describe('Renders', () => {
  describe('with initial state', () => {
    rendersNodeWithDataTestId(Forecast, 'component-forecast', 1, initialStateMock);
  });
  describe('error component with error state', () => {
    rendersNodeWithDataTestId(Forecast, 'ErrorContainer', 1, stateAfterFailedAllDataFetchesMock);
  });
  describe('entry components with data, type: hourly', () => {
    rendersNodeWithDataTestId(Forecast, 'forecast-entry', 8, stateAfterSuccesfullDataFetchingMock, props);
  });
  describe('entry components with data, type: hourly weekly', () => {
    rendersNodeWithDataTestId(Forecast, 'forecast-entry', 5, stateAfterSuccesfullDataFetchingMock);
  });
  describe('no entries when error', () => {
    rendersNodeWithDataTestId(Forecast, 'forecast-entry', 0, stateAfterFailedAllDataFetchesMock, props);
  });
  test('no entries when first data fetch is succesfull but second fails', () => {
    const store = storeFactory(stateAfterSuccesfullDataFetchingMock);
    const qs = render(<Provider store={store}><Forecast {...props} /></Provider>);

    // Test if entries renders before testing if they don't render.
    let nodes = qs.queryAllByTestId('forecast-entry');
    expect(nodes.length).toBe(8);

    // Dispatch data that would be dispatched if all data fetch requests failed.
    const data = {
      currentWeatherData: { failedToRetrieveData: true },
      uvIndex: undefined,
      weatherForecastData: null,
    };
    store.dispatch({
      type: FETCH_WEATHER_DATA,
      payload: data,
    });

    nodes = qs.queryAllByTestId('forecast-entry');
    expect(nodes.length).toBe(0);
  });
});

describe('Renders entries with correct data', () => {
  const doAssertions = (qs, hourly) => {
    let nodes;
    if (hourly) {
      nodes = qs.queryAllByText('9:00');
      expect(nodes.length).toBeGreaterThanOrEqual(1);
    } else {
      nodes = qs.queryAllByText('Jul 1');
      expect(nodes.length).toBeGreaterThanOrEqual(1);
    }

    nodes = qs.queryAllByText('+321° C');
    expect(nodes.length).toBeGreaterThanOrEqual(1);

    nodes = qs.queryAllByText('213 mm');
    expect(nodes.length).toBeGreaterThanOrEqual(1);

    nodes = qs.queryAllByText('W');
    expect(nodes.length).toBeGreaterThanOrEqual(1);

    nodes = qs.queryAllByText('6.2 m/s');
    expect(nodes.length).toBeGreaterThanOrEqual(1);
  }
  test('type: hourly', () => {
    const qs = createRender(Forecast, stateAfterSuccesfullDataFetchingMock, { ...props, dateFormat: 'HHMM'});
    doAssertions(qs, true);
  });
  test('type: hourly', () => {
    const qs = createRender(Forecast, stateAfterSuccesfullDataFetchingMock, { dateFormat: 'MDD'});
    doAssertions(qs, false);
  });
});