import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Components/Main/Projects/Projects'; 
import Articles from './Components/Main/Articles/Articles'; 
import About from './Components/Main/About/About'; 
import Footer from './Components/Footer/Footer';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import Main from './Components/Main/Main';
import './App.css';
import { render } from 'react-dom';
 
class App extends Component {
  state = {
    sideDrawerOpen: false,
    page: [true, false, false, false]
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  pageToggleClickHandler = (pages) => {
    this.setState({ page: pages,
                    sideDrawerOpen: false
    })
  }


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} pageClickHandler={this.pageToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} pageClickHandler={this.pageToggleClickHandler}/>
        {backdrop}
        
        <Main page={this.state.page}/>
        {/* <BrowserRouter>
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
        </BrowserRouter> */}
      
        
        
        <Footer />
      </div>
    );
  }
}

export default App;
