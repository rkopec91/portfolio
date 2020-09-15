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
                <a onClick={() => props.pageClickHandler([true, false, false, false])}>RYAN KOPEC</a>
            </div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li>
                        <a onClick={() => props.pageClickHandler([true, false, false, false])}>About</a>
                    </li>
                    <li>
                        <a onClick={() => props.pageClickHandler([false, true, false, false])}>Resume</a>
                    </li>
                    <li>
                        <a onClick={() => props.pageClickHandler([false, false, true, false])}>Projects</a>
                    </li>
                    <li>
                        <a onClick={() => props.pageClickHandler([false, false, false, true])}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar