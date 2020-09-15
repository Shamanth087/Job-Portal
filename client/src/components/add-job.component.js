import React, {Component} from 'react';
import axios from 'axios';
import Navbar from "./navbar.component";

 export default class AddJob extends Component {

     constructor(props) {

         super(props);

         this.onChangeJobType = this.onChangeJobType.bind(this);
         this.onChangeDescription = this.onChangeDescription.bind(this);
         this.onChangeCompany = this.onChangeCompany.bind(this);
         this.onChangeApply = this.onChangeApply.bind(this); 
         this.onSubmit = this.onSubmit.bind(this);
        

         this.state = {

             jobtype:'',
             description:'',
             company:'',
             apply:'',
             roles:[]

         }
     }

     componentDidMount() {
        axios.get('http://localhost:8080/rolesap/')
            .then(response => {
                if (response.data.length>0) {
                    this.setState({
                        roles:response.data.map(roles => roles.jobtype),
                        jobtype:response.data[0].jobtype
                    })
                }
            })
     }

     onChangeJobType(e) {
         this.setState({
             jobtype: e.target.value
         });
     }
     onChangeDescription(e) {
         this.setState({
             description: e.target.value
         });
     }

     onChangeCompany(e) {
         this.setState({
             company: e.target.value
         });
     }

     onChangeApply(e) {
         this.setState({
             apply: e.target.value
         });
     }

     onSubmit(e) {
         e.preventDefault();

         const job = {
             jobtype: this.state.jobtype,
             description: this.state.description,
             company: this.state.company,
             apply:this.state.apply
         }

         console.log(job);

         axios.post('http://localhost:8080/jobsap/add',job)
            .then(res => console.log(res.data));

         window.location = '/alljobs';
     }

     render() {
         return(
             <div>
                 <Navbar />

                 <div className='addjob'>
                     <h3> Create New Jobs</h3>
                     <form onSubmit={this.onSubmit}>
                         <div className="form-group">
                             <label>jobType:</label>
                             <select ref="userInput"
                                 required
                                 className="form-control"
                                 value={this.state.jobtype}
                                 onChange={this.onChangeJobType}>
                                  {
                                      this.state.roles.map(function(roles) {
                                          return <option
                                          key={roles}
                                          value={roles}>{roles}
                                          </option>
                                      })
                                  }   
                           </select>
                         </div>

                         <div className="form-group">
                             <label>Description:</label>
                             <input type="text"
                                 required
                                 className="form-control"
                                 value={this.state.description}
                                 onChange={this.onChangeDescription}
                                 />

                        
                         </div>

                         <div className="form-group">
                             <label>Company:</label>
                             <input type="text"
                                 required
                                 className="form-control"
                                 value={this.state.company}
                                 onChange={this.onChangeCompany}
                                 />

                        
                         </div>

                         <div className="form-group">
                             <label>Apply:</label>
                             <input type="text"
                                 required
                                 className="form-control"
                                 value={this.state.apply}
                                 onChange={this.onChangeApply}
                                 />

                        
                         </div>

                         <div>
                             <input type= "submit" value="Add Job" className="add"/>
                         </div>
                     </form>
                 </div>
           
           
         </div>
         )
      
     }
 }