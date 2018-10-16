import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

test('renders Card component', () => {
  expect(shallow(<Card/>)).toMatchSnapshot();
});