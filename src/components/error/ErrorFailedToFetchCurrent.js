import React from 'react';
import ErrorContainer from './ErrorContainer';

const ErrorFailedToFetchCurrent = () => {
  const message = 'Failed to retrieve current weather data.';
  return <ErrorContainer message={message} />
}

export default ErrorFailedToFetchCurrent;