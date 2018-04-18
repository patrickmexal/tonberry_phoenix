import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Create from "./components/Create.js";
import Header from "./components/Header.js";





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

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
