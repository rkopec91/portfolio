import React from "react"
import '../../../style/Resume.css'

const Resume = (props) => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>Open a PDF <a href="Ryan_Kopec_Resume.pdf">file</a>.</p>
      <iframe src='Ryan_Kopec_Resume.pdf' height="100" width="1000"></iframe>
      
    </div>
  )
}
 
export default Resume;