import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Background from './background';
import Search from './search';
import CurrentWeather from './currentWeather';
import Forecast from './forecast';
import ErrorBoundary from './error/ErrorBoundary';

import { fetchWeatherData, histoyStateToCurrentState } from '../redux/actions';

import history from '../history';

class App extends Component {
  constructor(props) {
    super(props);

    // update state on locations changes - applies to navigating back and forward
    history.listen((location, action) => {
      if (action === 'POP') {
        this.props.histoyStateToCurrentState(location.state[0].weatherData);
      }
    });
  }

  componentDidMount() {
    this.props.fetchWeatherData();
  }

  render() {
    return (
      <ErrorBoundary message={'Oops, something went wrong :/'}>
        <Background />
        <div className="container-main  center-margin" >
          <Search />
          <CurrentWeather />
          <Forecast 
            type={'hourly'}
            dateFormat={'HHMM'}
            containerCSS={'hourly'}
            title='Upcoming hours:'
          />
          <Forecast
            type={'week'}
            dateFormat={'MDD'}
            containerCSS={'week'}
            title='Later this week:'
          />
        </div>
      </ErrorBoundary>
    );
  }
};

export default connect(null, { fetchWeatherData, histoyStateToCurrentState})(App);