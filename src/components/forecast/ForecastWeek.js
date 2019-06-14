import React from 'react';
import { connect } from 'react-redux';

import ForecastEntry from './ForecastEntry';

const uuidv4 = require('uuid/v4');

const Forecast = (props) => {
  let entries;
  if (props.dataList) {
    const filteredData = props.dataList.filter(data => {
      return data.timeText.includes('09:00:00');
    })
    entries = filteredData.map(data =>
      <ForecastEntry
        key={uuidv4()} 
        weatherData={{
          ...data, 
          timeZone: props.timeZone, 
          toCelsius: props.toCelsius 
        }} dateFormat={'MDD'} 
      />);
  } else {
    entries = '';
  }

  return (
    <div className="week">
      <h3 className="weather-table__title">Later this week:</h3>
      <div className="weather-table">
        {entries}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dataList: state.weatherData.weatherForecastData,
    timeZone: state.weatherData.timeZone,
    toCelsius: state.tempType.toCelsius,
  }
}

export default connect(mapStateToProps)(Forecast);