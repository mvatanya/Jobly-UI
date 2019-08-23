import React, { Component } from "react"
import { Button, Form } from 'react-bootstrap';
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
    await this.props.checkToken()
    this.props.history.push("/jobs")
  }

  render() {

    return (
      <div className="ml-2 mt-3">
        <Form onSubmit={this.inputSignup}>
          <Form.Group>
            <label htmlFor="id">Username</label>
            <input
              className="signUpInput"
              id="username"
              name="username"
              type="text"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="password">Password</label>
            <input
              className="signUpInput"
              id="password"
              name="password"
              type="text"
              onChange={this.handleChange}
              value={this.state.password}
            />

          </Form.Group>

          <Form.Group>
            <label htmlFor="firstName">First Name</label>
            <input
              className="signUpInput"
              id="firstName"
              name="firstName"
              type="text"
              onChange={this.handleChange}
              value={this.state.firstName}
            />

          </Form.Group>
          <Form.Group>
            <label htmlFor="lastName">Last Name</label>
            <input
              className="signUpInput"
              id="lastName"
              name="lastName"
              type="text"
              onChange={this.handleChange}
              value={this.state.lastName}
            />

          </Form.Group>
          <Form.Group>
            <label htmlFor="email">Email</label>
            <input
              className="signUpInput"
              id="email"
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.email}
            />

          </Form.Group>
          <Button className="mt-3" type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SignUpForm;