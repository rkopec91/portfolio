import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import projects from "../constants/projects"
// ...GatsbyImageSharpFluid


const ProjectsPage = () => {
  return <Layout>
    <section className="projects-page">
      <Projects title="All Project" />
    </section>
  </Layout>
}

export default ProjectsPage
