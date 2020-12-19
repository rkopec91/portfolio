import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
  file(relativePath: {eq: "Behavior.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`



export default [
  {
    id: 1,
    github: "CVision AI",
    title: "Senior Algorithm Developer",
    description: "January 2020 - April 2020",
    image: query,
    description: ";ldksajf;laksdjf;lkjasdf;lkjasdf",
    stack: [
        {
            id: 1,
            title: "Python"
        },
        
    ]
  },
  
  
]