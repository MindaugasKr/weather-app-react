import React from 'react';

const baseContainerCss = 'error ';
const baseMessageCss = 'error__message ';

export default props => {
  const containerCss = baseContainerCss + (props.aditionalContainerCSS || '');
  const messageCss = baseMessageCss + (props.aditionalMessageCSS || '');

  return (
    <div className={containerCss} data-testid='ErrorContainer'>
      <span className={messageCss} >
        {props.children}
      </span>
    </div>
  );
}