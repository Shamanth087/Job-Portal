import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <div>

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/admin" className="navbar-brand">DreamJob.com</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <Link to = "/alljobs" className="nav-link">All Jobs</Link>   

                        </li>
                        <li className="navbar-item">
                        <Link to = "/addjob" className="nav-link">Add Job</Link>   

                        </li>
                        <li className="navbar-item">
                        <Link to = "/jobtype" className="nav-link">Add Job Type</Link>   

                        </li>
                       
                    </ul>
                </div>
            </nav>
            </div>
        );




    }





}