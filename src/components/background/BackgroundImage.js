import React, { Component, createRef } from 'react';

/**
 * Purpose of BackgroundImage is to:
 *    toogle values to be either current (fade in) or previous img (fade out)
 */
export default class BackgroundImage extends Component {
  imgRef = createRef();
  currentBackgroundImg = this.props.currentBackgroundImg;

  componentDidUpdate() {
    const img = this.imgRef.current;

    this.currentBackgroundImg = !this.currentBackgroundImg;

    if (this.currentBackgroundImg) {
      img.src = this.props.src;
      // Using toogle produces incorrect, unextected result.
      img.classList.add("backgroundImg-fade-in");
      img.classList.remove("backgroundImg-fade-out");
    } else {
      img.classList.add("backgroundImg-fade-out");
      img.classList.remove("backgroundImg-fade-in");
    }
  }

  // Triggers css animations to start
  onLoad = (img) => {
    img.style.animation = 'none';
    const none = img.offsetHeight;
    img.style.animation = null;
  }

  render() {
    return (
      <img
        ref={this.imgRef}
        className={`img-fit weather-background`}
        alt=""
        onLoad={() => this.onLoad(this.imgRef.current)}
        data-test='component-background-image'
      />
    )
  }
}