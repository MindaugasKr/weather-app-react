import React from 'react';
import ErrorContainer from './ErrorContainer';
import DismissBtn from './DismissBtn';

export default props => (
  <ErrorContainer 
    aditionalContainerCSS=" h-center error--geocoding error--arrow" 
    aditionalMessageCSS=" error__message--geocoding error__message--pointer"
  >
    Failed to fetch location coordinates. <DismissBtn callback={props.onDismiss} />
  </ErrorContainer>
);