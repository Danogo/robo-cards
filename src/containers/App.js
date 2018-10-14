import React from 'react';
// or import React, {Component} from 'react', and then Component instead of React.Component
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
  // built-in constructor method
  constructor() {
    super();
    // state describes app and can change, allows communicate and pass dynamic data between components
    // usually parent component passes state as props to pure/dumb children components
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  // after running 'constructor' and 'render' initial dom react runs componentDidMount, where I fetch data for robots and then render again after changing state
  componentDidMount() {
    console.log(this.props.store.getState());
   fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(users => {
      this.setState({
        robots: users
      });
    });
  }

  // my own method for App comontent
  // I'm using arrow function instead of class method syntax (onSearchChange(){}) to avoid 'this' pointing to input during execution, arrow functions inherit 'this' from lexical scope they're defined in, don't have own 'this'
  onSearchChange = (event) => {
    // we have to use seState method to change the state
    this.setState({searchfield: event.target.value});
  }

  // built-in React render method
  render() {
    const {robots, searchfield} = this.state;
    // filter array, if robot name includes text from searchfield add it to new array
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    }); 
    if (robots.length === 0) {
      return <h1 className="f-subheadline tc">LOADING</h1>
    } else {
      return (
        <div className="tc mw9-l center">
          <h1 className="f-subheadline">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
 
};

export default App;