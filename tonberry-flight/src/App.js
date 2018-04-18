import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Create from "./components/Create.js";


class App extends Component {
  render() {
    return (
      <div>
      <Create />
      <Login />
      <Register />
      </div>
    );
  }
}

export default App;
