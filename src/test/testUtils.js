import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { shallow } from 'enzyme';

import rootReducer from '../redux/reducers';
import { middlewares } from '../configureStore';


/**
 * Return node(s) with the given data-test attribute.
 * @function findByAttr
 * @param {ShallowWrapper} wrapper - Enzymes shalow wrapper
 * @param {string} val - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
export const findByAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

/**
 * Create testing store with importted reducers, middleware, and initial state.
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = initialState => applyMiddleware(...middlewares)(createStore)(rootReducer, initialState);

/**
 * Factory function to create ShallowWrapper.
 * @function setup
 * @function setup
 * @param {object} initialState - initial state for component.
 * @param {object} props - Component props.
 * @param {function or class} Component - React component.
 * @returns {ShallowWrapper}
 */
export const setup = (Component, initialState = {}, props = {}, connected = false) => {
  const store = storeFactory(initialState);
  return connected ?
    shallow(<Component store={store} {...props} />).dive().dive() :
    shallow(<Component store={store} {...props} />);
};
