import React, { Component } from "react";
import Todo from "../Todo/Todo";

class List extends Component {
  constructor() {
    super();
    this.state = {
      name: "Billy"
    };
  }

  render() {
    return (
      <div>
        <p>test from List.js</p>
        <Todo name={this.state.name} />
      </div>
    );
  }
}

export default List;
