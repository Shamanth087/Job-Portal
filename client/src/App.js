import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


import Home from './components/home';
import Register  from './components/register';
import Admin from "./components/admin.component";
import AllJobs from "./components/all-jobs.component";
import AddJob from "./components/add-job.component";
import EditJob from "./components/edit-job.component";
import JobType from "./components/job-type.component";
import ProtectedRouter from "./components/protected";
// import Navbar from "./components/navbar.component";

 


import './App.css';

class App extends Component {
  render() {
  
  
   return (
      <div> 
        
    <Router>
      <div className="container"> </div>

      <ProtectedRouter path="/" component ={Home} exact/>
      <Route path='/register' component={Register}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/alljobs' component={AllJobs}/>
      <Route path='/addjob' component={AddJob}/>
      <Route path='/editjob/:id' component={EditJob}/>
      <Route path='/jobtype' component={JobType}/>
      <ToastContainer/>


    
    </Router>
     {/* <form className="login-form">
      <h1>
        <span className="font-weight-bold">mywebsite</span>.com
        </h1>
        <h2>welcome</h2>
         <formgroup>
           <label>Email</label>
          <input type="email" placeholder="Email"/>
        </formgroup>
        <br/>
        <formgroup>
        <label>Password</label>
          <input type="password" placeholder="Password"/>
        </formgroup>
        <formgroup>
          <button>log in</button>
        </formgroup>
        <formgroup> 
         

       
          
        </formgroup>
     </form>
     <Link to="/register">  <button>Register</button></Link> */}
     </div>
   );
     
  }   
}

export default App;
