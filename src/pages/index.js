// import React from "react"
// import '../style/index.css';
// import App from '../Components/App';
// export default function Home() {
//   return (<div><App /></div>)
// }



import React, { Component } from 'react';


import Footer from './Footer/Footer';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import '../style/App.css';
import { Router, Link } from "@reach/router";
import About from '../pages/About'
import Resume from '../pages/Resume'
import Projects from '../pages/Projects'
import { Container } from 'react-bootstrap';
import { render } from "react-dom";
class Home extends Component {
  state = {
    sideDrawerOpen: false,
    disabled: false,
    emailSent: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
        <Container className="p-0" fluid={true}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} pageClickHandler={this.pageToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} pageClickHandler={this.pageToggleClickHandler}/>
          {backdrop}
          <nav>
            <Link to="Projects">Projects</Link>
          </nav>
          <Router>
            <About path="/" />
            <Resume path="Resume"/>
            <Projects path="Projects"/>
          </Router>
          
          <Footer />
        </Container>
      
    );
  }
}

export default Home;
