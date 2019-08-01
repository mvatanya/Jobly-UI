import React, { Component } from "react";
import JoblyApi from "./JoblyApi"
import JobCard from './JobCard'
class CompanyDetails extends Component {
  
  constructor(props) {
    super(props)
    this.state = { company: {name: "", description:""},jobs : []}

  }
  
  async componentDidMount() {
    let requestCompanyHandle = this.props.match.params.handle.toLowerCase()
    // console.log(requestCompanyHandle)
    let companyResponse = await JoblyApi.getCompany(requestCompanyHandle)
    this.setState({ jobs: companyResponse.jobs, company: {name: companyResponse.name, description:companyResponse.description} })
  }
  render(){
    console.log("HERE", this.state.jobs)
    let jobs = this.state.jobs.map(job=>
                <div key={job.id}>
                  <JobCard key={job.id} {...job}/>
                </div>)
    return (
      <div>
        <div>
          <p>{this.state.company.name}</p>
          <p>{this.state.company.description}</p>
        </div>
        <div>{jobs}</div>
      </div>
    )

  }
}

export default CompanyDetails