import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../components/data'

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <ul className="nav-links" id="nav-links">
            {pageLinks.map(link => (
              <NavbarItem key={link.id} {...link} />
            ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(link => (
            <NavbarIcon key={link.id} {...link} />
          ))}
        </ul>
      </div>
    </nav>
    
  )
}

const NavbarItem = ({ id, href, text }) => {
  return (
    <li key={id}>
      <a href={href} className="nav-link"> {text} </a>
    </li>
  )
}

const NavbarIcon = ({ id, href, icon }) => {
  return (    
    <li key={id}>
        <a href={href} className="nav-icon"><i className={icon}></i></a>
    </li>
)
}

export default Navbar

