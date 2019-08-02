import React, { Component } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import JoblyApi from "./JoblyApi"


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
    <div>
    <button name="login"onClick={this.loginOrSignup}>LogIn</button> <button  name="signup" onClick={this.loginOrSignup}>SignUp</button>
    {this.state.isLogin ? <LoginForm history={this.props.history} checkToken={this.props.checkToken} userInput={this.userInput}/> : <SignUpForm history={this.props.history} checkToken={this.props.checkToken} userSignUp={this.userSignUp}/>}
    </div>
    ) 
  }
    
} 

export default LoginSignUpForm