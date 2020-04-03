import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe ('component tripSummary', () =>{
  it ('should render correct link id ', () =>{
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId}/>);
    expect (component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it ('should render correct src and alt', () => {
    const expectedImageSrc = 'image.jpg';
    const expectedImageAlt = 'not Avalible';
    const component = shallow(<TripSummary src={expectedImageSrc} alt={expectedImageAlt}/>);

    expect (component.find('img').prop('src').toEqual(expectedImageSrc));
    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);
    
  });
});