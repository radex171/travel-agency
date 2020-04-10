import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';



const select = {
  title: '.title',
  promoTitle: '.promoTitle',
  countdown: '.countdown',
};

const mockProps = {
  title: 'time left for promotion',
  promoTitle: 'promoTitle',
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
const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return new Date(customDate).getTime();
  }
};


 
const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.countdown).text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};
describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
    const component = shallow(<HappyHourAd {...mockProps} />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedTime = component.find(select.countdown).text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
    jest.useRealTimers();
  });
};
describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});