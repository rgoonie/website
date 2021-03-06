import React, { Component } from 'react';
import Typist from 'react-typist';
import './Landing.css';

export class Landing extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="landing-content">
                    <Typist cursor={cursorStyle}>
                        <h1 className="landing-heading">Rajeev Goonie</h1>
                    </Typist>
                    <div className="landing-tag-line">
                    <Typist startDelay={1500} cursor={cursorStyle}>
                            <span>The Programmer without a Life</span>
                            <Typist.Backspace count={10} delay={1000}/>
                            <span>{' '} an "Actual" Life</span>
                    </Typist>
                    </div>
                </div>
            </div>
        )
    }
}

const cursorStyle = {
    show: false,
}



export default Landing
