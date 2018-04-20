import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Switch } from 'react-router-dom';

class List extends Component {

  state = {
    enemy: [],
  };

  componentDidMount() {
    axios.get('/api/enemy/')
      .then(res => {
        this.setState({ enemy: res.data });
        console.log(this.state.enemy);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-body">
            <h4><Switch to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Game Guide List</Switch></h4>
            <dl>
              <dt>Origin of Enemy:</dt>
              <dd>{this.state.enemy.origin}</dd>
              <dt>Name of Enemy:</dt>
              <dd>{this.state.enemy.name}</dd>
              <dt>Difficulty:</dt>
              <dd>{this.state.enemy.difficulty}</dd>
            </dl>
            <Switch to={`/show/${this.state.enemy._id}`} class="btn btn-success">View</Switch>&nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default List;