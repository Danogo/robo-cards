import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // re-render only if count has changed (we can also use PureComponent which assures that component will update only when its props has changed, but it checks shallow copy of props, so deep objects etc can not be compared)
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }

  render() {
    console.log('CounterButton')
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton;