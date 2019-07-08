import React from 'react';

import {
  renderTemp,
  renderPrecipitation,
  renderHumidity,
  renderPressure,
  renderWindDirection,
  renderWindSpeed,
  renderUvIndex,
} from '../../utils/renderWeatherData';

export default props => {
  const toCelsius = props.toCelsius;
  const {
    tempMax,
    tempMin,
    pressure,
    humidity,
    precipitation,
    windDeg,
    windSpeed 
  } = props.weatherData;
  const uvIndex = props.uvIndex;

  const formattedMinTemp = renderTemp(tempMin, toCelsius);
  const formattedMaxTemp = renderTemp(tempMax, toCelsius);
  const formattedPrecipitation = renderPrecipitation(precipitation);
  const formattedHumidity = renderHumidity(humidity);
  const formattedPressure = renderPressure(pressure);
  const formattedWindDirection = renderWindDirection(windDeg);
  const formattedWindSpeed = renderWindSpeed(windSpeed);
  const formattedUvIndex = renderUvIndex(uvIndex);

  return (
    <div className="current__info-block" data-testid='InfoWeather'>
      <h3>Weather conditions:</h3>

      <span className="current__info-text" data-testid='current-temp-min-max'>
        <strong>Temperature: </strong>
        {formattedMinTemp}{' ... '}{formattedMaxTemp}
      </span>

      <span className="current__info-text">
        <strong>Precipitation: </strong>
        {formattedPrecipitation}
      </span>

      <span className="current__info-text">
        <strong>Humidity: </strong>
        {formattedHumidity}
      </span>

      <span className="current__info-text">
        <strong>Presure: </strong>
        {formattedPressure}
      </span>

      <span className="current__info-text">
        <strong>Wind: </strong>
        {formattedWindDirection}, {formattedWindSpeed}
      </span>

      <span className="current__info-text">
        <strong>UV: </strong>
        {formattedUvIndex}
      </span>

    </div>
  )
}