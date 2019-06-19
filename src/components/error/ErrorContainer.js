import React from 'react';

const errorContainer = props => {
  let containerCss = 'error';
  if (props.aditionalContainerCSS) containerCss += props.aditionalContainerCSS;

  let messageCss = 'error__message';
  if (props.aditionalMessageCSS) messageCss += props.aditionalMessageCSS;

  // Optional dismiss button, requires callback
  const dismissBtn = onDismiss => {
    if (onDismiss) {
      return (
        <button className="error__dismissBtn" onClick={onDismiss}>
          <i className="fas fa-times">
        </i></button>
      );
    } else {
      return '';
    }
  }

  return (
    <div className={containerCss} >
      <span className={messageCss} >
        {props.message} {dismissBtn(props.onDismiss)}
      </span>
    </div>
  )
}

export default errorContainer;