import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import icon from "../../src/assets/hero-img.png"


const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({title, description}) => {
  const {site} = useStaticQuery(query);
  const {siteDesc, siteTitle, siteUrl, image, twitterUsername} = site.siteMetadata;

  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
    <meta name="description" content={description || siteDesc} />
    <link rel="icon" href={icon} />
  </Helmet>
}

export default SEO
