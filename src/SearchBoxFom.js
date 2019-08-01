import React, { Component } from "react"

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
        <div>
          <form onSubmit={this.inputSearch}>
          <input
            name="input"
            type="text"
            onChange={this.handleChange}
            placeholder="Enter Search Term"
            value={this.state.input}
          />
          <button>Submit</button>
          </form>
        </div>
      )
    }
  }

export default SearchBoxForm;