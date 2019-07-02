import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Background from './';
import matchImageToWeatherCondition from './matchImageToWeatherCondition';
import { storeFactory } from '../../test/testUtils';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: false,
});


describe('Background img', () => {
  let wrapper, src, counter;

  beforeEach(() => {
    const initialState = { weatherData: { currentWeatherData: { conditionCodeOpenWeather: '' } } };
    const store = storeFactory(initialState);
    wrapper = mount(<Background store={store} />);
    counter = 0;
  })

  test('Img elements do not display images when weather code is not given', () => {
    wrapper.find('img').forEach(node => {
      if (node.render()['0'].attribs.src) {
        counter += 1;
      }
    });
    expect(counter).toBe(0);
  });

  test('After component update, at least one img element has src correctly corresponding to weather code.', () => {
    wrapper.setProps({ conditionCodeOpenWeather: 200 });
    src = matchImageToWeatherCondition(200);
    
    counter = 0;

    wrapper.find('img').forEach(node => {
      if (node.render()['0'].attribs.src) {
        counter += 1;
      }
    });

    expect(counter).toBe(1);
  });
});

