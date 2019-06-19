import React from 'react';
import ErrorContainer from './ErrorContainer';

const ErrorFailedToFetchForecast = () => {
  const message = 'Failed to retrieve weather forecast.';
  return <ErrorContainer message={message} />
}

export default ErrorFailedToFetchForecast;