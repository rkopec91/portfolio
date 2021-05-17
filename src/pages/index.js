import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import SEO from '../components/SEO'
import Education from "../components/Education"
export default () => {
  return <Layout>
    <SEO title="Home" description="This is the home page for ryankopec.com"/>
    <Hero/>
    <Services/>
    <Jobs/>
    <Education/>
    <Projects title="featured projects" showLink/>
  </Layout>
}
// ...GatsbyImageSharpFluid
