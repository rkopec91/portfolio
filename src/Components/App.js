import React, { Component } from 'react';


import Footer from './Footer/Footer';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Main from './Main/Main';
import '../style/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './Main/About/About'
import Resume from './Main/Resume/Resume'
import Projects from './Main/Projects/Projects'
import { Container } from 'react-bootstrap';
 
class App extends Component {
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
      <Router>
        <Container className="p-0" fluid={true}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} pageClickHandler={this.pageToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} pageClickHandler={this.pageToggleClickHandler}/>
          {backdrop}
          <Route path="/" exact render={() => <About/>}/>
          <Route path="/Resume" exact render={() => <Resume/>}/>
          <Route path="/Projects" exact render={() => <Projects/>}/>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
