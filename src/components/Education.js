import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "gatsby"
import positions from "../constants/positions"

const Education = () => {
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = positions[value]

  return <section className="section education">
    <Title title="Education"/>
    <div className="jobs-center">
      <article className="job-info">
        <h3>Georgia Tech</h3>
        <h4>Masters of Science in Computer Science Specializing in Machine Learning</h4>
        <p className="job-date">January 2018 - April 2021</p>
      </article>

      <article className="job-info">
        <h3>Drexel University</h3>
        <h4>Bachelors of Science in Mechanical Eningeering Minor in Electrical Engineering</h4>
        <p className="job-date">January 2018 - April 2021</p>
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

export default Education