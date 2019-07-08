import React from 'react';

import {
  renderDate,
  renderDayLength,
} from '../../utils/renderWeatherData';

export default props => {
  const { sunrise, sunset } = props.weatherData;
  const timeZone = props.timeZone;

  const formattedSunrise = renderDate(sunrise, 'HHMM', timeZone);
  const formattedSunset = renderDate(sunset, 'HHMM', timeZone);
  const formattedDayLength = renderDayLength(sunrise, sunset);

  return (
    <div className="current__info-block" data-testid='InfoDay'>
      <h3>Day info:</h3>

      <span className="current__info-text">
        <strong>Sun rise:</strong> {formattedSunrise}
      </span>

      <span className="current__info-text">
        <strong>Sun set:</strong> {formattedSunset}
      </span>

      <span className="current__info-text">
        <strong>Day length:</strong> {formattedDayLength}
      </span>
      
    </div>
  )
}