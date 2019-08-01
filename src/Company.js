import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import JoblyApi from './JoblyApi'
import CompanyCard from './CompanyCard'
import SearchBoxForm from './SearchBoxFom'


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

    return (

      <div >
        {this.state.loading ? <div>Loading...</div> :
        <div>
        <SearchBoxForm searchInput={this.searchInputForm}/>
        {companies.map(company =>
          <CompanyCard key={company.handle} {...company} />
        )}

        <Button variant="primary">Primary</Button>
        </div>}
      </div>



    )
  }
}

export default Company