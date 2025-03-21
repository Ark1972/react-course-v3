import React from 'react'
import Duties from './Duties'

const JobInfo = ({id, order, title, dates, duties, company}) => {

    return (
        <article>
            <h2>{title}</h2>
            {company}
            <p>{dates}</p>
            {console.log("duties inside JobInfo: ", duties)}
            <Duties duties={duties} />
        </article>
    )
}

export default JobInfo