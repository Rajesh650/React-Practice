import React, { Component } from "react";

export class ClassbasedComponent extends Component {
  constructor() {
    super();
    this.state = {
      num: 100,
      msg: "class state",
    }
  }
  changeNumber = () => {
    this.setState({ num: this.state.num + 10 });
    
  };

  render() {
    console.log("render");

    return (
      <div>
        ClassbasedComponent
        <h1>STATE IS CLASS BASED COMPONENT</h1>
        <h2>{this.state.num}</h2>
        <button onClick={this.changeNumber}>Change Number</button>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.setState({ msg: "I am changed" })}>
          Change msg
        </button>
      </div>
    );
  }
}

export default ClassbasedComponent;
