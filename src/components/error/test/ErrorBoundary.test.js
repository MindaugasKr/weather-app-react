import React from 'react';

import {
  render,
} from '@testing-library/react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ErrorBoundary from '../ErrorBoundary';

describe('renders without crashing', () => {
  test('without error', () => {
    render(<ErrorBoundary >Text</ErrorBoundary>);
  });
  test('with error', () => {
    configure({ adapter: new Adapter() });
    const message = 'msg 123';
    const wrapper = shallow(<ErrorBoundary message={message}/>);
    wrapper.setState({ hasError: true });
    expect(wrapper.text()).toMatch(new RegExp(message));
    expect(wrapper.find('[data-testid="component-error-boundary"]').length).toBe(1);
  });
});
