import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

test('properly renders CounterButton component', () => {
  const mockColor = 'blue';
  expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
});

test('correctly increments the counter', () => {
  const mockColor = 'blue';
  const wrapper = shallow(<CounterButton color={mockColor}/>);
  const button = wrapper.find('[id="counter"]');
  const prevCount = wrapper.state().count;
  
  button.simulate('click');
  expect(wrapper.state().count).toEqual(prevCount + 1);
});