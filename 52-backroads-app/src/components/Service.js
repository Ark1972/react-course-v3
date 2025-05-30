import React from 'react'

const Service = ({ icon, title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={`fas ${icon} fa-fw`}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  )
}

export default Service
