import React from 'react';
import { connect } from 'react-redux';

import ForecastEntry from './ForecastEntry';
import prepContent from './prepContent';

function ForecastDay(props) {
  const prepEntries = dataList => {
    return props.dataList.slice(0, 8).map(data =>
      <ForecastEntry
        key={data.timeText}
        weatherData={{
          ...data,
          timeZone: props.timeZone,
          toCelsius: props.toCelsius
        }}
        dateFormat={'MDDHHMM'}
      />);
  }

  return (
    <div className="hourly">
      <h3 className="weather-table__title">Upcoming hours:</h3>
      <div className="weather-table">
        {prepContent(props.dataList, prepEntries)}
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
