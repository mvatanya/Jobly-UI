import React, { Component } from 'react';
import JoblyApi from './JoblyApi'
import CompanyCard from './CompanyCard'
import SearchBoxForm from './SearchBoxFom'
import { Redirect } from 'react-router-dom'



class Company extends Component {
  constructor(props) {
    super(props)
    this.state = { companies: [], searchTerm: "", loading: true }
    this.searchInputForm = this.searchInputForm.bind(this)
  }

  async componentDidMount() {
    let companiesResponse = await JoblyApi.getCompanies()
    this.setState({ companies: companiesResponse, loading: false})
    
  }

  async searchInputForm(input){
    this.setState({loading:true})
    let searchCompanies = await JoblyApi.getCompanies(input)
    this.setState({companies: searchCompanies, loading: false})
  }

  

  render() {
    let companies = this.state.companies
    console.log('Object.keys(this.props.user....', Object.keys(this.props.user))
    if (Object.keys(this.props.user).length === 0) {
      return <Redirect to="/login" />
    } 
    return (
      <div >
        {this.state.loading ? <div>Loading...</div> :
        <div>
        <SearchBoxForm searchInput={this.searchInputForm}/>
        {companies.map(company =>
          <CompanyCard key={company.handle} {...company} />
        )}
        </div>}
      </div>



    )
  
  }
}

export default Company