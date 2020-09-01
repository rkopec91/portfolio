import React from "react"

import "./SideDrawer.css"
 
const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
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
    </nav>
  )
}
 
export default sideDrawer;