import React, { Component } from "react";
import './App.css'

class Homepage extends Component {
  render(){
    return (
     <div className="text-center background-image">
       <div className="title-homepage">
        <h1 className="display-4">Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        <p>Welcome!</p>
       </div>
     </div>
    )
  }
}

export default Homepage