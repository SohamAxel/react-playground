import React from "react";

export default class CounterWithNameProjectClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John Doe",
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div>
          <button
            onClick={() =>
              this.setState((prevState) => ({ count: prevState.count + 1 }))
            }
          >
            +1
          </button>
          {this.state.count}
          <button
            onClick={() =>
              this.setState((prevState) => ({ count: prevState.count - 1 }))
            }
          >
            -1
          </button>
        </div>
        <h3>
          Hi, my name is {this.state.name}, counter: {this.state.count}
        </h3>
      </div>
    );
  }
}
