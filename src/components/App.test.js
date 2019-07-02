import '../test/setupTests';
import {
  renderComponentWithValue
} from '../test/genericTests';
import App from './App';

describe('reders', () => {
  renderComponentWithValue(App, 'component-app');
  renderComponentWithValue(App, 'child-background');
  renderComponentWithValue(App, 'child-search');
  renderComponentWithValue(App, 'child-current-weather');
  renderComponentWithValue(App, 'child-forecast', 2);

  test('clicking back button in browser restores previous state', () => {
    throw 'test not implemented';
  })
  test('fetches weatgher data on initial app load', () => {
    throw 'test not implemented';
  })
})