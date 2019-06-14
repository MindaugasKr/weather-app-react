function solveFall(data) {
  let fall = null;

  if (data.rain) {
    if (data.rain["1h"]) {
      fall = data.rain["1h"];
    } else if (data.rain["3h"]) {
      fall = data.rain["3h"];
    } else {
      fall = undefined;
    }
  } else if (data.snow) {
    if (data.snow["1h"]) {
      fall = data.snow["1h"];
    } else if (data.snow["3h"]) {
      fall = data.snow["3h"];
    } else {
      fall = undefined;
    }
  } else {
    fall = undefined;
  }

  return fall;
}

export default function openweathermapAdapter(data) {
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

    fall: solveFall(data),

    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,

    windDeg: data.wind.deg,
    windSpeed: data.wind.speed, // m/s

    conditionCodeOpenWeather: data.weather[0].id,
  }
}