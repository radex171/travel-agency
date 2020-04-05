import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe ('component tripSummary', () =>{
  it ('should render correct link id ', () =>{
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]}/>);
    expect (component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it ('should render correct src and alt', () => {
    const expectedImageSrc = 'image';
    const expectedImageAlt = 'not valible';
    const component = shallow(<TripSummary image={expectedImageSrc} name={expectedImageAlt} tags={[]}/>);

    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);
    
  });

  it ('should render correct name & cost & days', () => {
    const expectedName = 'name';
    const expectedCost = '$37';
    const expectedDay = '4';

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDay} tags={[]}/>);

    const name = component.find ('.title').text();
    const cost = component.find('.details span:last-child').text();
    const days = component.find('.details span:first-child').text();

    expect(name).toEqual(expectedName);
    expect(cost).toEqual(`from${expectedCost}`);
    expect(days).toEqual(`${expectedDay}days`);
  });

  it ('should render error when missing any props', () =>{
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it ('should render tags', () =>{
    const tagsArray = ['AAA', 'BBB', 'CCC'];
    const component = shallow(<TripSummary tags={tagsArray} />);
    expect (component.find('.tag').at(0)).toEqual[tagsArray[0]];
    expect (component.find('.tag').at(1)).toEqual[tagsArray[1]];
    expect (component.find('.tag').at(2)).toEqual[tagsArray[2]];
  });
  it('should render tags when props is false', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags').exists()).toEqual(true);
  });
});