import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaCarSide, FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const query = graphql`
{
  allFile {
    nodes {
      childImageSharp {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`

const Project = ({description,title,github,stack,url,image,index}) => {

  const {allFile:{nodes}} = useStaticQuery(query)
  console.log(nodes)
  let current = ''
  for(var i=0;i<nodes.length;i++) {
    if (nodes[i].childImageSharp && nodes[i].childImageSharp.fluid.originalName == image) {
      current = nodes[i].childImageSharp.fluid
      break
    }
  }
  console.log(url)


  return <article className="project">
    <Image fluid={current} className="project-img" />
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h3>{title}</h3>
      <p className="project-desc">
        {description}
      </p>
      <div className="project-stack">
        {stack.map((item)=>{
          return <span key={item.id}>{item.title}</span>
        })}
      </div>
      <div className="project-links">
        <a href={github}>
          <FaGithubSquare className="project-icon"/>
        </a>
        { url && <a href={url}><FaShareSquare className="project-icon"/></a>}
      </div>
    </div>

  </article>
}

Project.propTypes = {}

export default Project
