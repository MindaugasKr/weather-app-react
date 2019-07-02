import React from 'react';
import { connect } from 'react-redux';

import ForecastEntry from './ForecastEntry';
import ErrorFailedToFetchForecast from '../error/ErrorFailedToFetchForecast';

const prepareEntries = ({ type, dataList, timeZone, toCelsius, dateFormat }) => {
  const selectedData = type === 'hourly' ?
    dataList.slice(0, 8) :
    dataList.filter(data => data.timeText.includes('09:00:00'));

  return selectedData.map(data =>
    <ForecastEntry
      key={data.timeText}
      weatherData={{
        ...data,
        timeZone: timeZone,
        toCelsius: toCelsius
      }}
      dateFormat={dateFormat}
    />
  );
}


const decideContent = (dataList, callback) =>
  dataList ?
    callback() :
    dataList === null ? <ErrorFailedToFetchForecast /> : '';


const Forecast = props => {
  return (
    <div className={props.containerCSS} data-test="component-forecast">
      <h3 className="weather-table__title">{props.title}</h3>
      <div className="weather-table">
        {decideContent(props.dataList, () => prepareEntries(props))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dataList: state.weatherData.weatherForecastData,
    timeZone: state.weatherData.timeZone,
    toCelsius: state.settings.toCelsius,
  }
}

export default connect(mapStateToProps)(Forecast);
