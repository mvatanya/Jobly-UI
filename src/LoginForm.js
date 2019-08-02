import React, { Component } from "react"

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
    this.props.checkToken()
  }
  

  render() {

    return (
      <div>
        <form onSubmit={this.inputLogin}  >
          <label htmlFor="id">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={this.handleChange}
            value={this.state.username}
          />

          <br />
          <label htmlFor="password">Password</label>
          <input
            id="username"
            name="password"
            type="text"
            onChange={this.handleChange}
            value={this.state.password}
          />

          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;