import text from './data'
import { useState } from 'react';

const App = () => {

    const [paragraphAmount, setParagraphAmount] = useState(1)
    const [lorem, setLorem] = useState([])

    const handleCount = e => {
        let c = e.target.value
        if(!c || c < 1) {
            c = 1
        } else if (c > 8) {
            c = 8
        }
        setParagraphAmount(c)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLorem(text.slice(0, paragraphAmount))
    }

    return <section className='section-center'>
        <h4>Lorem Ipsum Starter</h4>
        <form className='lorem-form' onSubmit={handleSubmit}>
            <label>Paragraph</label>
            <input type="number" name="count" id="count" value={paragraphAmount} 
                onChange={handleCount} />
            <button type="submit" className='btn'>Generate</button>
        </form>
        <article className='lorem-text'>
            {lorem.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </article>
    </section>
};
export default App;
