import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';


import '../App.css';

 class Home extends Component {
    constructor(props) {
        super(props);

       
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            
            email: '',
            password:'',
            

        }

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
            
            email: this.state.email,
            password: this.state.password
        }

        console.log(user);
        axios.post('http://localhost:8080/userap/',user)
        .then(res => {
            this.props.history.push('/alljobs');
        })
        .catch(err => {
            toast.error(err.response.data);
        })

       
         
    }







  render() {
  
  
   return (
      <div>
        
       

        <div className="login-box">
                     <div className="signH"><h2> Sign In</h2></div>
                     <form onSubmit={this.onSubmit}>
                    

                        
                         

                         <div className="form-group">
                             <label>email:</label>
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

                         <div  className="form-group">
                             <input type= "submit" value="Submit" className="btn-btn" />
                             <Link to="/register">  <button className= 'regi'>Register</button></Link> 
                         </div>
                        
                     </form>
                 </div>
           
  
     </div>
   );
}   
}   

export default Home;
