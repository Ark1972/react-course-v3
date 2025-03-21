import React from 'react'

const Duties = ({duties}) => {
    console.log("duties inside duties: ", duties)

    return (
        <>
            {
                duties.map((item, index) => <li key={index}>{item}</li>)
            }
        </>
    )
}


export default Duties