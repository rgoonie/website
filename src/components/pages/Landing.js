import React, { Component } from 'react'

export class Landing extends Component {
    render() {
        return (
            <div className="page landing" style={pageStyle}>
                <div className="main-content" style={contentStyle}>
                    <h1 style={headerOneStyle}>Rajeev Goonie</h1>
                    <p style={paragraphStyle}>The Programmer with a Life</p>
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

const headerOneStyle = {
    fontSize: "10vh",
    fontStyle: "normal",
    fontWeight: "normal",
}

const paragraphStyle = {
    fontSize: "3vh",
    fontStyle: "normal",
    fontWeight: "normal",
}



export default Landing
