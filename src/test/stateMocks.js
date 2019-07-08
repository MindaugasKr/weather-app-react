// Mocks are tied to state implementation.
// Changing state structure would require to change mocks.
// Current values are used in testing. Changing values would require to update expected test results.

export const initialStateMock = {
  weatherData: {
    currentWeatherData: {},
    uvIndex: '',
    weatherForecastData: [],
  },
  appState: {
    fetchingData: false,
    fetchCoordinatesErrorStatus: false,
  },
  settings: {
    toCelsius: true,
  },
}

const mockCurrentState = {
  country: "LT",
  city: "Garliava",
  time: 1561958410,
  icon: "http://openweathermap.org/img/w/01d.png",
  temp: 294.15,
  tempMax: 394.15,
  tempMin: 494.15,
  pressure: 1006,
  humidity: 68,
  sunrise: 1561945850,
  sunset: 1562007922,
  windDeg: 270,
  windSpeed: 5.1,
  conditionCodeOpenWeather: 800,
  precipitation: 413,
}

const mockForecastEntry = {
  time: 1561960800,
  timeText: "2019-07-01 06:00:00",
  icon: "http://openweathermap.org/img/w/04d.png",
  temp: 594.15,
  tempMax: 694.11,
  tempMin: 793.613,
  pressure: 1006.88,
  humidity: 69,
  windDeg: 267.401,
  windSpeed: 6.2,
  conditionCodeOpenWeather: 803,
  precipitation: 213,
}

export const stateAfterSuccesfullDataFetchingMock = {
  ...initialStateMock,
  weatherData: {
    currentWeatherData: {
      ...mockCurrentState,
    },
    uvIndex: 777,
    weatherForecastData: [
      { ...mockForecastEntry, timeText: "2019-07-01 06:00:00"},
      { ...mockForecastEntry, timeText: "2019-07-01 09:00:00"},
      { ...mockForecastEntry, timeText: "2019-07-01 12:00:00"},
      { ...mockForecastEntry, timeText: "2019-07-01 15:00:00"},
      { ...mockForecastEntry, timeText: "2019-07-01 18:00:00"},
      { ...mockForecastEntry, timeText: "2019-07-01 21:00:00"},
      { ...mockForecastEntry, timeText: "2019-07-01 00:00:00"},
      { ...mockForecastEntry, timeText: "2019-07-01 03:00:00"},

      { ...mockForecastEntry, timeText: "2019-07-02 06:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-02 09:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-02 12:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-02 15:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-02 18:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-02 21:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-02 00:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-02 03:00:00" },

      { ...mockForecastEntry, timeText: "2019-07-03 06:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-03 09:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-03 12:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-03 15:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-03 18:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-03 21:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-03 00:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-03 03:00:00" },

      { ...mockForecastEntry, timeText: "2019-07-04 06:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-04 09:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-04 12:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-04 15:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-04 18:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-04 21:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-04 00:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-04 03:00:00" },

      { ...mockForecastEntry, timeText: "2019-07-05 06:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-05 09:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-05 12:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-05 15:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-05 18:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-05 21:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-05 00:00:00" },
      { ...mockForecastEntry, timeText: "2019-07-05 03:00:00" },
    ],
    timeZone: 'Europe/Vilnius',
  },
}

export const stateAfterFailedAllDataFetchesMock = {
  ...initialStateMock,
  weatherData: {
    currentWeatherData: { failedToRetrieveData: true },
    uvIndex: undefined,
    weatherForecastData: null,
  },
  appState: {
    fetchCoordinatesErrorStatus: false,
  },
}

export const stateDuringDataFetchMock = {
  ...initialStateMock,
  appState: {
    fetchingData: true,
  },
}