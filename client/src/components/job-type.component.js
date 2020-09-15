import React, {Component} from 'react';
import axios from 'axios';
import Navbar from "./navbar.component";


export default class JobType extends Component {

    constructor(props) {
        super(props);

        this.onChangeJobType = this.onChangeJobType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            jobtype:'',
        }
    }

    onChangeJobType(e) {
        this.setState({
            jobtype: e.target.value
        });
        
    }

    onSubmit(e) {
        e.preventDefault();

        const roles = {
            jobtype: this.state.jobtype,
        }


        console.log(roles);

        axios.post('http://localhost:8080/rolesap/add',roles)
            .then(res => console.log(res.data));

        this.setState({
            jobtype:''
        })
    }



    render() {
        return(
            <div className="jobtype">
                <Navbar />

                <h3 className="addjt"> Add Job Type</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>jobtype: </label>
                        <input type="text"

                            required
                            className="form-control"
                            value={this.state.jobtype}
                            onChange={this.onChangeJobType}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Job Type" className="btn btn-primary"/>
                    </div>
                </form>
            

            </div>
        )
      
    }
}