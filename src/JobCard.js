import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import JoblyApi from './JoblyApi';
import "./JobCard.css"
class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {buttonText: "APPLY"}

    this.appliedJobClick = this.appliedJobClick.bind(this)

  }

  componentDidMount() {
    if (this.props.state === "applied"){
      this.setState({buttonText: "APPLIED"})
    }
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
    let buttonColor = this.state.buttonText === "APPLIED" ?  "danger" : "primary"

    return (
      <Card className="p-1 mt-1 mb-2 ml-auto mr-auto" bg="white" style={{ width: '65%' }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text className="mb-0">Salary: {this.props.salary}</Card.Text>
          <Card.Text className="mb-0">Equity: {this.props.equity}</Card.Text>
          <Button className="Button" onClick={this.appliedJobClick} variant={buttonColor}>{this.state.buttonText}</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default JobCard