import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, reqRobots } from '../actions';
import MainPage from '../components/MainPage';

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
  render() {
    // passing props down to the presentational component
    return <MainPage {...this.props}/>;
  }
};

// Connecting App with certain part of the state(mapStateToProps) and certain actions(mapDispatchToProps), and gives them as the props to the App
export default connect(mapStateToProps, mapDispatchToProps)(App);