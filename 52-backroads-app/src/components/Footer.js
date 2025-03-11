import React from 'react'
import { pageLinks, socialLinks } from './data'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <FooterLink key={link.id} {...link} />
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <SocialLink key={link.id} {...link} />
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>    
  )
}

const FooterLink = ({ id, href, text }) => {
  return (
    <li key={id}>
      <a href={href} className="footer-link">{text}</a>
    </li>
  )
}

const SocialLink = ({ id, href, icon}) => {
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
        <i className={icon}></i>
      </a>
    </li>
  )
}


export default Footer