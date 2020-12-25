import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

const stack = ["Python","C++","C","Java","CSS","HTML","SQL","Javascript","Git", "GitHub", "Android SDK", "Unix", "Linux",
"Windows", "MacOS X", "Bootstrap", "jQuery", "Go", "Node JS", "React.js", "Django", "Flask", "TensorFlow", "Caffe", "Keras", "OpenCV",
"PyTorch", "Pandas", "NumPy", "scikit-learn", "Jenkins", "GCP (Google Cloud Platform)", "AWS", "Docker", "Kubernetes", "ROS", "Jest"]

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return <Layout>
    <SEO title="About" description="This is the about page for ryankopec.com"/>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={fluid} className="about-img"/>
        <article className="about-text">
          <Title title="about me"/>
          <p>
            I completed my Bachelor’s of Science Mechanical Engineering and received a minor in electrical engineering at Drexel University. Currently I am attending Georgia Institute of Technology for my Master’s in Computer Science with a specialization in machine learning/computer vision.  I am very interested in machine learning, deep learning, artificial intelligence, computer vision, natural language processing, web development, and software engineering.
          </p>
          <p>
            As a student at Georgia Tech, Drexel University, and Burlington County College I had the chance to explore many different projects and classes that gave me a wide range of experience.  I took controls classes, math classes, thermodynamic classes, fluids classes, Computer Vision classes, Machine Learning classes and electrical engineering classes.  I enjoy writing code.  In my free time I develop a wide range of projects such as android applications, video games, artificial intelligence/machine learning/deep learning models, and anything that will challenge my software development skills.  One of my favorite languages to develop in is Python, however, I am not limited to just that language.  For example, I have experience in C++, Javascript, CSS, HTML, and React.  My goal is to learn something new every day.
          </p>
          <p>
            My work experience includes Lockheed Martin, Slyce, Georgia Tech, and CVision AI.  I have had many different roles such as data analyst, software engineer, graduate teaching assistant, scrum master, and senior algorithm developer. Currently, I am teach tennis to people ranging from children to adults for the Burlington County Tennis Association.  I thoroughly enjoy helping people improve their tennis skills and working with such a diverse group of individuals.  Currently, I am open to new opportunities and am actively looking for a position in software engineering or machine learning.
          </p>
          <div className="about-stack">
            {stack.map((item,index)=>{
              return <span key={index}>{item}</span>
            })}
          </div>

        </article>
      </div>
    </section>
  </Layout>
}

export default About
