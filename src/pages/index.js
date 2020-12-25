import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'
export default () => {
  return <Layout>
    <SEO title="Home" description="This is the home page for ryankopec.com"/>
    <Hero/>
    <Services/>
    <Jobs/>
    <Projects title="featured projects" showLink/>
  </Layout>
}
// ...GatsbyImageSharpFluid
