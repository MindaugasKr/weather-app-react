import React from 'react';

import {
  renderDate,
  renderTemp,
  renderFall,
  renderWindDirection,
  renderWindSpeed,
} from '../../utils/renderWeatherData';

const ForecastEntry = (props) => {
  const toCelsius = props.weatherData.toCelsius;
  const timeZone = props.weatherData.timeZone;
  const { temp, fall, windDeg, windSpeed, icon, time } = props.weatherData;
  const dateFormat = props.dateFormat;

  const formattedDate = renderDate(time, dateFormat, timeZone)
  const formattedTemp = renderTemp(temp, toCelsius);
  const formattedFall = renderFall(fall);
  const formattedWindDirection = renderWindDirection(windDeg);
  const formattedWindSpeed = renderWindSpeed(windSpeed);

  return (
    <div className="weather-table__info-block">

      <span className="weather-table__info-text  weather-table__info-text--strong">
        {formattedDate}
      </span>

      <span className="weather-table__info-text">
        <img className="" src={icon} alt=""/>
      </span>

      <span className="weather-table__info-text  weather-table__info-text--strong">
        {formattedTemp}
      </span>

      <span className="weather-table__info-text">
        {formattedFall}
      </span>

      <span className="weather-table__info-text">
        {formattedWindDirection}
      </span>

      <span className="weather-table__info-text">
        {formattedWindSpeed}
      </span>

    </div>
  )
}

export default ForecastEntry;