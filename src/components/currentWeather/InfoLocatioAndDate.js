import React from 'react';
import { connect } from 'react-redux';

import {
  renderDate,
} from '../../utils/renderWeatherData';

function InfoLocatioAndDate(props) {
  const { city, country, time } = props.weatherData;
  const timeZone = props.weatherData.timeZone;

  const formattedDate = renderDate(time, 'YYYYMDDHHMM', timeZone);

  return (
    <div className="current__location-time">
      <span className="current__location">{city}, {country}</span>
      <span className="current__time">{formattedDate}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData.currentWeatherData,
  }
}

export default connect(mapStateToProps)(InfoLocatioAndDate);