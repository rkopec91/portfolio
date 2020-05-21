import React from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Components/Projects/Projects'; 
import Articles from './Components/Articles/Articles'; 
import About from './Components/About/About'; 
import './App.css';
 
function App() {
  return (
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
  );
}
 
export default App;
