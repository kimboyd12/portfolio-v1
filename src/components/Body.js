import React from "react";
import "./Body.css"
import Typewriter from "typewriter-effect"

export default function Body() {
    return (
        <div className="body">
            <div className="hello-name">
                <p className="name">I'm Kim, a</p>
            <p className="type-writer">
            <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('coffee enthusiast')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(750)
                .deleteAll()
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                .start();
                // typewriter.typeString('lifelong learner')
                // .callFunction(() => {
                //     console.log('String typed out!');
                // })
                // .pauseFor(2500)
                // .deleteAll()
                // .callFunction(() => {
                //     console.log('All strings were deleted');
                // })
                typewriter.typeString('software developer')
                .callFunction(() => {
                    console.log('String typed out!');
                })
            }}
            />
            </p>
            </div>
            <div className="hello-more">
            <p>that would love to help you build your website or product.</p>
            </div>

            <div id="info">
                <div id="about">
                    <p className='about-title'>About</p>
                    <p className='about-para'>I transitioned into software development through the full stack web development course at Lambda School. I pride myself on working hard to solve problems, communicating clearly with my teammates, and staying organized. I would love to chat with you about your upcoming projects.</p>


                    <div className="skills-edu">
                        <div className="skills">
                            <p className="skills-header">Skills</p>
                            <p>HTML / CSS
                                <br></br>
                                Javascript 
                                <br></br>
                                React / Redux
                                <br></br>
                                Node
                                <br></br>
                                SQL
                                <br></br>
                                Python
                                </p>
                        
                        </div>
                        <div className='edu'>
                        <div className="edu-header">Education</div>
                        <p>Bachelors Degree Rutgers University Class of 2019
                            <br></br>
                            <br></br>
                            Lambda School Class of 2021
                        </p>
                        </div>
                </div>
                </div>
            </div> 
        </div>

            


    )
}