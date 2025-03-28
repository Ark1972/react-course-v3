import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items}) => {
  return (
    <div className='items'>
        {items.map((item, index) => <SingleItem key={index} item={item} />)}
    </div>
  )
}

export default Items