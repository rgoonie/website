import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ROUTE from './routes';

export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideHomeLink: true,
        };
    }

    showHome(){
        this.setState({hideHomeLink: false});
    }

    hideHome(){
        this.setState({hideHomeLink: true});
    }

    render() {
        return (
            <header style={headerStyle} className="navigation-bar">
                <div style={contentLinksStyle} >
                    <Link style={buttonLinkStyle} className="nav-button home" hidden={this.state.hideHomeLink} to={ROUTE.LANDING} onClick={ () => this.hideHome() }>
                        Rajeev Goonie
                    </Link>
                </div>
                
                <div style={contentLinksStyle} className="content-links">
                    <Link style={buttonLinkStyle} className="nav-button about" to={ROUTE.ABOUT} onClick={ () => this.showHome() }>About</Link>
                    <Link style={buttonLinkStyle} className="nav-button blogs" to={ROUTE.BLOGS} onClick={ () => this.showHome() }>Blogs</Link>
                    <Link style={buttonLinkStyle} className="nav-button projects" to={ROUTE.PROJECTS} onClick={ () => this.showHome() }>Projects</Link>
                    <Link style={buttonLinkStyle} className="nav-button contact" to={ROUTE.CONTACT} onClick={ () => this.showHome() }>Contact</Link>
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


const contentLinksStyle = {
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
