import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid


const ProjectsPage = () => {
  return <Layout>
    <SEO title="Projects" description="This is the projects page for ryankopec.com"/>
    <section className="projects-page">
      <Projects title="All Project" />
    </section>
  </Layout>
}

export default ProjectsPage
