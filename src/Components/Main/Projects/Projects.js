import React from 'react';
import Thumbnail from './Thumbnail/Thumbnail';
// import '../../../style/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <div>
        {/* <Container>
          <Row>
            <Thumbnail
              link="https://github.com/rkopec91/Behavioral_Cloning"
              image="logo192.png"
              title="Behavior Cloning"
              category="Deep Learning"
            />
            <Thumbnail
              link="https://github.com/rkopec91/Behavioral_Cloning"
              image="logo192.png"
              title="Behavior Cloning"
              category="Deep Learning"
            />
            <Thumbnail
              link="https://github.com/rkopec91/Behavioral_Cloning"
              image="logo192.png"
              title="Behavior Cloning"
              category="Deep Learning"
            />
            <Thumbnail
              link="https://github.com/rkopec91/Behavioral_Cloning"
              image="logo192.png"
              title="Behavior Cloning"
              category="Deep Learning"
            />
            <Thumbnail
              link="https://github.com/rkopec91/Behavioral_Cloning"
              image="logo192.png"
              title="Behavior Cloning"
              category="Deep Learning"
            />
            <Thumbnail
              link="https://github.com/rkopec91/Behavioral_Cloning"
              image="logo192.png"
              title="Behavior Cloning"
              category="Deep Learning"
            />
            <Thumbnail
              link="https://github.com/rkopec91/Behavioral_Cloning"
              image="logo192.png"
              title="Behavior Cloning"
              category="Deep Learning"
            />
            <Thumbnail
              link="https://github.com/rkopec91/Behavioral_Cloning"
              image="logo192.png"
              title="Behavior Cloning"
              category="Deep Learning"
            />
          </Row>
            
        </Container> */}
        
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="logo192.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="logo192.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="logo192.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </div>
    </div>
  )
}
 
export default Projects;