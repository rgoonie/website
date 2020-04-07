import React, { Component } from 'react';
import RajeevImg from '../../../assets/rajeev_photo.JPG';
import RajeevResume from '../../../assets/RajeevGoonieSoftwareDeveloperResume.pdf';
import './About.css';

export class About extends Component {
    render() {
        return (
            <div className="about-page">

                <div className="about-content">
                    <h1 className="about-header">Who am I?</h1>

                    <div className="about-content-box">

                        <div className="about-description">
                            <img className="rajeev-img" src={RajeevImg} alt="Rajeev Goonie"/>
                            <p>
                                Hello! My name is Rajeev Goonie and I am a Senior at Texas Tech University. 
                                I am currently pursuing my Bachelor's Degree in Computer Science with a Minor in Mathematics.
                                With this completed, I aspire to be the best Software Developer that I can.
                            </p>
                            
                            <p>
                                I have been programming for about 6 years now, where I worked on numerous projects such as a Maze Generator, 
                                Mock Online Shopping System, VR Banking System, and many more (check out my <a href="https://github.com/rgoonie" target="_blank" rel="noopener noreferrer">GitHub</a>)!
                                When it comes to programming, I always look forward to a challenge and learning something new, even if it causes me to go 24 hours without sleep.
                            </p>

                            <p>
                                A little more into my personal life, I have a ton fun facts. While I was born in Houston, Texas, I am proud of my Trinidadian heritage from both my parents.
                                If I'm not programming or studying, you can usually find me with my family or friends, just hanging out and having fun. I enjoy watching Bollywood hits, playing outside,
                                and playing card games. I'm not too good at pool (8-ball or 9-ball), but I won't shy away from a match.
                            </p>

                            <p>If you are ever in need of my resume, you can find a copy of it right <a href={RajeevResume} target="_blank" rel="noopener noreferrer">here</a>.</p>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default About;
