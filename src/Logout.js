import React, { Component } from 'react';
import { Redirect} from 'react-router-dom'

class Logout extends Component{

  clearLocalStorage(){
    console.log("I am here clearlocal")
    localStorage.removeItem('token')
  }
  
  render(){
    console.log("I am here logout render")
    this.clearLocalStorage()
    return <Redirect to="/login" />
  }

}

export default Logout