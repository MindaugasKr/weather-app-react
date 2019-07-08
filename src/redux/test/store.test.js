// import moxios from 'moxios';
import axios from 'axios';
import MockAdapter  from 'axios-mock-adapter';

import configureStore from '../../configureStore';
import {
  FETCHING_DATA,
} from '../actions/types';
import {
  fetchWeatherData,
  changeTempType,
  histoyStateToCurrentState,
  changeFetchCoordinatesErrorStatus,
} from '../actions';
import { initialStateMock, stateAfterSuccesfullDataFetchingMock, stateAfterFailedAllDataFetchesMock } from '../../test/stateMocks';

test('initial state', () => {
  const store = configureStore();
  expect(store.getState()).toEqual(initialStateMock);
})

const testIfStateEqualTo = (action, expectedState) => {
  const store = configureStore();
  store.dispatch(action);
  expect(store.getState()).toEqual(expectedState);
}

describe('Redux actions', () => {
  test('setting temp type to celsius', () => {
    const value = false;
    const expectedState = { ...initialStateMock, settings: { toCelsius: value } };
    testIfStateEqualTo(changeTempType(value), expectedState);
  });
  test('setting temp type to fahrenheit', () => {
    const value = false;
    const expectedState = { ...initialStateMock, settings: { toCelsius: value } };
    testIfStateEqualTo(changeTempType(value), expectedState);
  });
  test('changing to different state, simulating history restore', () => {
    testIfStateEqualTo(histoyStateToCurrentState(stateAfterSuccesfullDataFetchingMock.weatherData), stateAfterSuccesfullDataFetchingMock);
  });
  test('error fetching data', () => {
    const value = true;
    const expectedState = { ...initialStateMock };
    expectedState.appState = { ...expectedState.appState, fetchCoordinatesErrorStatus: value};
    testIfStateEqualTo(changeFetchCoordinatesErrorStatus(value), expectedState);
  });

  test('fetching data, idicates ongoing process', () => {
    const expectedState = { ...initialStateMock };
    expectedState.appState = { ...expectedState.appState, fetchingData: true };
    const action = {
      type: FETCHING_DATA,
      payload: true,
    }
    testIfStateEqualTo(action, expectedState);
  });

  describe('fetch data', () => {
    let store;
    const currentLocationResponse = {
      latitude: 54.687211111,
      longitude: 25.279711111,
    };
    const currentResponse = {
      "coord": {
        "lon": 23.88,
        "lat": 54.83
      },
      "weather": [{
        "id": 804,
        "icon": "04d"
      }],
      "main": {
        "temp": 99999.15,
        "pressure": 1004,
        "humidity": 82,
        "temp_min": 288.15,
        "temp_max": 288.15
      },
      "wind": {
        "speed": 5.1,
        "deg": 270
      },
      "dt": 1562607080,
      "sys": {
        "country": "LT",
        "sunrise": 1562551040,
        "sunset": 1562612473
      },
      "timezone": 10800,
      "name": "Garliava",
    }
    const uvResponse = { "value": 777777 };

    const expectedSuccesfullState = {
      weatherData: {
        currentWeatherData: expect.objectContaining({
          temp: 99999.15,
        }),
        uvIndex: uvResponse['value'],
        weatherForecastData: expect.arrayContaining([
          expect.any(Object),
          expect.any(Object),
          expect.any(Object),
        ]),
      },
      appState: {
        fetchingData: false,
        fetchCoordinatesErrorStatus: false,
      },
      settings: {
        toCelsius: true,
      },
    };
    const placeGeocodingResponse = [{
      lat: 54.687211111,
      lon: 25.279711111,
    }];
    beforeEach(() => {
      store = configureStore();
    })
    test('succesfull', async () => {
      const mock = new MockAdapter(axios);
      mock
        .onGet(/locationiq/).reply(200, placeGeocodingResponse)
        .onGet(/openweathermap.org\/data\/2\.5\/weather/).reply(200, currentResponse)
        .onGet(/openweathermap.org\/data\/2\.5\/uvi/).reply(200, uvResponse)
        .onGet(/openweathermap.org\/data\/2\.5\/forecast/).reply(200, {
          list: [
            currentResponse,
            currentResponse,
            currentResponse,
          ]
        });

      await store.dispatch(fetchWeatherData('kaunas'));
      expect(store.getState()).toMatchObject(expectedSuccesfullState);
    });
    test('failed', async () => {
      const mock = new MockAdapter(axios);
      mock
        .onGet(/locationiq/).reply(200, placeGeocodingResponse)
        .onGet(/openweathermap.org\/data\/2\.5\/weather/).reply(400, null)
        .onGet(/openweathermap.org\/data\/2\.5\/uvi/).reply(400, null)
        .onGet(/openweathermap.org\/data\/2\.5\/forecast/).reply(400, null)

      await store.dispatch(fetchWeatherData('kaunas'));
      expect(store.getState()).toMatchObject(stateAfterFailedAllDataFetchesMock);
    });
    test('failed to retrieve coordinates', async () => {
      const mock = new MockAdapter(axios);
      mock
        .onGet(/locationiq/).reply(400, null)

      await store.dispatch(fetchWeatherData('kaunas'));
      expect(store.getState()).toEqual({
        ...initialStateMock, appState: { fetchingData: false, fetchCoordinatesErrorStatus: true }
      });
    });
    test('query not provided', async () => {
      const mock = new MockAdapter(axios);
      mock
        .onGet(/ipgeolocation/).reply(200, currentLocationResponse)
        .onGet(/openweathermap.org\/data\/2\.5\/weather/).reply(200, currentResponse)
        .onGet(/openweathermap.org\/data\/2\.5\/uvi/).reply(200, uvResponse)
        .onGet(/openweathermap.org\/data\/2\.5\/forecast/).reply(200, {
          list: [
            currentResponse,
            currentResponse,
            currentResponse,
          ]
        });

      await store.dispatch(fetchWeatherData());
      expect(store.getState()).toMatchObject(expectedSuccesfullState);
    });
  });
});