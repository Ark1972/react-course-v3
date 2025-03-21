import React from 'react'

const BtnContainer = ({companies, currentItem, chooseItem}) => {

    console.log(currentItem)

    return (
        <section>
            {
                companies.map((item, index) => {
                    return <li key={index}>
                        <a href="#" onClick={() => chooseItem(item)}>{item}</a>
                    </li>
                })
            }
        </section>
    )

}

export default BtnContainer