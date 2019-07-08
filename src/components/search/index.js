import React, { createRef, useEffect } from 'react';
import { connect } from 'react-redux';

import autosugestPlaces from '../../apis/autosugestPlaces';
import { fetchWeatherData, changeFetchCoordinatesErrorStatus } from '../../redux/actions';

import LoadingIndicator from './LoadingIndicator';
import ErrorFailedToFetchGeoCoding from '../error/ErrorFailedToFetchGeoCoding';

const inputRef = createRef();
var placeAutocomplete;

export const UnconnectedSearch = (props) => {  
  useEffect(() => {
    placeAutocomplete = autosugestPlaces(inputRef.current);
  }, [])

  const onSubmit = (e) => {
    const query = inputRef.current.value;
    if (query) {
      props.fetchWeatherData(query);
      placeAutocomplete.setVal('');
    }
  }

  const onEnterKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit(e);
    }
  }

  const onErrorDismiss = () => {
    props.changeFetchCoordinatesErrorStatus(false);
  }

  return (
    <div className="search relative" data-testid="component-search">
      {props.fetchingData ?
        <LoadingIndicator/> :
        ''
      }
      <div>
        <input 
          className="search__text-input" 
          type="text" 
          placeholder="Location search..." 
          ref={inputRef}
          onKeyDown={onEnterKeyDown}
          data-testid='search-input'
        />
        <button 
          className="search__btn"
          onClick={onSubmit}
          data-testid='search-btn'
        >
          <i className="fas fa-search" />
        </button>
      </div>

      {props.fetchCoordinatesErrorStatus ? <ErrorFailedToFetchGeoCoding onDismiss={onErrorDismiss} /> : ''}

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchingData: state.appState.fetchingData,
    fetchCoordinatesErrorStatus: state.appState.fetchCoordinatesErrorStatus,
  }
}

export default connect(mapStateToProps, { fetchWeatherData, changeFetchCoordinatesErrorStatus })(UnconnectedSearch);