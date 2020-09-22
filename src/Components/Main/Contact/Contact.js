import React, { Component } from 'react';
// import "../../../style/Contact.css";
import Axios from 'axios';


class Contact extends Component {
  constructor(props) {
    super (props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true
    });

    Axios.post('http://localhost:3030/api/email', this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: true,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
        
      }).catch(err => {
        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="container">
        <form onSubmit={this.handleSubmit}>
  
          <label>First Name</label>
          <input name="firstname" type="text" placeholder="Your name..." value={this.state.firstname} onChange={this.handleChange}></input>
  
          <label>Last Name</label>
          <input name="lastname" type="text" placeholder="Your last name..." value={this.state.lastname} onChange={this.handleChange}></input>
  
          <label>Email</label>
          <input name="email" type="email" placeholder="Your email..." value={this.state.email} onChange={this.handleChange}></input>
  
  
          <label>message</label>
          <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea>
  
          <button type="submit" disabled={this.state.disabled}>Submit</button>

          {this.state.emailSent === true && <p>Email Sent</p>}
          {this.state.emailSent === false && <p>Email Not Sent</p>}
  
        </form>
        </div>
      </div>
    )
  }
}
 
export default Contact;