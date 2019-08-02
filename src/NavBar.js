import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" >
        <Navbar.Brand><NavLink to="/">Jobly</NavLink></Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/companies" className="mr-2">Companies</NavLink>
          <NavLink to="/jobs" className="mr-2">Jobs</NavLink>
          <NavLink to="/login" className="mr-2">Login</NavLink>
          <NavLink to="/logout" className="mr-2">Logout</NavLink>

        </Nav>
  </Navbar>

      // <ul>
      //   <li><Link to="/">Jobly</Link></li>
      //   <li><Link to="/companies">Companies</Link></li>
      //   <li><Link to="/jobs">Jobs</Link></li>
      //   <li><Link to="/profile">Profile</Link></li>
      //   <li><Link to="/login">Log in </Link></li>
      //   <li><Link to="/logout">Log out </Link></li>
        
      // </ul>
    );
  }
} // end

export default NavBar;
