import React from 'react';
import { connect } from 'react-redux';

import {
  renderTemp,
} from '../../utils/renderWeatherData';

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

const mapStateToProps = (state) => {
  return {
    toCelsius: state.tempType.toCelsius,
    weatherData: state.weatherData.currentWeatherData,
  }
}

export default connect(mapStateToProps)(InfoCurrentTemp);
