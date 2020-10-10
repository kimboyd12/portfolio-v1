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
                    <p>Kim Boyd</p>
                    <p className="p">Software Developer</p>
                </div>
            </div>

            <div className="navigation">
            <a href="https://www.github.com/kimboyd12">
                    Github</a>
                <a href="https://www.linkedin.com/in/kim-boyd">LinkedIn</a>
                <a href="#">kimberlyboyd2@gmail.com</a>
            </div>

        </div>
    )
}