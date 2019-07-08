import React from 'react';

import { renderTemp } from '../../utils/renderWeatherData';

export default props => {
  const formattedTemp = renderTemp(props.weatherData.temp, props.toCelsius, false);

  return (
    <div className="current__info-block" data-testid='InfoCurrentTemp'>

      <div className="current__img-container">
        <img className="current__img  v-center" src={props.weatherData.icon} alt=""/>
      </div>

      <span className="current__temperature" data-testid='current-temp-main'>
        {formattedTemp}
      </span>

    </div>
  );
}