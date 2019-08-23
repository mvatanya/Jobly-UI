import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import defaultLogo from "./empty.png"

class CompanyCard extends Component {
  render() {
    return (
      <Link to={`/companies/${this.props.handle.toLowerCase()}`}>
        <Card className="p-4 mt-2 mb-3 ml-auto mr-auto" bg="white" style={{ width: '65%', color:'black' }}>
          <div className="media">
            <div className="media-body">
              <h5 className="mt-2 mb-4">{this.props.name}</h5>
              <div>{this.props.description}</div>
            </div>
            <img className="ml-3" width="100" height="100" src={this.props.logo_url || defaultLogo} alt={`${this.props.name} Logo`} />
          </div>
        </Card>
      </Link>

        )
      }
    }
    
export default CompanyCard