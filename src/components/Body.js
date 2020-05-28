import React from "react";
import "./Body.css"

export default function Body() {
    return (
        <div className="body">
            <div className="hello">
                <h2>Hello! I'm Kim, nice to meet you.</h2>
                <p>I am currently a student at Lambda School studying
                Full Stack Web Development</p>
                    <div className="chat">
                    <p>Let's chat</p>
                    <a>kimberlyboyd2@gmail.com</a>
                    </div>

                <div class="center-con">
                <a href="#about">
                    <div class="round">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                 </a>
                </div>
            </div>
            <div id="info">
                <div id="about">
                    <h4>ABOUT</h4>
                    <p>I am a software developer that uses Javascript and React,js to create web applications.</p>
                    <p>I'm a Brigantine, NJ native and Rutgers University alumni. After graduating from college in 2019, I decided to enroll at Lambda School to learn software development. </p>
                </div>
            </div>

            <div className="skills">
                    <h4>SKILLS</h4>
                    <p>Currently I have been working with:</p>
                        <ul>
                            <li>HTML / CSS</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                        </ul>
                </div>

            </div>

            


    )
}