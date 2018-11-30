import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <div>
        <p>test from List.js</p>
      </div>
    );
  }
}

export default List;
