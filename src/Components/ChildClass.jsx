import React from "react";

export default class ChildClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  componentDidMount() {
    console.log("Render");
    console.log("Hi");
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.age !== this.state.age
    ) {
      console.log(`My name is ${this.state.name} and I am ${this.state.age} years old`)
    }

    if (prevState.name !== this.state.name) {
      document.title = this.state.name;

      if (this.nameTimeout != null) clearTimeout(this.nameTimeout)
      this.nameTimeout = setTimeout(() => {
        console.log(`My name is ${this.state.name}`);
      }, 1000);
    }

    console.log("Render");
  }

  componentWillUnmount() {
    if (this.nameTimeout != null) clearTimeout(this.nameTimeout)
    console.log("Component unmounted");
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState(
            {
              name:  e.target.value
            }
          )}
        />
        <br />
        <button onClick={() => this.setState((currentState) => ({ age: currentState.age - 1}))}>-</button>
        {this.state.age}
        <button onClick={() => this.setState((currentState) => ({ age: currentState.age + 1}))}>+</button>
      </div>
    );
  }
}
