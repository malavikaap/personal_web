import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <div className="nav-class">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/aboutme">About Me</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
