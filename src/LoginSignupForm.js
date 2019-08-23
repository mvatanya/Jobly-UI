import React, { Component } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import JoblyApi from "./JoblyApi"
import { Button } from 'react-bootstrap';


class LoginSignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {isLogin: true, username:"", password:"", firstName:"", lastName:"", email:""}
    this.loginOrSignup = this.loginOrSignup.bind(this)
    this.userInput = this.userInput.bind(this)
  }

  loginOrSignup(evt){
      if(evt.target.name === "login"){
        this.setState({isLogin : true})
      }else{
        this.setState({isLogin : false})
      }


  }
  
  async userInput(username, password){
    await JoblyApi.login(username, password)
  }

  async userSignUp(username, password, firstName, lastName, email){
    await JoblyApi.signUp(username, password, firstName, lastName, email);
  }
  
  
  
  render(){
    return(
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-5">
      <Button name="login" className="mb-3" onClick={this.loginOrSignup}>Log In</Button> <Button  name="signup" className="mb-3" onClick={this.loginOrSignup}>SignUp</Button>
      {this.state.isLogin ? <LoginForm history={this.props.history} checkToken={this.props.checkToken} userInput={this.userInput}/> : <SignUpForm history={this.props.history} checkToken={this.props.checkToken} userSignUp={this.userSignUp}/>}
    </div>
    ) 
  }
    
} 

export default LoginSignUpForm

