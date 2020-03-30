import React, { Component } from 'react'

export class Landing extends Component {
    render() {
        return (
            <div className="page landing" style={pageStyle}>
                <div className="main-content" style={contentStyle}>
                    <h1>Rajeev Goonie</h1>
                    <p>The Programmer with a Life</p>
                </div>
            </div>
        )
    }
}

const pageStyle = {
    //display: "flex",
}

const contentStyle ={
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}

export default Landing
