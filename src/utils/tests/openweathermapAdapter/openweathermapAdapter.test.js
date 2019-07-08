import openweathermapAdapter from '../../openweathermapAdapter';
import serverResponseMock from './serverResponseMock';
import keyValuePairs from './keyValuePairs';

describe('Default response from server', () => {
  const adapterData = openweathermapAdapter(serverResponseMock.data);
  keyValuePairs.forEach(pair => {
    const { key, value } = pair;
    test(`open weather adapter, test for ${key}`, () => {
      expect(adapterData[key]).toEqual(value);
    });
  });
});

describe('Cases for precipitation', () => {
  test('rain 1h', () => {
    const value = 200;
    const mockData = { ...serverResponseMock.data, rain: {'1h' : value}}
    const adapterData = openweathermapAdapter(mockData);
    expect(adapterData.precipitation).toBe(value);
  });
  test('rain 3h', () => {
    const value = 300;
    const mockData = { ...serverResponseMock.data, rain: { '3h': value } }
    const adapterData = openweathermapAdapter(mockData);
    expect(adapterData.precipitation).toBe(value);
  });
  test('snow 1h', () => {
    const value = 400;
    const mockData = { ...serverResponseMock.data, snow: { '1h': value } }
    const adapterData = openweathermapAdapter(mockData);
    expect(adapterData.precipitation).toBe(value);
  });
  test('snow 3h', () => {
    const value = 500;
    const mockData = { ...serverResponseMock.data, snow: { '3h': value } }
    const adapterData = openweathermapAdapter(mockData);
    expect(adapterData.precipitation).toBe(value);
  });
  test('precipitation data is not given', () => {
    const adapterData = openweathermapAdapter(serverResponseMock.data);
    expect(adapterData.precipitation).toBe(undefined);
  });
});