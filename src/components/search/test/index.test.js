import React from 'react';

import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';

import {
  createRender,
} from 'testUtils';

import {
  rendersNodeWithDataTestId,
} from 'genericTests';

import {
  initialStateMock,
} from 'stateMocks';

import Search, { UnconnectedSearch } from '../';


beforeEach(() => {
  cleanup();
});

describe('Renders', () => {
  describe('with initial state', () => {
    rendersNodeWithDataTestId(Search, 'component-search', 1, initialStateMock);
  });
  describe('not, with initial state', () => {
    rendersNodeWithDataTestId(Search, 'loading-indicator', 0, initialStateMock);
  });
  describe('while fetching data', () => {
    rendersNodeWithDataTestId(Search, 'loading-indicator', 1, { ...initialStateMock, appState: { fetchingData: true }});
  });
  describe('with failed search', () => {
    rendersNodeWithDataTestId(Search, 'ErrorContainer', 1, { ...initialStateMock, appState: { fetchCoordinatesErrorStatus: true } });
  });
});

describe('On error', () => {
  test('clicking error dismiss button dismisses error', () => {
    const qs = createRender(Search, { ...initialStateMock, appState: {fetchCoordinatesErrorStatus: true}});
    const dismissBtn = qs.getByTestId('error-dismiss-btn');

    // first, test if error exist, before testing if it got dismissed.
    let nodeList = qs.queryAllByTestId('ErrorContainer');
    expect(nodeList.length).toBe(1);

    // simulate dismiss click
    fireEvent.click(dismissBtn);

    nodeList = qs.queryAllByTestId('ErrorContainer');
    expect(nodeList.length).toBe(0);
  });
});

describe('Submitting', () => {
  let 
    mockCallback,
    inputValue,
    props,
    qs,
    searchBtn,
    searchInput;
  beforeEach(() => {
    mockCallback = jest.fn(query => query);
    inputValue = 'asdfghjk951';
    props = { fetchWeatherData: mockCallback };

    qs = render(<UnconnectedSearch {...props} />);

    searchBtn = qs.getByTestId('search-btn');
    searchInput = qs.getByTestId('search-input');
  })
  test('clicking search button submits input value', () => {
    fireEvent.change(searchInput, { target: { value: inputValue } });
    fireEvent.click(searchBtn);

    expect(mockCallback).toBeCalled();
    expect(mockCallback.mock.calls[0][0]).toBe(inputValue);
  });
  test('clicking enter button submits input value', () => {
    fireEvent.change(searchInput, { target: { value: inputValue } });
    fireEvent.keyDown(searchInput, { key: 'Enter', keyCode: 13 });

    expect(mockCallback).toBeCalled();
    expect(mockCallback.mock.calls[0][0]).toBe(inputValue);
  });
  test('input fiels is cleared after submitting', () => {
    fireEvent.change(searchInput, { target: { value: inputValue } });
    fireEvent.click(searchBtn);
    fireEvent.click(searchBtn);

    // After first button click input field gets cleater.
    // Mock function get called only when input in not empty strings.
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});