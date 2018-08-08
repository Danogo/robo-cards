import React from 'react';
// or import React, {Component} from 'react', and then Component instead of React.Component
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends React.Component {
  // built-in constructor method
  constructor() {
    super();
    // state describes app and can change, allows communicate and pass dynamic data between components
    // usually parent component passes state as props to pure/dumb children components
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  // my own method for App comontent
  // I'm using arrow function instead of class method syntax (onSearchChange(){}) to avoid 'this' pointing to input during execution, arrow functions don't create new execution context
  onSearchChange = (event) => {
    // we have to use seState method to change the state
    this.setState({searchfield: event.target.value});
  }

  // built-in React render method
  render() {
    // filter array, if robot name includes text from searchfield add it to new array
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    }); 
    return (
      <div className="tc mw9-l center">
        <h1 className="f-subheadline">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
 
};

export default App;