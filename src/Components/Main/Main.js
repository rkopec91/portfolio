import React from "react";
import '../../style/Main.css';
import Resume from "./Resume/Resume";
import Projects from './Projects/Projects';
import About from './About/About';
import TopCard from './TopCard/TopCard';
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
      <TopCard/>
      {page}
    </div>
  )
}
 
export default Main;