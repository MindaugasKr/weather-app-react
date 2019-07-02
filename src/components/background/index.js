import React, { Component } from 'react';
import { connect } from 'react-redux';

import BackgroundImage from './BackgroundImage';
import matchImageToWeatherCondition from './matchImageToWeatherCondition';

/**
 * Purpose of Background component is to:
 *    set up initial values for BackgroundImage
 *    trigger update on BackgroundImage
 */
class Background extends Component {
  render() {
    const src = matchImageToWeatherCondition(this.props.conditionCodeOpenWeather);
    return (
      <div className="weather-background" data-test="component-background" >
        <BackgroundImage currentBackgroundImg={true} src={src} data-test="child-background-img" />
        <BackgroundImage currentBackgroundImg={false} src={src} data-test="child-background-img" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    conditionCodeOpenWeather: state.weatherData.currentWeatherData.conditionCodeOpenWeather,
  }
}

export default connect(mapStateToProps)(Background);