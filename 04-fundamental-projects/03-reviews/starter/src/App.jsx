import { useState, useEffect } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {

    const [currentId, setCurrentId] = useState(1)
    const [currentReview, setCurrentReview] = useState({})

    const getCurrentReview = (id) => reviews.find((item) => item.id === id);

    useEffect(() => {
        console.log(currentId)
        const review = getCurrentReview(currentId)
        setCurrentReview(review)
    }, [currentId])
    
    const next = () => setCurrentId(currentId === reviews.length ? 1 : currentId + 1)
    const prev = () => setCurrentId(currentId === 1 ? reviews.length : currentId - 1)
    const rand = () =>  {
        var newId = Math.round(Math.random() * (reviews.length-1)) + 1
        while(currentId === newId) {
            newId = Math.round(Math.random() * (reviews.length-1)) + 1
        }
        setCurrentId(newId)
    } 

    return (
        <main>
            <h1 className="title">Reviews</h1>
            <section className="review">
                <h3 style={{marginBottom: '20px'}}>{currentReview.name}, {currentReview.job}</h3>
                <div className="img-container">
                    <img src={currentReview.image} className="person-img" />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <p className="text">{currentReview.text}</p>
            <button className="prev-btn" onClick={prev}>Previous</button>
            <button className="btn" onClick={rand}>Random</button>
            <button className="next-btn" onClick={next}>Next</button>
            </section>
            
        </main>
    )
};
export default App;
