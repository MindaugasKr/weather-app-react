// Only current weather responce mock since forecast is mostly the same.
export default {
  data: {
    base: "stations",
    clouds: {
      all: 0
    },
    cod: 200,
    coord: {
      lon: 23.88,
      lat: 54.83
    },
    dt: 1562411495,
    id: 599504,
    main: {
      humidity: 40,
      pressure: 1004,
      temp: 293.15,
      temp_max: 393.15,
      temp_min: 193.15,
    },
    name: "Garliava",
    sys: {
      country: "LT",
      id: 1880,
      message: 0.0066,
      sunrise: 1562378114,
      sunset: 1562439762,
      type: 1,
    },
    timezone: 10800,
    visibility: 10000,
    weather: [{
      description: "clear sky",
      icon: "01d",
      id: 800,
      main: "Clear",
    }],
    wind: {
      deg: 260,
      speed: 7.7,
    },
  }
};


