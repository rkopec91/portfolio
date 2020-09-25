import React from 'react';
// import '../../../../style/App.css';
import '../../../../style/Thumbnail.css'
import Carousel from 'react-bootstrap/Carousel';
 
function Thumbnail(props) {
  return (
    // <div className="card">
    //   <a href={props.link}>link to project</a>
    //   <div className="project-image">
    //       <img src={props.image} alt="Project"/>
    //   </div>
    //   <div className="project-title">{props.title}</div>
    //   <div className="project-category">{props.category}</div>
    // </div>
    <Carousel.Item>
      <img src={props.image} alt="Project"/>
      <Carousel.Caption>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
        
      </Carousel.Caption>
    </Carousel.Item>
  )
}
 
export default Thumbnail;