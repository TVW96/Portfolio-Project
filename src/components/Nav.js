import React from 'react';
import "./Nav.css";
import ProfilePic from "../IMG/jayZ.jpg";

function Nav() {
    return (
        <nav>
            <div>
                <p>github</p>
            </div>
            <div>
                <p>stackoverflow</p>
            </div>
            <div>
                <p>LinkedIn</p>
            </div>
            <div>
                <img src={ProfilePic} alt="profile-pic" className='nav-profile' />
            </div>
        </nav>
    )
}

export default Nav