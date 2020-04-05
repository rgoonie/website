import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {styled} from '@material-ui/core';
import * as ROUTE from '../routes';
import MobileNav from '../MoblieNav/MobileNav'

import './Navigation.css';

const StyledButton = styled(Button)({
    textTransform: "none",
    textDecoration: "none",
    borderRadius: "10px",
    margin: "0",
    padding: "0",
    color: "#f2f2f2",
    fontFamily: "'Courier New', Courier, monospace",
});

export class Navigation extends Component {
    render() {
        return (
            <header className="navigation">
                <nav className="desktop-nav">
                    <div className="mobile-nav">
                        <MobileNav/>
                    </div>
                    <div className="nav-logo"><Link to={ROUTE.LANDING}><StyledButton>Rajeev Goonie</StyledButton></Link></div>
                    <div className="spacer"/>
                    <div className="nav-items">
                        <ul>
                            <li><Link to={ROUTE.ABOUT}>    <StyledButton> About    </StyledButton></Link></li>
                            <li><Link to={ROUTE.BLOGS}>    <StyledButton> Blog     </StyledButton></Link></li>
                            <li><Link to={ROUTE.PROJECTS}> <StyledButton> Projects </StyledButton></Link></li>
                            <li><Link to={ROUTE.CONTACT}>  <StyledButton> Contact  </StyledButton></Link></li>

                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navigation;
