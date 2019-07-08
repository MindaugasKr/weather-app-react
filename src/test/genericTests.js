import {
  createRender,
} from 'testUtils';

/**
 * For testing in component (does not) render element with data-testid
 * 
 * @param {Class / Function} Component - React component
 * @param {string} value - data-testid
 * @param {integer} expectedAmmount 
 * @param {object} initialState - object that will be used to create store.
 * @param {object} props - initial components props
 */
export const rendersNodeWithDataTestId = (Component, value, expectedAmmount, initialState={}, props={}) => {
  const message = `${expectedAmmount === 0 ? 'does not ' : ''}render ${expectedAmmount > 1 ? 'components' : 'component'} with data-testid: ${value}`;
  test(message, () => {
    const qs = createRender(Component, initialState, props);
    const nodes = qs.queryAllByTestId(value);
    expect(nodes.length).toBe(expectedAmmount);
  })
}


/**
 * For testing in component (does not) render element with provided text
 *
 * @param {Class / Function} Component - React component
 * @param {string / regular expression} value - value to find element by
 * @param {integer} expectedAmmount
 * @param {object} initialState - object that will be used to create store.
 * @param {object} props - initial components props
 */
export const rendersNodeWithExactText = (Component, value, expectedAmmount, initialState = {}, props = {}) => {
  const message = `${expectedAmmount === 0 ? 'does not ' : ''}render ${expectedAmmount > 1 ? 'components' : 'component'} with text: ${value}`;
  test(message, () => {
    const qs = createRender(Component, initialState, props);
    const nodes = qs.queryAllByText(value);
    expect(nodes.length).toBe(expectedAmmount);
  });
};

/**
 * Universal test for testing of multiple pure functions from same lib.
 * 
 * @function IOtestingForFunctionLibs
 * @param {object} testingIO object with parameters for testing
  * @param {string} fName function name
  * @param {array} input list of input values
  * @param {any} expectedOutput expected function output
 * @param {object} lib imported library, e.g. import * as lib from 'lib';
 */
export const IOtestingForFunctionLibs = (testingIO, lib) => {
  testingIO.forEach(d => {
    test(`data formating, function name: ${d.fName}`, () => {
      const result = lib[d.fName](...d.input);
      expect(result).toEqual(d.expectedOutput);
    });
  });
};