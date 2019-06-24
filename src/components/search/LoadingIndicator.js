import React from 'react';
import loadingIndicator from '../../images/loader/loading_indicator.png';

export default (props) => {
  return (
    <img
      className={`search__loading-indicator ${props.shouldDisplay ? '' : 'hide'}`}
      alt=""
      src={loadingIndicator}
    />
  );
}