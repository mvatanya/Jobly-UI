import React, { Component } from "react";
import JoblyApi from "./JoblyApi"
import JobCard from './JobCard'
import { Redirect } from 'react-router-dom'
class CompanyDetails extends Component {
  
  constructor(props) {
    super(props)
    this.state = { company: {name: "", description:""},jobs : []}

  }
  
  async componentDidMount() {
    let requestCompanyHandle = this.props.match.params.handle.toLowerCase()
    let companyResponse = await JoblyApi.getCompany(requestCompanyHandle)
    let jobsIDInCompany = companyResponse.jobs.map(ele => ele.id)
    let searchJobsAll = await JoblyApi.getJobs()
    let searchJob = searchJobsAll.filter(ele => jobsIDInCompany.includes(ele.id))
    this.setState({ jobs: searchJob, company: {name: companyResponse.name, description:companyResponse.description} })
  }
  render(){

    if (Object.keys(this.props.user).length === 0) {
      return <Redirect to="/login" />
    } 
    let jobs = this.state.jobs.map(job=>
                <div key={job.id}>
                  <JobCard key={job.id} {...job} username={this.props.user.username}/>
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