import React, { Component } from "react"
import { Button, Form, Card } from 'react-bootstrap';
import './LoginForm.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  inputLogin = async evt => {
    evt.preventDefault();
    await this.props.userInput(this.state.username, this.state.password)
    await this.props.checkToken()
    this.props.history.push("/jobs")
  }


  render() {

    return (
      <div >
        <Form onSubmit={this.inputLogin} >
          <Form.Group>
            <label htmlFor="id" >Username</label>
            <input
              className="logInInput"
              id="username"
              name="username"
              type="text"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="password" >Password</label>
            <input
              className="logInInput"
              id="username"
              name="password"
              type="text"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button className="login-submit" type="submit" >Submit</Button>
        </Form>
      </div>
      
    )
  }
}

export default Login;