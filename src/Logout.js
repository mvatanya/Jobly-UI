import React, { Component } from 'react';
import { Redirect} from 'react-router-dom'

class Logout extends Component{

  clearLocalStorage(){
    localStorage.removeItem('token')
    this.props.checkToken()
  }
  
  render(){
    this.clearLocalStorage()
    return <Redirect to="/login" />
  }

}

export default Logout