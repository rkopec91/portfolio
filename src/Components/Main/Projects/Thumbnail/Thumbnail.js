import React from 'react';
// import '../../../../style/App.css';
import '../../../../style/Thumbnail.css'
 
function Thumbnail(props) {
  return (
    <div className="card">
      <a href={props.link}>link to project</a>
      <div className="project-image">
          <img src={props.image} alt="Project"/>
      </div>
      <div className="project-title">{props.title}</div>
      <div className="project-category">{props.category}</div>
    </div>
  )
}
 
export default Thumbnail;