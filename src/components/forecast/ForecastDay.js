import React from 'react';
import { connect } from 'react-redux';

import ForecastEntry from './ForecastEntry';

const uuidv4 = require('uuid/v4');

function ForecastDay(props) {  
  let entries;
  if (props.dataList) {
    entries = props.dataList.slice(0, 8).map(data =>
      <ForecastEntry 
        key={uuidv4()} 
        weatherData={{
          ...data,
          timeZone: props.timeZone,
          toCelsius: props.toCelsius
        }}
        dateFormat={'MDDHHMM'}
      />);
  } else {
    entries = '';
  }

  return (
    <div className="hourly">
      <h3 className="weather-table__title">Upcoming hours:</h3>
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

export default connect(mapStateToProps)(ForecastDay);
