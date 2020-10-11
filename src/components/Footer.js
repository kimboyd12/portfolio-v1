import React from "react";
import "./Footer.css"


export default function Footer() {
    return(
        <div className="footer">
            <div className="navigation">
            <a href="https://www.github.com/kimboyd12"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/kim-boyd"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.twitter.com/kimwritescode"><i class="fab fa-twitter"></i></a>
            </div>

            <div className="mobile">
            <a href="https://www.github.com/kimboyd12">Github</a>
                <a href="https://www.linkedin.com/in/kim-boyd">LinkedIn</a>
                <a href="https://www.twitter.com/kimwritescode">Twitter</a>
            </div>

        </div>
    )
}