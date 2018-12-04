import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>hello from Todo</div>
      </div>
    );
  }
}

export default Todo;
