import {
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
  stateAfterSuccesfullDataFetchingMock,
} from 'stateMocks';

import App from '../';


describe('render', () => {
  beforeEach(() => {
    cleanup();
  })

  let initialState = { ...stateAfterSuccesfullDataFetchingMock};
  const props = { disableFetchOntest: true };

  rendersNodeWithDataTestId(App, 'component-app', 1, initialState, props);
  rendersNodeWithDataTestId(App, 'component-search', 1, initialState, props);
  rendersNodeWithDataTestId(App, 'component-background', 1, initialState, props);
  rendersNodeWithDataTestId(App, 'component-current-weather', 1, initialState, props);
  rendersNodeWithDataTestId(App, 'component-forecast', 2, initialState, props);
});


describe('integration', () => {
  describe('temperature format button', () => {
    let initialState, props, qs, btnC, btnF;
    const expectValues = {
      current: {
        main: {
          C: '+21°',
          F: '+70°',
        },
        range: {
          C: '+221° C ... +121° C',
          F: '+430° F ... +250° F',
        }
      },
      forecast: {
        C: '+321° C',
        F: '+610° F',
      },
    };

    beforeEach(() => {
      cleanup();

      initialState = { ...stateAfterSuccesfullDataFetchingMock };
      props = { disableFetchOntest: true };
      qs = createRender(App, initialState, props);

      btnC = qs.getByTestId('btn-celsius');
      btnF = qs.getByTestId('btn-fahrenheit');
    });
    test('initial values, expect Celsius', () => {
      expect(qs.queryAllByText(expectValues.current.main.C).length).toBe(1);
      expect(qs.queryAllByText(expectValues.current.range.C).length).toBe(1);
      expect(qs.queryAllByText(expectValues.forecast.C).length).toBeGreaterThanOrEqual(1);
    });
    test('values after clicking F', () => {
      fireEvent.click(btnF);
      expect(qs.queryAllByText(expectValues.current.main.F).length).toBe(1);
      expect(qs.queryAllByText(expectValues.current.range.F).length).toBe(1);
      expect(qs.queryAllByText(expectValues.forecast.F).length).toBeGreaterThanOrEqual(1);
    });
    test('values after clicking C', () => {
      fireEvent.click(btnC);
      expect(qs.queryAllByText(expectValues.current.main.C).length).toBe(1);
      expect(qs.queryAllByText(expectValues.current.range.C).length).toBe(1);
      expect(qs.queryAllByText(expectValues.forecast.C).length).toBeGreaterThanOrEqual(1);
    });
    test('values after clicking F, then C', () => {
      fireEvent.click(btnF);
      fireEvent.click(btnC);
      expect(qs.queryAllByText(expectValues.current.main.C).length).toBe(1);
      expect(qs.queryAllByText(expectValues.current.range.C).length).toBe(1);
      expect(qs.queryAllByText(expectValues.forecast.C).length).toBeGreaterThanOrEqual(1);
    });
  });
});
