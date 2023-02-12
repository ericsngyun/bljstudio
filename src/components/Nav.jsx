import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './nav.css'

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className = "nav">
      <div className="nav-container">   
        <div className="navbar">
          <div className= {navOpen ? "logo caret-transparent text-[#fff]" : "logo caret-transparent"}>
            ERIC YUN</div>
          <div className="menu-toggle" onClick = {() => setNavOpen(!navOpen)}>
            <div className = {navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className = {navOpen ? "lineTop spin bg-[#18181c]" : "lineTop"}>
              </span>
              <span className = {navOpen ? "lineBot spin bg-[#18181c]" : "lineBot"}>
              </span>
            </div>
          </div>
        </div>
        <div className="nav-overlay" style = {{
          top: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0s" : "0s"
        }}></div>
      </div>                            
    </div>
  )
}

export default Nav;