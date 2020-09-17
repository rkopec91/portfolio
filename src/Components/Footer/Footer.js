import React from "react"

import './Footer.css'
 
const Footer = (props) => {
  return (
    <footer className="footer">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/ryan-kopec/">
                    <img src="linkedin.png" alt="LinkedIn" />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/ryan.kopec">
                    <img src="facebook.png" alt="Facebook" />
                </a>
            </li>
            <li>
                <a href="https://github.com/rkopec91">
                    <img src="github.png" alt="Github" />
                </a>
            </li>
        </ul>
        <div className="bottomright">
            Icons made by 
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                Freepik
            </a> 
                from 
            <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
            </a>
        </div>
    </footer>
  )
}
 
export default Footer;