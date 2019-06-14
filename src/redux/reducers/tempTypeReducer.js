import {
  SET_TEMP_TYPE_CELSIUS,
  SET_TEMP_TYPE_FAHRENHEIT,
} from '../actions/types';

export default (state = { toCelsius: true}, action) => {
  switch (action.type) {
    case SET_TEMP_TYPE_CELSIUS:
      return { toCelsius: true }
    case SET_TEMP_TYPE_FAHRENHEIT:
      return { toCelsius: false }
    default: return state;
  }
}