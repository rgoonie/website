import React, { Component } from 'react'
import Link from 'react-router-dom';

export class NavButton extends Component {
    render() {
        return (
            <div className="nav-button" style={buttonStyle}>
                <Link to={this.props.to}>{ this.props.children }</Link>
            </div>
        )
    }
}

const buttonStyle = {
    padding: "14px",
    margin: "14px",
    float: "right",
}

export default NavButton
