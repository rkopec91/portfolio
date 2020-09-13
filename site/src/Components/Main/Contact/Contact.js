import React from "react"
import "./Contact.css"
 
const Contact = (props) => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="container">
      <form>

        <label>First Name</label>
        <input type="text" placeholder="Your name..."></input>

        <label>Last Name</label>
        <input type="text" placeholder="Your last name..."></input>

        <label>Email</label>
        <input type="text" placeholder="Your email..."></input>


        <label>Subject</label>
        <textarea></textarea>

        <button>Submit</button>

      </form>
      </div>
    </div>
  )
}
 
export default Contact;