import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ROUTE from './routes';
import '../../css/Navigation.css';

export class Navigation extends Component {
    render() {
        return (
            <header className="navigation-bar">
                <Link className="nav-button home" to={ROUTE.LANDING}>Rajeev Goonie</Link>

                <div className="main-content">
                    <Link className="nav-button about" to={ROUTE.ABOUT}>About</Link>
                    <Link className="nav-button blogs" to={ROUTE.BLOGS}>Blogs</Link>
                    <Link className="nav-button projects" to={ROUTE.PROJECTS}>Projects</Link>
                    <Link className="nav-button contact" to={ROUTE.CONTACT}>Contact</Link>
                </div>
            
            </header>
        )
    }
}

export default Navigation
