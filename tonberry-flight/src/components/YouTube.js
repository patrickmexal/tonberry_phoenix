import React, { Component } from 'react';



class YouTube extends Component {

constructor(props){
  super(props);
  this.boss=""
  this.state={};
}

  render() {
    return (
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed?listType=search&list={this.boss}walkthrough" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      );
      }
    }

export default YouTube;