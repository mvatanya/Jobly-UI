import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Homepage from './Homepage'
import Company from './Company'
import Job from './Job'
import LoginSignUpForm from "./LoginSignupForm"


import CompanyDetails from './CompanyDetails'


class Routes extends Component {

  
  render(){

    return (
    <Switch>
      <Route exact path="/" render={() => <Homepage user={this.props.user}/>} />
      <Route exact path="/companies" render={() => <Company user={this.props.user}/>} />
      <Route exact path="/companies/:handle" render={rtProps => <CompanyDetails {...rtProps} user={this.props.user}/>} />
      {/* <NavLink to="/jobs" className="mr-2">Jobs</NavLink> */}
      <Route exact path="/jobs" render={() => <Job user={this.props.user}/>} />
      <Route exact path="/login" render={() => <LoginSignUpForm user={this.props.user} checkToken={this.props.checkToken}/>} />
      <Redirect to="/login" />

    </Switch>
    )
  }
}

export default Routes;