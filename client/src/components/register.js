import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';


import '../App.css';

 class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname:'',
            lastname:'',
            email: '',
            password:'',
            

        }
    }


    

    onChangeFirstName(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    
    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        // toast.success("Success Notification!");

        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }

        console.log(user);
        axios.post('http://localhost:8080/userap/addu',user)
            //  .then(res => console.log(res.data));

            .then(res => {
                this.props.history.push('/');
            })
            .catch(err => {
                toast.error(err.response.data);
            })
            

        // window.location = '/';
         
    }






  render() {
  
  
   return (
      <div>
        
       

        <div className="jsreg">
                     <h3> Sign Up</h3>
                     <form onSubmit={this.onSubmit}>
                     <div className="form-group">
                             <label>firstname:</label>
                             <input type="text"
                                 required
                                 className="form-control"
                                 value={this.state.firstname}
                                 onChange={this.onChangeFirstName}
                                 />

                        
                         </div>

                         <div className="form-group">
                             <label>lastname:</label>
                             <input type="text"
                                 required
                                 className="form-control"
                                 value={this.state.lastname}
                                 onChange={this.onChangeLastName}
                                 />

                        
                         </div>

                         <div className="form-group">
                             <label>Email:</label>
                             <input type="text"
                                 required
                                 className="form-control"
                                 value={this.state.email}
                                 onChange={this.onChangeEmail}
                                 />

                        
                         </div>

                         <div className="form-group">
                             <label>Password:</label>
                             <input type="password"
                                 required
                                 className="form-control"
                                 value={this.state.password}
                                 onChange={this.onChangePassword}
                                 />

                        
                         </div>

                         <div className="form-group">
                             <input type= "submit" value="Submit" className="btnrej"/>
                         </div>
                     </form>
                 </div>


     </div>
   );
     
  }   
}
export default Register;

