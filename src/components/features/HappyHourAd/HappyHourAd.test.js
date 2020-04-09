import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoTitle: '.promoTitle',
};

const mockProps = {
  title: 'time left for promotion',
  promoTitle: '54234',
};

describe ('render component HappyHourAd', () => {
  it ('should render component', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it ('render div when will be place title & promoTitle', () =>{
    const component = shallow(<HappyHourAd />);

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoTitle)).toEqual(true);
  });

  it('should dispaly title & promoTitle from mockProps', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const testTitle = mockProps.title;
    const testPromoTitle = mockProps.promoTitle;
    expect(component.find(select.title).text()).toEqual(testTitle);
    expect(component.find(select.promoTitle).text()).toEqual(testPromoTitle);
  });
});