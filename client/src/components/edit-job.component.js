import React, {Component} from 'react';
import axios from 'axios';
import Navbar from "./navbar.component";

 export default class EditJob extends Component {

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
        axios.get('http://localhost:8080/jobsap/' +this.props.match.params.id)
        .then(response => {
            this.setState({
                jobtype:response.data.jobtype,
                description:response.data.description,
                company:response.data.company,
                apply:response.data.apply
            })
        })
        .catch(function (error) {
            console.log(error);
        })
         
        axios.get('http://localhost:8080/rolesap/')
            .then(response => {
                if (response.data.length>0) {
                    this.setState({
                        roles:response.data.map(roles => roles.jobtype),
                        
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

         axios.post('http://localhost:8080/jobsap/update/' +this.props.match.params.id,job)
            .then(res => console.log(res.data));

         window.location = '/alljobs';
     }

     render() {
         return(
             <div>
                 <Navbar />

                 <div className="editjob">
                     <h3> Edit Jobs</h3>
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

                         <div className="form-group">
                             <input type= "submit" value="Edit Job" className="btnedit"/>
                         </div>
                     </form>
                 </div>
           
           
         </div>
         )
      
     }
 }