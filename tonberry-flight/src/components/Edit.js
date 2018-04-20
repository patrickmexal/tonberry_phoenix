import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.enemy
    state[e.target.name] = e.target.value;
    this.setState({enemy:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { origin, name, difficulty, guide } = this.state.enemy;

    axios.put('/api/enemy/'+this.props.match.params.id, { origin, name, difficulty, guide })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT enemy
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.enemy._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> enemy List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="origin">Origin of Enemy:</label>
                <input type="text" class="form-control" name="origin" value={this.state.enemy.origin} onChange={this.onChange} placeholder="Origin" />
              </div>
              <div class="form-group">
                <label for="Name">Name of Enemy:</label>
                <input type="text" class="form-control" name="Name" value={this.state.enemy.Name} onChange={this.onChange} placeholder="Enemy" />
              </div>
              <div class="form-group">
                <label for="difficulty">Difficulty of Enemy:</label>
                <input type="text" class="form-control" name="difficulty" value={this.state.enemy.difficulty} onChange={this.onChange} placeholder="Adds, Mini-boss, Mid-boss, or Final boss" />
              </div>
              <div class="form-group">
                <label for="guide">Guide to Victory:</label>
                <input type="text" class="form-control" name="guide" value={this.state.enemy.guide} onChange={this.onChange} placeholder="Guide" />
              </div>
      
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// export default Edit;
