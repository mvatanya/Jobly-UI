import React, { Component } from "react"

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

    this.handleChange = this.handleChange.bind(this)
    this.inputSearch = this.inputSearch.bind(this)
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  // TODO: NEED TO CHANG!!!!!
  inputSearch = evt => {
    evt.preventDefault();
    this.props.searchInput(this.state.input)
  }

  render() {

    return (
      <div>
        <form onSubmit={this.inputSearch}>
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
            id="password"
            name="password"
            type="text"
            onChange={this.handleChange}
            value={this.state.password}
          />

          <br />
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={this.handleChange}
            value={this.state.firstName}
          />

          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={this.handleChange}
            value={this.state.lastName}
          />

          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;