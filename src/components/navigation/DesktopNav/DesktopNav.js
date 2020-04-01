import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ROUTE from '../routes';
import './DesktopNav.css';

export class DesktopNav extends Component {
    render() {
        return (
            <header className="navigation-bar">
                <div className="content-link">
                    <Link className="nav-button home" hidden={false} to={ROUTE.LANDING}>
                        Rajeev Goonie
                    </Link>
                </div>
                
                
                <div className="content-links">
                    <Link className="nav-button about" to={ROUTE.ABOUT}>About</Link>
                    <Link className="nav-button blogs" to={ROUTE.BLOGS}>Blogs</Link>
                    <Link className="nav-button projects" to={ROUTE.PROJECTS}>Projects</Link>
                    <Link className="nav-button contact" to={ROUTE.CONTACT}>Contact</Link>
                </div>

            </header>
        )
    }
}

export default DesktopNav;
