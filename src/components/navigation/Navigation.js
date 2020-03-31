import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ROUTE from './routes';

export class Navigation extends Component {
    render() {
        return (
            <header style={headerStyle} className="navigation-bar">
                <div style={contentLinks}><Link style={buttonLinkStyle} className="nav-button home" hidden={false} to={ROUTE.LANDING}>Rajeev Goonie</Link></div>
                <div style={contentLinks} className="content-links">
                    <Link style={buttonLinkStyle} className="nav-button about" to={ROUTE.ABOUT}>About</Link>
                    <Link style={buttonLinkStyle} className="nav-button blogs" to={ROUTE.BLOGS}>Blogs</Link>
                    <Link style={buttonLinkStyle} className="nav-button projects" to={ROUTE.PROJECTS}>Projects</Link>
                    <Link style={buttonLinkStyle} className="nav-button contact" to={ROUTE.CONTACT}>Contact</Link>
                </div>
            </header>
        )
    }
}

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px #930110 solid",
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0",
}


const contentLinks = {
    padding: "10px 7px",
    margin: "10px 7px",
}

const buttonLinkStyle = {
    padding: "10px 7px",
    margin: "10px 7px",
    textDecoration: "none",
    fontSize: "3vh",
}

export default Navigation
