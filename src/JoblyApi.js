import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    let token = localStorage.getItem("token");
    paramsOrData._token = token;

    let url = `http://localhost:3001/${endpoint}`;

    // when running npm build,it knows that the node_env will be production
    if (process.env.NODE_ENV === "production") {
      url = `https://jobly-api.herokuapp.com/${endpoint}`;
    }

    try {
      return (await axios({
        method: verb,
        url,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    } catch (err) {
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompanies(data) {
    let res = await this.request(`companies/`, { search: data });
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs(data) {
    let res = await this.request(`jobs/`, { search: data });
    return res.jobs;
  }

  static async getUserJobs(username) {
    let res = await this.request(`users/${username}`, { username: username });
    return res.jobs;
  }

  static async login(username, password) {
    let res = await this.request(`login/`, { username: username, password: password }, "post");
    let token = res.token;
    localStorage.setItem("token", token);
    return token;
  }

  static async signUp(username, password, firstName, lastName, email) {
    let res = await this.request(
      `users/`,
      { username: username, password: password, first_name: firstName, last_name: lastName, email: email },
      "post"
    );
    let token = res.token;
    localStorage.setItem("token", token);
    return token;
  }

  static async authenticate(username) {
    let res = await this.request(`users/${username}`, { username: username });
    return res.user;
  }

  static async appliedJob(id, username) {
    let res = await this.request(`jobs/${id}/apply`, { username: username }, "post");

    return res.message;
  }
}

export default JoblyApi;
