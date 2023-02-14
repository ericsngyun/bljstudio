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
            ERICYUN</div>
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
              <Link to ="/" 
              onClick = {() => setNavOpen(!navOpen)} 
              style = {{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? ".8s" : "0s"
              }}>HOME</Link>  
              <div className='nav-item-wrapper'></div>
            </li>
            <li className = "nav-item">
              <Link to ="/projects" onClick = {() => setNavOpen(!navOpen)} style = {{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? ".8s" : "0s"
              }}>PROJECTS</Link>  
              <div className='nav-item-wrapper'></div>
            </li>
            <li className = "nav-item">
              <Link to ="/aboutme" onClick = {() => setNavOpen(!navOpen)} style = {{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? ".8s" : "0s"
              }}>ABOUT</Link>  
              <div className='nav-item-wrapper'></div>
            </li>
            <li className = "nav-item" >
              <Link to ="/contact" onClick = {() => setNavOpen(!navOpen)} style = {{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? ".8s" : "0s"
              }}>CONTACT</Link>  
              <div className='nav-item-wrapper'></div>
            </li>
          </ul>
          <div className = "nav-footer text-[#fff]">
            <div className="location text-[#fff]"
              style = {{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.2s" : "0s",
              }}
            >
              <span>LOS ANGELES, CA</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/ericsungyun/" target={'_blank'} 
                    style = {{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.2s" : "0s",
                    }}>
                      LINKEDIN
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ericsyun/" target={'_blank'} style = {{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.2s" : "0s",
                    }}>
                    INSTAGRAM
                  </a>
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