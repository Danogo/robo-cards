import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

// test('properly renders MainPage component', () => {
//   const mockStore = {
//       searchField: '',
//       robots: []
//   }
//   expect(shallow(<MainPage store={mockStore}/>)).toMatchSnapshot();
// });
describe('<MainPage/>', () => {
  let wrapper;
  // this will run before each test
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false 
    }
    wrapper = shallow(<MainPage {...mockProps}/>);
  });

  it('renders MainPage component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly with empty input', () => {
    // instance() give us access to all method available for rendered component
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });

  it('filters robots correctly with some input', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'Mike',
          email: 'mike@gmail.com'
        }
      ],
      searchField: 'a',
      isPending: false 
    }

    const wrapper2 = shallow(<MainPage {...mockProps2}/>);
    expect(wrapper2.instance().filterRobots()).toEqual([]);
  });

  it('shows correct info when cards are loading', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'Mike',
          email: 'mike@gmail.com'
        }
      ],
      searchField: 'a',
      isPending: true 
    }

    const wrapper3 = shallow(<MainPage {...mockProps3}/>);
    expect(wrapper3.find('h1').length).toEqual(1);
  });
});
