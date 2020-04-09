import React from 'react';
import {shallow} from 'enzyme';
import HappyHoursAd from './HappyHourAd';

const select = {
  title: '.title',
  countdown: '.countdown',
};

describe ('render component HappyHoursAd', () => {
  it ('should render component', () => {
    const component = shallow(<HappyHoursAd />);
    expect(component).toBeTruthy();
  });

  it ('render div when will be place title & countdown', () =>{
    const component = shallow(<HappyHoursAd />);

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.countdown)).toEqual(true);
  });
});