import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ROUTE from '../routes';
import MobileNav from '../MoblieNav/MobileNav'

import './Navigation.css';

export class Navigation extends Component {
    render() {
        return (
            <header className="navigation">
                <nav className="desktop-nav">
                    <div className="mobile-nav">
                        <MobileNav/>
                    </div>
                    <div className="nav-logo"><Link to={ROUTE.LANDING}>Rajeev Goonie</Link></div>
                    <div className="spacer"/>
                    <div className="nav-items">
                        <ul>
                            <li><Link to={ROUTE.ABOUT}> About    </Link></li>
                            <li><Link to={ROUTE.BLOGS}> Blogs    </Link></li>
                            <li><Link to={ROUTE.PROJECTS}> Projects </Link></li>
                            <li><Link to={ROUTE.CONTACT}> Contact  </Link></li>

                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navigation;
