import React from 'react';

export default props => {
  return (
    <button 
      className="error__dismissBtn" 
      onClick={props.callback}
      data-testid='error-dismiss-btn'
    >
      <i className="fas fa-times" />
    </button>
  );
}