import React from 'react';
import ErrorContainer from './ErrorContainer';

const ErrorFailedToFetchCurrent = props => {
  const message = 'Failed to fetch location coordinates.';
  return <ErrorContainer
            message={message} 
            aditionalContainerCSS=" h-center error--geocoding error--arrow" 
            aditionalMessageCSS=" error__message--geocoding error__message--pointer" 
            onDismiss={props.onDismiss}
          />
}

export default ErrorFailedToFetchCurrent;