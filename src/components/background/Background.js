import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import matchImageToWeatherCondition from './matchImageToWeatherCondition';

/**
 * About component
 * 
 * This hole compicated setup is needed to prevent flicked when src changes.
 * 
 * With current setup, src of one image remains the same on props changes.
 * Which on stays the same is toogled on every update.
 */
class Background extends Component {
  constructor(props) {
    super(props);

    this.img_1_Ref = createRef();
    this.img_2_Ref = createRef();

    this.img_1_src = matchImageToWeatherCondition(this.props.conditionCodeOpenWeather);
    this.img_2_src = '';

    this.currnetImgCssClass = 'backgroundImg-fade-in';
    this.previousImgCssClass = 'backgroundImg-fade-out';

    this.img_1_css_class = this.currnetImgCssClass;
    this.img_2_css_class = this.previousImgCssClass;
  }

  componentDidMount() {
    // initially img_1 is "current"
    this.currnetImg = this.img_1_Ref;
    this.previousImg = this.img_2_Ref;
  }

  componentWillUpdate(nextProps) {
    // toggle 1 of 2 images to be current
    if (this.currnetImg === this.img_1_Ref) {
      this.currnetImg = this.img_2_Ref;
      this.previousImg = this.img_1_Ref;
    } else {
      this.currnetImg = this.img_1_Ref;
      this.previousImg = this.img_2_Ref;
    }

    // "New" current image gets new src & and classes gets swaped
    if (this.currnetImg === this.img_1_Ref) {
      this.img_1_src = matchImageToWeatherCondition(nextProps.conditionCodeOpenWeather);

      this.img_1_css_class = this.currnetImgCssClass;
      this.img_2_css_class = this.previousImgCssClass;
    } else {
      this.img_2_src = matchImageToWeatherCondition(nextProps.conditionCodeOpenWeather);

      this.img_1_css_class = this.previousImgCssClass;
      this.img_2_css_class = this.currnetImgCssClass;
    }
  }

  onLoad = () => {
    // reset animations when "new" current image loads
    
    this.img_1_Ref.current.style.animation = 'none';
    var notForUse1 = this.img_1_Ref.current.offsetHeight; // to trigger reflow
    this.img_1_Ref.current.style.animation = null;

    this.img_2_Ref.current.style.animation = 'none';
    var notForUse2 = this.img_2_Ref.current.offsetHeight; // to trigger reflow
    this.img_2_Ref.current.style.animation = null;
  }

  render() {
    // dummy to initiate prop update
    this.dummy =this.props.conditionCodeOpenWeather;

    return (
      <div className="weather-background" >
        <img
          className={`img-fit weather-background ${this.img_1_css_class}`} 
          src={this.img_1_src}
          alt=""
          ref={this.img_1_Ref}
          dummy={this.dummy}
          onLoad={this.onLoad}
        />
        <img 
          className={`img-fit weather-background ${this.img_2_css_class}`} 
          src={this.img_2_src}
          alt="" 
          ref={this.img_2_Ref}
          onLoad={this.onLoad}
        />
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