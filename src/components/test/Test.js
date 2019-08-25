import React, { Component } from "react";

class Test extends Component {
  state = {
    test: ""
  };

  componentDidMount() {
    console.log("Component did mount ...");
  }

  componentWillMount() {
    console.log("Component will mount ...");
  }

  componentDidUpdate() {
    console.log("Component did update ..."); //when component updates and rerender this is gonna run, for example in case of any state change
  }

  componentWillUpdate() {
    console.log("Component will update ...");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("Component will receive props ...");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get Snapshot Before Update ..."); //Before mutation
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
