import React, { Component } from "react"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }

    this.handleChange = this.handleChange.bind(this)
    this.inputLogin = this.inputLogin.bind(this)
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  // TODO: NEED TO CHANG!!!!!
  inputLogin = evt => {
    evt.preventDefault();
    this.props.searchInput(this.state.username, this.state.password)
  }

  render() {

    return (
      <div>
        <form onSubmit={this.inputLogin}>
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