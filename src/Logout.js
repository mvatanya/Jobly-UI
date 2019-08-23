import React, { Component } from 'react';
import { Redirect} from 'react-router-dom'

class Logout extends Component{

  // componentDidMount(){
  //   this.clearLocalStorage()
  // }

  async clearLocalStorage(){
    localStorage.removeItem('token')
    // debugger
    await this.props.checkToken()
  }
  
  render(){
    this.clearLocalStorage()
    return <Redirect to="/login" />
  }

}

export default Logout