import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Components/Projects/Projects'; 
import Articles from './Components/Articles/Articles'; 
import About from './Components/About/About'; 
import Footer from './Components/Footer/Footer';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import './App.css';
import { render } from 'react-dom';
 
class App extends Component {
  state = {
    sideDrawerOpen: false
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
      <div style={{ height: '100%' }}>
        
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Projects} />
            <Route path="/articles" component={Articles} />
            <Route path="/about" component={About} />
            <div className="navigation">
              <img src={logo} className="logo-image" alt="The Logo" />
              <div className="navigation-sub">
                <Link to="/" className="item">Projects</Link>
                <Link to="/articles" className="item">Articles</Link>
                <Link to="/about" className="item">About</Link>
              </div>
            </div>
          </div>
        </BrowserRouter>
        
        <Footer />
      </div>
    );
  }
}

export default App;
