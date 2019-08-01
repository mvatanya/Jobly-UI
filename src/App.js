import React, { Component } from "react";
import { BrowserRouter  } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";

class App extends Component {

  

  render(){
   
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes  />
        </BrowserRouter>

       
      </div>
    )
  }
}

export default App;
