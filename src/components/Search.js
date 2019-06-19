import React, { createRef, useEffect } from 'react';
import { connect } from 'react-redux';

import autosugestPlaces from '../apis/autosugestPlaces';
import { fetchWeatherData, changeFetchCoordinatesErrorStatus } from '../redux/actions';

import loadingIndicator from '../images/loader/loading_indicator.png';
import ErrorFailedToFetchGeoCoding from './error/ErrorFailedToFetchGeoCoding';

const inputRef = createRef();
var placeAutocomplete;

const Search = (props) => {  
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

  const onDataFetching = () => {
    return <img className="search__loading-indicator" alt="" src={loadingIndicator} />;
  }

  const onErrorDismiss = () => {
    props.changeFetchCoordinatesErrorStatus(false);
  }

  return (
    <div className="search relative">
      {props.fetchingData ? onDataFetching() : ''}
      <div>
        <input 
          className="search__text-input" 
          type="text" 
          placeholder="Location search..." 
          ref={inputRef}
          onKeyDown={onEnterKeyDown}
        />
        <button 
          className="search__btn"
          onClick={onSubmit}
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

export default connect(mapStateToProps, { fetchWeatherData, changeFetchCoordinatesErrorStatus})(Search);