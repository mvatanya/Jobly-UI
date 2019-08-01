import React, { Component } from "react";
import { BrowserRouter  } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { token: ""}

  }
  async componentDidMount() {
    
  }

  

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
