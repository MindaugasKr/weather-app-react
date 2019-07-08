import React from 'react';
import loadingIndicator from '../../images/loader/loading_indicator.png';

export default () => {
  return (
    <img
      className={`search__loading-indicator`}
      alt=""
      src={loadingIndicator}
      data-testid='loading-indicator'
    />
  );
}