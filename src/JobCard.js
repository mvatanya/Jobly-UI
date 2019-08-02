import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class JobCard extends Component {
  render () {
    return (
      <Card bg="white" style={{ width: '50%' }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>Salary: {this.props.salary}</Card.Text>
          <Card.Text>Equity: {this.props.equity}</Card.Text>
        </Card.Body>
      </Card>
    //   <ul>
    //   <li>{this.props.title}</li>
    //   <li>{this.props.salary}</li> 
    //   <li>{this.props.equity}</li> 
    // </ul>
    )
  }
}

export default JobCard