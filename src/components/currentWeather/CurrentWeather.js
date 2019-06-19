import React from 'react';
import { connect } from 'react-redux';

import UnitButton from './UnitButton';
import InfoLocatioAndDate from './InfoLocatioAndDate';
import InfoCurrentTemp from './InfoCurrentTemp';
import InfoWeather from './InfoWeather';
import InfoDay from './InfoDay';

import ErrorFailedToFetchCurrent from '../error/ErrorFailedToFetchCurrent';

const CurrentWeather = props => {

  const prepContent = () => {
    if (props.weatherData.failedToRetrieveData) {
      return <ErrorFailedToFetchCurrent />;
    } else {
      return (
        <>
          <InfoLocatioAndDate {...props} />

          <div className="current__info-container">
            <InfoCurrentTemp {...props} />
            <InfoWeather {...props} />
            <InfoDay {...props} />
          </div>
        </>
      );
    }
  }

  return (
    <div className="relative">
      <div className="current relative">
        <div className="unit__container">
          <UnitButton {...props} isCelsius={true} >C</UnitButton>
          <UnitButton {...props} isCelsius={false} >F</UnitButton>
        </div>

        {prepContent()}

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    toCelsius: state.tempType.toCelsius,
    weatherData: state.weatherData.currentWeatherData,
    timeZone: state.weatherData.timeZone,
    uvIndex: state.weatherData.uvIndex,
  }
}

export default connect(mapStateToProps)(CurrentWeather);