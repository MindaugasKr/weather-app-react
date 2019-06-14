import {
  FETCHING_DATA,
} from '../actions/types';

export default (state = {fetchingData: false}, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {fetchingData: action.payload };
    default: return state;
  }
}