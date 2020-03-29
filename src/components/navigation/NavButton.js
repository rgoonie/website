import React, { Component } from "react";
import Link from "react-router-dom";

export class NavButton extends Component {
    render() {
        return (
            <Link className="nav-button" style={buttonStyle} to={this.props.to}>
                {this.props.children}
            </Link>
        );
    }
}

const buttonStyle = {
  padding: "14px",
  margin: "14px",
  float: "right"
};

export default NavButton;
