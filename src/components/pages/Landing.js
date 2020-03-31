import React, { Component } from 'react'
import Typist from 'react-typist'

export class Landing extends Component {
    render() {
        return (
            <div className="page landing" style={pageStyle}>
                <div className="main-content" style={contentStyle}>
                    <Typist cursor={cursorStyle}>
                        <h1 style={headerOneStyle}>Rajeev Goonie</h1>
                    </Typist>
                    <Typist startDelay={1500} cursor={cursorStyle}>
                        <span style={paragraphStyle}>The Programmer without a Life</span>
                        <Typist.Backspace count={10} delay={1000}/>
                        <span style={paragraphStyle}>{' '} an "Actual" Life</span>
                    </Typist>
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
    display: "inline",    
}

const cursorStyle = {
    show: false,
}



export default Landing
