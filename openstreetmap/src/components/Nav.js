import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css'

function Nav(){
    return(
            <div className="navbar">
                <ul>
                    <li><Link to='/' className="nav-item nav-link active">Home</Link></li>
                    <li><Link to='/categories' className="nav-item nav-link">Categories</Link></li>
                    <li><Link to='/mapping' className="nav-item nav-link">Mapping</Link></li>
                    <li><Link to='/contactus' className="nav-item nav-link">Contact Us</Link></li>
                </ul>
            </div>
);
}

export default Nav;