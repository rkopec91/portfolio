import React from 'react';

import DrawerToggleButton from '../DrawerButton/DrawerButton'
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo">
                <a href="/">RYAN KOPEC</a>
            </div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Articles</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar