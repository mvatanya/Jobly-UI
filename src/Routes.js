import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Homepage from './Homepage'
import Company from './Company'
import Job from './Job'
import Logout from "./Logout"
import LoginSignUpForm from "./LoginSignupForm"


import CompanyDetails from './CompanyDetails'


class Routes extends Component {

  
  render(){
console.log('this.props.user', this.props.user)
    return (
    <Switch>
      <Route exact path="/" render={() => <Homepage user={this.props.user}/>} />
      <Route exact path="/companies" render={() => <Company user={this.props.user}/>} />
      <Route exact path="/companies/:handle" render={rtProps => <CompanyDetails {...rtProps} user={this.props.user}/>} />
      <Route exact path="/jobs" render={() => <Job user={this.props.user}/>} />
      <Route exact path="/login" render={rtProps => <LoginSignUpForm {...rtProps} user={this.props.user} checkToken={this.props.checkToken} {...rtProps}/>} />
      <Route exact path="/logout" render={()=> <Logout checkToken={this.props.checkToken}/> } />
      <Redirect to="/login" />

    </Switch>
    )
  }
}

export default Routes;