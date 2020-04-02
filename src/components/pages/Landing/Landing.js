import React, { Component } from 'react';
import Typist from 'react-typist';
import './Landing.css';

export class Landing extends Component {
    render() {
        return (
            <div className="page landing">
                <div className="main-content">
                    <Typist cursor={cursorStyle}>
                        <h1 className="header">Rajeev Goonie</h1>
                    </Typist>
                    <Typist startDelay={1500} cursor={cursorStyle}>
                        <div className="tag-line">
                            <span>The Programmer without a Life</span>
                            <Typist.Backspace count={10} delay={1000}/>
                            <span>{' '} an "Actual" Life</span>
                        </div>
                    </Typist>
                </div>
            </div>
        )
    }
}

const cursorStyle = {
    show: false,
}



export default Landing
