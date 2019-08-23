import React, { Component } from "react"
import { Button } from 'react-bootstrap';
import "./SignUpForm.css"

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    }

  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  inputSignup = async evt => {
    evt.preventDefault();
    await this.props.userSignUp(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email)
    this.props.checkToken()
    this.props.history.push("/jobs")
  }

  render() {

    return (
      <div className="ml-2 mt-3">
        <form onSubmit={this.inputSignup}>
          <label htmlFor="id">Username</label>
          <input
            className="signUpInput"
            id="username"
            name="username"
            type="text"
            onChange={this.handleChange}
            value={this.state.username}
          />

          <br />
          <label htmlFor="password">Password</label>
          <input
            className="signUpInput"
            id="password"
            name="password"
            type="text"
            onChange={this.handleChange}
            value={this.state.password}
          />

          <br />
          <label htmlFor="firstName">First Name</label>
          <input
            className="signUpInput"
            id="firstName"
            name="firstName"
            type="text"
            onChange={this.handleChange}
            value={this.state.firstName}
          />

          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            className="signUpInput"
            id="lastName"
            name="lastName"
            type="text"
            onChange={this.handleChange}
            value={this.state.lastName}
          />

          <br />
          <label htmlFor="email">Email</label>
          <input
            className="signUpInput"
            id="email"
            name="email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <br />
          <Button className="mt-3" type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;