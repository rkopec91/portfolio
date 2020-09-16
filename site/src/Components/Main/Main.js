import React from "react";
import './Main.css';
import Resume from "./Resume/Resume";
import Projects from './Projects/Projects';
import About from './About/About';
const Main = (props) => {
  let page = null;
  if (props.page[0]) {
    page = <About/>
  } else if (props.page[1]) {
    page = <Resume/>
  } else {
    page = <Projects/>
  }

  return (
    <div className="main">
      <img src='44616.jpg' className="port-image" alt="The profile pic" />
      {page}
    </div>
  )
}
 
export default Main;