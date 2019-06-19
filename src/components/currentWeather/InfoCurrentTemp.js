import React from 'react';

import { renderTemp } from '../../utils/renderWeatherData';

function InfoCurrentTemp(props) {
  const formattedTemp = renderTemp(props.weatherData.temp, props.toCelsius, false);

  return (
    <div className="current__info-block">
      <div className="current__img-container">
        <img className="current__img  v-center" src={props.weatherData.icon} alt=""/>
      </div>
      <span className="current__temperature">
        {formattedTemp}
      </span>
    </div>
  )
}

export default InfoCurrentTemp;
