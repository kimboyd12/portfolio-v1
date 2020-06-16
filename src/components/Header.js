import React from "react";
import kim from "./kim.jpg";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div id="header">
            <div className="personal">
                <img src={kim} alt="kim" />
                <div className="name">
                    <h3>Kim Boyd</h3>
                    <p>Software Developer</p>
                </div>
            </div>

            <div className="navigation">
                <a href="#about">About</a>
                <a href="https://www.github.com/kimboyd12">
                    Github</a>
                <a href="#">hello@kim-boyd.com</a>
                
            </div>

        </div>
    )
}