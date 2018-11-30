import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>hello darkness my old friend</p>
        <List />
      </div>
    );
  }
}

export default App;
