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

    const { isbn, title, author, description, published_year, publisher } = this.state.enemy;

    axios.put('/api/enemy/'+this.props.match.params.id, { isbn, title, author, description, published_year, publisher })
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
                <label for="isbn">ISBN:</label>
                <input type="text" class="form-control" name="isbn" value={this.state.enemy.isbn} onChange={this.onChange} placeholder="ISBN" />
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.enemy.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.enemy.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.enemy.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="published_date">Published Date:</label>
                <input type="number" class="form-control" name="published_year" value={this.state.enemy.published_year} onChange={this.onChange} placeholder="Published Year" />
              </div>
              <div class="form-group">
                <label for="publisher">Publisher:</label>
                <input type="text" class="form-control" name="publisher" value={this.state.enemy.publisher} onChange={this.onChange} placeholder="Publisher" />
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
