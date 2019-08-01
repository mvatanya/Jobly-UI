import React, { Component } from 'react';

class JobCard extends Component {
  render () {
    return (
      <ul>
      <li>{this.props.title}</li>
      <li>{this.props.salary}</li> 
      <li>{this.props.equity}</li> 
    </ul>
    )
  }
}

export default JobCard