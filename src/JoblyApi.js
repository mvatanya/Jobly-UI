import axios from 'axios'
import jwt from 'jsonwebtoken';

class JoblyApi {

  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = ( // TODO: for now, hardcode token for "testing". Change this once have authenticate route
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyMiIsImlhdCI6MTU2NDU5MjAyMX0.Q8L-laSfna2ynebbOXfz_Bcp-dLQSld-c9IpMY5oAQw");

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompanies(data) {

    let res = await this.request(`companies/`, { search: data });
    return res.companies;
  }



  static async getCompany(handle) {
    console.log("I am here at api helper", handle)
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs(data) {
    let res = await this.request(`jobs/`, { search: data });
    return res.jobs;
  }

  static async login(username, password) {
    debugger
    let res = await this.request(`login/`, { username: username, password: password }, "post")
    let token = res.token;
    localStorage.setItem("token", token)
    return token

  }

  static async signUp(username, password, firstName, lastName, email) {
    let res = await this.request(`users/`,
      { username: username, password: password, first_name: firstName, last_name: lastName, email: email }, "post")
    let token = res.token;
    localStorage.setItem("token", token)
    return token

  }

  static async authenticate(username){
    let res = await this.request(`users/${username}`, {username: username}, 'get')
    console.log("RES", res)
    return res.user
  }


}

export default JoblyApi 
