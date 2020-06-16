import React from "react";
import "./Body.css"

export default function Body() {
    return (
        <div className="body">
            <div className="hello">
                <p>I'm Kim, a software developer that would love to help you build your website or product.</p>
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
                    <h4>About</h4>
                    <p>I transitioned into software development through the full stack web development course at Lambda School. I pride myself on working hard to solve problems, communicating clearly with my teammates, and staying organized. I would love to chat with you about your upcoming projects</p>
                </div>
            </div>

            <div className="skills-edu">
                    <h4>Skills</h4>
                        <ul>
                            <li>HTML / CSS</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                        </ul>
                        <h4>Education</h4>
                        <p>Bachelors Degree Rutgers University Class of 2018</p>
                </div>

            </div>

            


    )
}