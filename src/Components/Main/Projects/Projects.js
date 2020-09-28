import React from 'react';
import Thumbnail from './Thumbnail/Thumbnail';
// import '../../../style/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../style/Projects.css';

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <div>
        
        <Carousel>
          <Carousel.Item>
            <img
              // className="d-block w-100"
              src="logo192.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="text">First slide label</h3>
              <p className="text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              // className="d-block w-100"
              src="logo192.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="text">Second slide label</h3>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              // className="d-block w-100"
              src="logo192.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="text">Third slide label</h3>
              <p className="text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </div>
    </div>
  )
}
 
export default Projects;