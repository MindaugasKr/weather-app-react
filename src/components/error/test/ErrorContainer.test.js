import React from 'react';

import {
  render,
} from '@testing-library/react';

import ErrorContainer from '../ErrorContainer';

test('renders without crashing', () => {
  const qs = render(<ErrorContainer>Dummy text</ErrorContainer>);
  qs.getByTestId(ErrorContainer)
});