import React from "react"

import "../../style/SideDrawer.css"
import { Link } from "react-router-dom"
 
const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
            <Link to='/'>About</Link>
        </li>
        <li>
            <Link to='/Resume'>Resume</Link>
        </li>
        <li>
            <Link to='/Projects'>Projects</Link>
        </li>
        <li>
            <a href="mailto:ryankopec91@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
 
export default sideDrawer;