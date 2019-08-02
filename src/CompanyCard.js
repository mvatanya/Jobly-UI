import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

class CompanyCard extends Component {
  render () {
    return (
      <Link to={`/companies/${this.props.handle.toLowerCase()}`}>
        <Card bg="white" style={{ width: '50%' }}>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
          <Card.Img variant="right" src={this.props.logo_url} />
        </Card>
    </Link>

    )
  }
}

export default CompanyCard