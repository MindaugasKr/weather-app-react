import React from 'react';
import { connect } from 'react-redux';

import UnitButton from './UnitButton';
import InfoLocatioAndDate from './InfoLocatioAndDate';
import InfoCurrentTemp from './InfoCurrentTemp';
import InfoWeather from './InfoWeather';
import InfoDay from './InfoDay';

import ErrorFailedToFetchCurrent from '../error/ErrorFailedToFetchCurrent';

const CurrentWeather = props => {
  return (
    <div className="relative" data-testid="component-current-weather">
      <div className="current relative">
        <div className="unit__container">
          <UnitButton 
            {...props} 
            isCelsius={true} 
            dataTestid='btn-celsius'
          >
            C
          </UnitButton>
          <UnitButton 
            {...props} 
            isCelsius={false} 
            dataTestid='btn-fahrenheit'
          >
          F
          </UnitButton>
        </div>

        {props.weatherData.failedToRetrieveData ? 
          <ErrorFailedToFetchCurrent />
          :
          <>
            <InfoLocatioAndDate {...props} />
            <div className="current__info-container">
              <InfoCurrentTemp {...props} />
              <InfoWeather {...props} />
              <InfoDay {...props} />
            </div>
          </>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    toCelsius: state.settings.toCelsius,
    weatherData: state.weatherData.currentWeatherData,
    timeZone: state.weatherData.timeZone,
    uvIndex: state.weatherData.uvIndex,
  }
}

export default connect(mapStateToProps)(CurrentWeather);