import React from 'react';
// or import React, {Component} from 'react', and then Component instead of React.Component
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import './App.css';
import { setSearchField, reqRobots } from '../actions';

// we inform App that it will receive searchField prop from the searchRobots reducer
// mapStateToProps tells what part of state it has to listen for and send down as a prop
const mapStateToProps = state => {
  return {
    // because we have one reducer we just take it from state.searchField instead of state.searchRobots.searchField (like would be in case we we had multiple reducers), edit: now we have multiple reducers
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
};
// dispatch is used to send actions to reducer, so we are returning an object that contains all of our actions
// mapDispatchToProps says what props are the actions that need to get dispatched
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    // here because we are returning a function in dispatch, not an object like above, thunk middleware will be triggered and recognize it as an async function this way and inject dispatch function to the reqRobots so it can use it
    onRequestRobots: () => dispatch(reqRobots())
  }
}

class App extends React.Component {
  // built-in constructor method
  // constructor() {
  //   super();
  //   // state describes app and can change, allows communicate and pass dynamic data between components
  //   // usually parent component passes state as props to pure/dumb children components
  //   this.state = {
  //     // robots: []
  //     // searchfield: ''
  //   }
  // }
  // edit: we dont need cosntructor, we dont have state here, we use props from redux store

  // after running 'constructor' and 'render' initial dom react runs componentDidMount, where I fetch data for robots and then render again after changing state
  componentDidMount() {
  //   console.log(this.props.store);
  //  fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     throw new Error('Request failed!');
  //   }, networkError => console.log(networkError.message))
  //   .then(users => {
  //     this.setState({
  //       robots: users
  //     });
  //   });
    this.props.onRequestRobots();
  }

  // my own method for App comontent
  // I'm using arrow function instead of class method syntax (onSearchChange(){}) to avoid 'this' pointing to input during execution, arrow functions inherit 'this' from lexical scope they're defined in, don't have own 'this'
  // onSearchChange = (event) => {
  //   // we have to use seState method to change the state
  //   this.setState({searchfield: event.target.value});
  // }
  // edit redux: we don't need this method now because we get it from redux as a prop

  // built-in React render method
  render() {
    // const {robots} = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    // edit redux: we don't need searchfield from this.state anymore, we get it from redux as a prop, also we are using now onSearchChange instead of this.onSearchChange method
    // filter array, if robot name includes text from searchfield add it to new array
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    }); 
    // if (robots.length === 0) {
    if (isPending) {
      return <h1 className="f-subheadline tc">LOADING</h1>
    } else {
      return (
        <div className="tc mw9-l center">
          <h1 className="f-subheadline">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
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

// Connecting App with certain part of the state(mapStateToProps) and certain actions(mapDispatchToProps), and gives them as the props to the App
export default connect(mapStateToProps, mapDispatchToProps)(App);