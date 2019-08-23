import React, { Component } from "react"
import { Button } from 'react-bootstrap';

  class SearchBoxForm extends Component {
    constructor(props){
      super(props);
      this.state = {input: ""}
      
      this.handleChange = this.handleChange.bind(this)
      this.inputSearch = this.inputSearch.bind(this)
    }
    handleChange = evt => {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    };

    inputSearch = evt => {
      evt.preventDefault();
      this.props.searchInput(this.state.input)
    }

    render(){
      
      return(
        <div >
          <form onSubmit={this.inputSearch} className="form-inline" >
          <input
            className="mt-4 mb-4 ml-auto"
            style={{ width: '60%', height:"45px" }}
            name="input"
            type="text"
            onChange={this.handleChange}
            placeholder="Enter Search Term"
            value={this.state.input}
          />
          <Button type="submit" variant="primary" className="mr-auto" style={{ height:"45px" }}>Submit</Button>
          </form>
        </div>
      )
    }
  }

export default SearchBoxForm;