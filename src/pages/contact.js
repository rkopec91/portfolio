import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return <Layout>
    <SEO title="Contact" description="This is the contact page for ryankopec.com"/>
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <div className="form-group">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="name" className="form-control"/>
            <input type="email" placeholder="email" name="email" className="form-control"/>
            <textarea name="message" rows="7" placeholder="message" className="form-control"></textarea>
          </div>
          <button type="submit" className="submit-btn btn">submit</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
