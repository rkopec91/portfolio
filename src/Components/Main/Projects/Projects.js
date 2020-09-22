import React from 'react';
import Thumbnail from './Thumbnail/Thumbnail';
// import '../../../style/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <div className="projects">
        <Container>
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
            
        </Container>
        
        
      </div>
    </div>
  )
}
 
export default Projects;