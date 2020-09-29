import React from 'react';

import DrawerToggleButton from '../DrawerButton/DrawerButton'
import '../../style/Toolbar.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo">
                <a onClick={() => props.pageClickHandler([true, false, false, false])}>RYAN KOPEC</a>
            </div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li>
                        <Link className="anchor" to='/'>About</Link>
                    </li>
                    <li>
                        <Link className="anchor" to='/Resume'>Resume</Link>
                    </li>
                    <li>
                        <Link className="anchor" to='/Projects'>Projects</Link>
                    </li>
                    <li>
                        <a href="mailto:ryankopec91@gmail.com" className="anchor">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar