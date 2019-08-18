import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {

  render() {

    let loginOrLogout = this.props.isLoggedin ? <NavLink to="/logout" className="mr-2">Logout</NavLink> : <NavLink to="/login" className="mr-2">Login</NavLink>
    return (
      <Navbar bg="light" variant="light" >
        <Navbar.Brand><NavLink to="/">Jobly</NavLink></Navbar.Brand>
        <Nav className="ml-md-auto">
          <NavLink to="/companies" className="mr-5">Companies</NavLink>
          <NavLink to="/jobs" className="mr-5">Jobs</NavLink>
          {loginOrLogout}
        </Nav>
  </Navbar>

    );
  }
} // end

export default NavBar;
