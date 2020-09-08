import React from 'react';
import Thumbnail from './Thumbnail/Thumbnail';
import '../../../App.css';

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="https://github.com/rkopec91/Behavioral_Cloning"
        image="logo192.png"
        title="Behavior Cloning"
        category="Deep Learning"
      />
    </div>
  )
}
 
export default Projects;