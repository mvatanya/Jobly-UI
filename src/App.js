import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";

import jwt from 'jsonwebtoken';
import JoblyApi from './JoblyApi'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      user:{},
      loading: true
    }

    this.checkToken = this.checkToken.bind(this)
  }

  async componentDidMount() {
    await this.checkToken()
    this.setState({
      loading: false
    })
  
  }

  async checkToken(){
    try{
      let username = jwt.decode(localStorage.getItem("token")).username;
      let user = await JoblyApi.authenticate(username)
      if(user){
        this.setState({user})
      }
    }
    catch(err){
      // throw new Error("Something went wrong...")
      return "error"

    }
  }

  render() {
    
    if(this.state.loading){
      return <div>Loading....</div>
    }
    return (
      <div>
        <BrowserRouter>
          <NavBar user={this.state.user} />
          <Routes user={this.state.user} checkToken={this.checkToken}/>
        </BrowserRouter>


      </div>
    )
  }
}

export default App;
