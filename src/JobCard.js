import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import JoblyApi from './JoblyApi';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {buttonText: "APPLY"}

    this.appliedJobClick = this.appliedJobClick.bind(this)

  }

  async appliedJobClick(){
    try{
      let id = this.props.id
      let username = this.props.username
      await JoblyApi.appliedJob(id, username)
      this.setState({buttonText: "APPLIED"})
    }
    catch(error){
      this.setState({buttonText: "APPLIED"})
      // return error
    }

    
  }

  render () {
    return (
      <Card bg="white" style={{ width: '50%' }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>Salary: {this.props.salary}</Card.Text>
          <Card.Text>Equity: {this.props.equity}</Card.Text>
          <Button onClick={this.appliedJobClick} variant="primary">{this.state.buttonText}</Button>

        </Card.Body>
      </Card>
    )
  }
}

export default JobCard