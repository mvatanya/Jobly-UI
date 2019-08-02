import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";

import jwt from 'jsonwebtoken';
import JoblyApi from './JoblyApi'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { _token: {}, user:{} }

    this.checkToken = this.checkToken.bind(this)
  }

  async componentDidMount() {
    this.checkToken()
    // let token = localStorage.getItem("token")
    // // console.log("TOKEN", token)
    // if (token !== null) {
    //   console.log("TOKEN in if", token)
    //   this.setState({ _token: token})
      // console.log("APP START STATE", this.state._token)
  
  }

  async checkToken(){
    
    try{
      console.log("username",jwt.decode(localStorage.getItem("token")))
      let username = jwt.decode(localStorage.getItem("token")).username;
      
      let user = await JoblyApi.authenticate(username)
      console.log("I am user", user)
      if(user){
        this.setState({user: user})
        
      }
    }
    catch(err){
      return "error"

    }
    
  }

  render() {
    
    console.log("I am rendering",this.state.user)
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
