import {
  findByAttr,
  storeFactory,
  setup,
} from './testUtils.js';

/**
 * Tests if Component has element with value
 * @function renderComponentWithValue
 * @param {React component} Component - React component 
 * @param {str} value - string for search.
 * @param {int} expectAmmount - ammount of elements that should have specified value.
 * @param {bool} connected - determines if Component uses react-redux connect wrapper.
 * @param {obj} props - Components props.
 * @param {obj} initialState - Components initial state.
 */
export const renderComponentWithValue = (Component, value, expectAmmount = 1, connected = true, props = {}, initialState={}) => {
  test(`renders component with data-test value:${value}`, () => {
    const wrapper = setup(Component, initialState, props, connected);
    const ElementWithValue = findByAttr(wrapper, value);
    expect(ElementWithValue.length).toBe(expectAmmount);
  });
};

export const hasProp = () => {};

/**
 * Test if component has part of state as prop, for sinlge prop.
 * @function hasStateAsProp
 * @param {React component} Component 
 * @param {obj} initialState 
 * @param {obj} expectedProp 
 * @param {bool} connected 
 * @param {obj} props 
 */
export const hasStateAsProp = (Component, initialState, expectedProp, connected = true, props = {}) => {
  test(`has ${Object.keys(expectedProp)[0]} piece of state as prop`, () => {
    const wrapper = setup(Component, initialState, props, connected);
    const expectedPropName = Object.keys(expectedProp)[0];
    const stateAsProp = wrapper.instance().props[expectedPropName];
    expect(stateAsProp).toEqual(expectedProp[expectedPropName]);
  })
};