import {
  FETCHING_DATA,
  ERROR_FETCH_COORDINATES,
} from '../actions/types';

const initialState = {
  fetchingData: false,
  fetchCoordinatesErrorStatus: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {...state, fetchingData: action.payload };
    case ERROR_FETCH_COORDINATES:
      return {...state, fetchCoordinatesErrorStatus: action.payload};
    default: return state;
  }
}