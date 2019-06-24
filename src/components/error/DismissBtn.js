import React from 'react';

export default props => {
  return (
    <button className="error__dismissBtn" onClick={props.callback}>
      <i className="fas fa-times" />
    </button>
  );
}