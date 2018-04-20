import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Switch } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enemy: {}
    };
  }

  componentDidMount() {
    axios.get('/api/enemy/'+this.props.match.params.id)
      .then(res => {
        this.setState({ enemy: res.data });
        console.log(this.state.enemy);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/enemy/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.enemy.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Switch to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Game Guide List</Switch></h4>
            <dl>
              <dt>Origin of Enemy:</dt>
              <dd>{this.state.enemy.origin}</dd>
              <dt>Name of Enemy:</dt>
              <dd>{this.state.enemy.name}</dd>
              <dt>Difficulty:</dt>
              <dd>{this.state.enemy.difficulty}</dd>
              <dt>Guide to Victory:</dt>
              <dd>{this.state.enemy.guide}</dd>
            </dl>
            <Switch to={`/edit/${this.state.enemy._id}`} class="btn btn-success">Edit</Switch>&nbsp;
            <button onClick={this.delete.bind(this, this.state.enemy._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
