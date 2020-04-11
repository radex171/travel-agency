import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'testTitle',
  promoDescription: 'promoDescription',

};
describe(' Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  
  it('should render title & promoDescription', () => {
    const component = shallow(<HappyHourAd />);
    expect (component.exists(select.title)).toEqual(true);
    expect (component.exists(select.promoDescription)).toEqual(true);
  });
  it ('render title & promoDescription', () => {
    const component = shallow (<HappyHourAd {...mockProps} />);

    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});

