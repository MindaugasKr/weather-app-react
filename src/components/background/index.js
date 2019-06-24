import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import BackgroundImage from './BackgroundImage';
import matchImageToWeatherCondition from './matchImageToWeatherCondition';

/**
 * Purpose of Background component is to:
 *    set up initial values for BackgroundImage
 *    trigger update on BackgroundImage
 */
class Background extends Component {
  constructor(props) {
    super(props);
    this.img_1_Ref = createRef();
    this.img_2_Ref = createRef();
  }

  componentDidMount() {
    this.img_1_Ref.current.currentBackgroundImg = true;
    this.img_2_Ref.current.currentBackgroundImg = false;
  }

  render() {
    const src = matchImageToWeatherCondition(this.props.conditionCodeOpenWeather);
    return (
      <div className="weather-background" >
        <BackgroundImage imgRef={this.img_1_Ref} src={src} />
        <BackgroundImage imgRef={this.img_2_Ref} src={src} />
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