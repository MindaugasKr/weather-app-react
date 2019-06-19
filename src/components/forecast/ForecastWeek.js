import React from 'react';
import { connect } from 'react-redux';

import ForecastEntry from './ForecastEntry';
import prepContent from './prepContent';

const Forecast = (props) => {

  const prepEntries = dataList => {
    const filteredData = props.dataList.filter(data => {
      return data.timeText.includes('09:00:00');
    })
    return filteredData.map(data =>
      <ForecastEntry
        key={data.timeText}
        weatherData={{
          ...data,
          timeZone: props.timeZone,
          toCelsius: props.toCelsius
        }} dateFormat={'MDD'}
      />);
  }

  return (
    <div className="week">
      <h3 className="weather-table__title">Later this week:</h3>
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

export default connect(mapStateToProps)(Forecast);