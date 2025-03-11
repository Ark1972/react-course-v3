import React from 'react'
import Title from './Title'
import Service from './Service'
import { servicesData } from './data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => {
          return <Service key={service.id} {...service} />
        })}
      </div>
    </section>
  )
}

export default Services