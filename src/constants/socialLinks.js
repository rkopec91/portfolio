import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFilePdf
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/ryan.kopec",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/ryan-kopec/",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/rkopec91",
  },
  {
    id: 4,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/rkopec91/",
  },
  {
    id: 5,
    icon: <FaFilePdf className="social-icon"></FaFilePdf>,
    url: "/Ryan_Kopec_Resume.pdf"
  }
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
