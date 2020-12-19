import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import positions from "../constants/positions"

const Jobs = () => {
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = positions[value]

  return <section className="section jobs">
    <Title title="Experience"/>
    <div className="jobs-center">
      <div className="btn-container">
        {positions.map((pos,index)=>{
          return <button key={pos.id} onClick={()=>setValue(index)} className={`job-btn
          ${index === value && 'active-btn'}`}>{pos.company}</button>
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

export default Jobs
