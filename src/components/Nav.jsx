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
            YUNIVERSE</div>
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
        }}>
          <ul className = "nav-links text-[#fff]">
            <li className = "nav-item">
              <Link to ="/">Home</Link>  
              <div className='nav-item-wrapper'></div>
            </li>
            <li className = "nav-item">
              <Link to ="/projects">Projects</Link>  
              <div className='nav-item-wrapper'></div>
            </li>
            <li className = "nav-item">
              <Link to ="/aboutme">About</Link>  
              <div className='nav-item-wrapper'></div>
            </li>
            <li className = "nav-item">
              <Link to ="/contact">Contact</Link>  
              <div className='nav-item-wrapper'></div>
            </li>
          </ul>
          <div className = "nav-footer text-[#fff]">
            <div className="location">
              <span>Los Angeles, CA</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a href="#" target={'_blank'}>YouTube</a>
                </li>
                <li>
                  <a href="#" target={'_blank'}>Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>                            
    </div>
  )
}

export default Nav;