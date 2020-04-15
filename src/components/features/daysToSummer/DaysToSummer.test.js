import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';


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
    return (new Date(customDate)).getTime();
  }
};

const formulaForTest = (today, dayOfYear, text) => {
  
  
  
  it (`show example ${today} and ${dayOfYear} and correct results`,() =>{
    
    jest.useFakeTimers();
    global.Date = mockDate(today);
    const component = shallow(<DaysToSummer />);
    
    const remaindDay = component.find('.dayValue');
    expect(remaindDay.text()).toEqual(text);
    
    
    global.Date = trueDate;
    jest.useRealTimers();
    
   
  });
};


describe ('render component', () => {
  it('should render without error', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  it('should render class component & value', () =>{
    const component = shallow(<DaysToSummer/>);
    const returnInfo = component.find('remaindDay');

    expect(returnInfo).toBeTruthy;
  });
});



describe('test actually date',() =>{
  const dayLeft = new Date().setUTCFullYear (new Date(). getUTCFullYear(), 0, 1); 
  const yearFirstDay = Math.floor(dayLeft/86400000); //86400000 is ms in day
  const today = Math.ceil((new Date().getTime()) / 86400000);
 
  const dayOfYear = today - yearFirstDay;
  const results = dayOfYear + ' days to summer!';
  formulaForTest(  today,dayOfYear, results);
  
  
});



