import React from 'react';
import { connect } from 'react-redux';

import { changeTempType } from '../../redux/actions';

function UnitButton(props) {
  const onClick = () => {
    props.changeTempType(props.isCelsius);
  }

  return (
    <button onClick={onClick} className={`unit__btn  ${(props.isCelsius === props.toCelsius) ? 'unit__btn--active' : '' }`}>
      {props.children}
    </button>
  )
}

const mapStateToProps = (state) => {
  return {
    toCelsius: state.tempType.toCelsius,
  }
}

export default connect(mapStateToProps, { changeTempType})(UnitButton);
