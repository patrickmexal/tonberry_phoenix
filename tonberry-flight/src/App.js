import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Create from "./components/Create.js";
import Header from "./components/Header.js";



class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Create />
      <Login />
      <Register />
      </div>
    );
  }
}

export default App;
