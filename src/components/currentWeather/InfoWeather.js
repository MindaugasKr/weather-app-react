import React from 'react';
import { connect } from 'react-redux';

import {
  renderTemp,
  renderFall,
  renderHumidity,
  renderPressure,
  renderWindDirection,
  renderWindSpeed,
  renderUvIndex,
} from '../../utils/renderWeatherData';

function InfoWeather(props) {
  const toCelsius = props.toCelsius;
  const { tempMax, tempMin, pressure, humidity, fall, windDeg, windSpeed } = props.weatherData;
  const uvIndex = props.uvIndex;

  const formattedMinTemp = renderTemp(tempMin, toCelsius);
  const formattedMaxTemp = renderTemp(tempMax, toCelsius);
  const formattedFall = renderFall(fall);
  const formattedHumidity = renderHumidity(humidity);
  const formattedPressure = renderPressure(pressure);
  const formattedWindDirection = renderWindDirection(windDeg);
  const formattedWindSpeed = renderWindSpeed(windSpeed);
  const formattedUvIndex = renderUvIndex(uvIndex);

  return (
    <div className="current__info-block">
      <h3>Weather conditions:</h3>

      <span className="current__info-text">
        <strong>Temperature:</strong>
        {formattedMinTemp}{' ... '}{formattedMaxTemp}
      </span>

      <span className="current__info-text"><strong>Rain fall:</strong> {formattedFall}</span>

      <span className="current__info-text"><strong>Humidity:</strong> {formattedHumidity}</span>

      <span className="current__info-text"><strong>Presure:</strong> {formattedPressure}</span>

      <span className="current__info-text"><strong>Wind:</strong> {formattedWindDirection}, {formattedWindSpeed}</span>

      <span className="current__info-text"><strong>UV:</strong> {formattedUvIndex}</span>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    toCelsius: state.tempType.toCelsius,
    weatherData: state.weatherData.currentWeatherData,
    uvIndex: state.weatherData.uvIndex,
  }
}

export default connect(mapStateToProps)(InfoWeather);