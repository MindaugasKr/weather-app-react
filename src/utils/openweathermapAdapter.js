function getPrecipitation(data) {
  let type;

  if (data.rain) {
    type = 'rain';
  } else if (data.snow) {
    type = 'snow';
  } else {
    return undefined;
  }

  if (data[type]['1h']) {
    return data[type]['1h'];
  } else if (data[type]['3h']) {
    return data[type]['3h'];
  } else {
    return undefined;
  }
}

export default data => {
  return {
    country: data.sys.country,
    city: data.name,
    time: data.dt, // unix, UTC
    timeText: data.dt_txt,

    icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,

    temp: data.main.temp, // K
    tempMax: data.main.temp_max, // K
    tempMin: data.main.temp_min, // K
    pressure: data.main.pressure, // hPa
    humidity: data.main.humidity, // %

    precipitation: getPrecipitation(data),

    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,

    windDeg: data.wind.deg,
    windSpeed: data.wind.speed, // m/s

    conditionCodeOpenWeather: data.weather[0].id,
  }
}