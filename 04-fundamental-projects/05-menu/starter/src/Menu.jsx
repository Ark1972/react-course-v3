import React from 'react'
import MenuItem from './MenuItem'

const Menu = (props) => {
    const {data} = props
    return (
        <div className='section-center'>
            {props.data.map((item) => 
                <MenuItem key={item.id} {...item} />)}
        </div>
    )
}

export default Menu