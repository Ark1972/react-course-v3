import React from 'react'

const Title = ({text}) => {
  return (
    <section>
        <h2 className='title'>{text}</h2>
        <div className='title-underline'></div>
    </section>
  )
}

export default Title