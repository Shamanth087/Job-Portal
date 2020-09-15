import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from "./navbar.component";

const Job = props => (
    <tr>
        <td>{props.job.jobtype}</td>
        <td>{props.job.description}</td>
        <td>{props.job.company}</td>
        <td>{props.job.apply}</td>
        <td>
            <Link className="edit" to={"/editjob/"+props.job._id}>edit</Link> |<a className="delete" href="#" onClick={() => {props.deleteJob(props.job._id)}}>delete</a>
            
        </td>
    </tr>
)


export default class AllJobs extends Component {

    constructor(props) {
        super(props);

        this.deleteJob = this.deleteJob.bind(this);

        this.state = {jobsap: []};
    }
    componentDidMount() {
        axios.get('http://localhost:8080/jobsap/')
            .then(response => {
                this.setState({jobsap: response.data});
            })

            .catch((error) => {
                console.log(error);
            })
    }

    deleteJob(id) {
        axios.delete('http://localhost:8080/jobsap/' +id)
            .then(res =>console.log(res.data));

        this.setState({
            jobsap: this.state.jobsap.filter(el =>el._id !==id)
        })    
    }

    jobList() {
        return this.state.jobsap.map(currentjob => {
            return <Job job={currentjob} deleteJob={this.deleteJob} key={currentjob._id}/>
        })
    }

    render() {
        return(
        
        <>
                <Navbar />
           
           <div className="jobsH">
                <h3 className="avi">Jobs Available</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>JobType: </th>
                        <th>Description: </th>
                        <th>Company: </th>
                        <th>Apply:</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                 <tbody>
                {this.jobList()}
                 </tbody>
                </table>
           </div>
         </>  
        )

      
    }
}