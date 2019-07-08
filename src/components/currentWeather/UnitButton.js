import React from 'react';
import { connect } from 'react-redux';

import { changeTempType } from '../../redux/actions';

const UnitButton = props => {
  const onClick = () => {
    props.changeTempType(props.isCelsius);
  }

  const cssClasses = `unit__btn  ${(props.isCelsius === props.toCelsius) ? 'unit__btn--active' : ''}`;

  return (
    <button 
      onClick={onClick} 
      className={cssClasses} 
      data-testid={props.dataTestid}
    >
      {props.children}
    </button>
  )
}

const mapStateToProps = (state) => {
  return {
    toCelsius: state.settings.toCelsius,
  }
}

export default connect(mapStateToProps, { changeTempType})(UnitButton);
