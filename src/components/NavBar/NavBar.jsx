import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css";

const NavBar = (props) => (

    <div className="component">
        <div>
            <Link to='/aboutMe' className=''>About Me</Link>
        </div>
        <div>
            <Link to='/experience' className=''>Experience</Link>
        </div>
        <div>
            <Link to='/skills' className=''>Skills</Link>
        </div>
        <div>
            <Link to='/projects' className=''>Projects</Link>
        </div>
        <div>
            <Link to='/educationAndInterests' className=''>Education and Interests</Link>
        </div>
        <div>
            <Link to='/contact' className=''>Contact</Link>
        </div>
    </div>

);

export default NavBar