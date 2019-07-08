import React from 'react';
import { Provider } from 'react-redux';


import { queryAllByText, getByText } from '@testing-library/dom'

import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import 'jest-dom/extend-expect';

import {
  dataTestAttr,
  storeFactory,
  createRender,
} from 'testUtils';

import {
  rendersNodeWithDataTestId,
  rendersNodeWithExactText,
  rendersNodesWithDataTestId,
} from 'genericTests';

import {
  initialStateMock,
  stateAfterSuccesfullDataFetchingMock,
  stateAfterFailedAllDataFetchesMock,
  stateDuringDataFetchMock,
} from 'stateMocks';

import IEfallback from '../IEfallback';

test('renders without crashing', () => {
  const qs = render(<IEfallback/>);
  qs.getByTestId('ie-fallback')
});