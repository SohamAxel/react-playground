import React from "react";

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <>
        <h1>Counter: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState(prevState => ({count: prevState.count + 1}));
          }}
        >
          +1
        </button>
      </>
    );
  }
};