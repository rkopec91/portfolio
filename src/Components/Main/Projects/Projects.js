import React from 'react';
import Card from './Card/Card';
// import '../../../style/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../style/Projects.css';
import Hero from '../Hero/Hero'
import Carousel from './Carousel/Carousel'

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <Hero title="Projects"/>
      <Carousel/>
        
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-30"
              src="Behavior.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="text">Behavior Cloning Project</h3>
              <p className="text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <a href="https://github.com/rkopec91/Behavioral_Cloning">Link</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-30"
              src="Augmented-Random-Search.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="text">Augmented Random Search</h3>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="https://github.com/rkopec91/Augmented-Random-Search">Link</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-30"
              src="logo192.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="text">Reinforcement Learning Projects</h3>
              <p className="text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <a href="https://github.com/rkopec91/reinforcement_learning_projects">Link</a>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel> */}
    </div>
  )
}
 
export default Projects;