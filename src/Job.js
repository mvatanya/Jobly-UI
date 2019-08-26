import React, { Component } from 'react';
import JoblyApi from './JoblyApi'
import JobCard from './JobCard'
import SearchBoxForm from './SearchBoxFom'
import { Redirect } from 'react-router-dom'

class Job extends Component {
  constructor(props) {
    super(props)
    this.state = { jobs: [], searchTerm: "", loading: true }
    this.searchInputForm = this.searchInputForm.bind(this)
  }

  async componentDidMount() {
    // if (Object.keys(this.props.user).length === 0) return
    let jobsResponse = await JoblyApi.getJobs()
    this.setState({ jobs: jobsResponse, loading: false })

  }

  async searchInputForm(input) {
    this.setState({ loading: true })
    let searchJobs = await JoblyApi.getJobs(input)
    this.setState({ jobs: searchJobs, loading: false })
  }



  render() {
    let jobs = this.state.jobs
    if (Object.keys(this.props.user).length === 0) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        {this.state.loading ? <div>Loading</div> :
          <div>
            <SearchBoxForm searchInput={this.searchInputForm} />
            {jobs.map(job =>
              <JobCard key={job.id} {...job} username={this.props.user.username} />
            )}
          </div>}
      </div>


    )
  }
}

export default Job