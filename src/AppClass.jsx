import React from "react";
import CounterClass from "./Components/CounterClass";

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John Doe",
      age: "30",
    };
    // As "this" binding is lost for normal funciton/methods, we have to bind "this" with the method in order to access state and update its value in the method.
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick() {
  //   this.setState({name: "Jane Doe"})
  // }

  render() {
    // we can use arrow function to setState as arrow functions don't lose the this binding of the parent function.
    // const handleClick = () => {
    //   this.setState({name: "Jane Doe"})
    // }

    function handleClick() {
      console.log(this.name);
    }

    return (
      <>
        <h1 onClick={handleClick}>Hi {this.state.name}</h1>
        <CounterClass />
      </>
    );
  }
}
