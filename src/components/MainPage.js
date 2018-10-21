import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = (robots, searchField) => {
    // filter array, if robot name includes text from searchfield add it to new array
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    }); 
  }

  render() {
    const { onSearchChange, isPending } = this.props;
      return (
        <div className="tc mw9-l center">
          <Header/>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            { isPending ? <h1 className="f-subheadline tc">LOADING</h1> :
              <ErrorBoundary>
                <CardList robots={this.filterRobots()}/>
              </ErrorBoundary>
            }
          </Scroll>
        </div>
      );
  }
};

export default MainPage;
