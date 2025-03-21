import React from 'react'

const Categories = ({filter}) => {


    return (
        <section className='btn-container'>
            <button className='btn' onClick={() => filter()}>All</button>
            <button className='btn' onClick={() => filter('breakfast')}>Breakfast</button>
            <button className='btn' onClick={() => filter('lunch')}>Lunch</button>
            <button className='btn' onClick={() => filter('shakes')}>Shakes</button>
        </section>
    )
}

export default Categories