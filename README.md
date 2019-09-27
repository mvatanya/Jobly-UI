# Jobly

This is a job searching app with React and using authentication with JWTs. 

Backend code is provided by Rithm School. 

### Key learnings;

  * Design component hierarchies is very important skills in learning React
  * Creating API helper for centralizing AJAX calls 
  * React Component Lifecycle
  * Authentication with JWTs which stored in local storage
  * Hydration - to not loose data when refreshing a page
  * Using parameterized queries to protect against SQL injection

### App Information
#### Component Hierarchy

```
  App
  ├── Navigation
  └─┬ Routes
    ├─┬ Companies
    │ ├── CompanyCard
    │ └── Search
    ├─┬ Company
    │ └── JobCard
    ├── Home
    ├─┬ Jobs
    │ │ └── JobCard
    │ └── Search
    ├─┬ Login
    │ └── Alert
    ├── PrivateRoute  (don't worry about this for now)
    └─┬ Profile
      └── Alert
```

#### Routes
```
    /
    Homepage — welcome message
    
    /companies
    List all companies
    
    /companies/apple
    View details of this company
    
    /jobs
    List all jobs
    
    /login
    Login/signup form
    
    /profile
    Edit profile page
  ```

### Getting Started
1. Clone this repo
2. cd into the "backend" directory, install required packages, create and seed database, and start the server. (Make sure that you have postgreSQL installed)
```
  cd backend
  npm install
  createdb jobly
  psql jobly < data.sql
  nodemon server.js 

```
3. cd into the "frontend" directory, install required packages, then start the app

```
  cd frontend
  npm install
  npm start
```
