import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Homepage from './Homepage'
import Company from './Company'
import Job from './Job'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

import CompanyDetails from './CompanyDetails'


class Routes extends Component {

  
  render(){

    return (
    <Switch>
      <Route exact path="/" render={() => <Homepage />} />
      <Route exact path="/companies" render={() => <Company />} />
      <Route exact path="/companies/:handle" render={rtProps => <CompanyDetails {...rtProps} />} />
      {/* <NavLink to="/jobs" className="mr-2">Jobs</NavLink> */}
      <Route exact path="/jobs" render={() => <Job />} />
      <Route exact path="/login" render={() => <LoginForm />} />
      <Route exact path="/signup" render={() => <SignUpForm />} />

    </Switch>
    )
  }
}

export default Routes;