import { useState } from 'react';
import Values from 'values.js';

const App = () => {
    
    const [colors, setColors] = useState(new Values('#f15025').all(10))
    const [chosenColor, setChosenColor] = useState('#f15025')
    
    const handleColor = (e) => {
        setChosenColor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newColors = new Values(chosenColor).all(10);
        setColors(newColors);
    }
    
    return (
        <main style={{padding: '60px'}}>
            <h4>Color Generator Starter</h4>
            <br />
            <form className='color-form' onSubmit={handleSubmit}>
                <input type="color" name="cColor" id="cColor" 
                    value={chosenColor} onChange={handleColor} />
                <input type="text" name="tColor" id="tColor"  
                value={chosenColor}  onChange={handleColor}/>
                <button type="submit" className='btn'>Submit</button>
            </form>
            <br />
            <ColorList colorList={colors}/>
        </main>
    )

};
export default App;

function ColorList({colorList}) {
    return <section className='colors'>
        {colorList.map((c, i) => {
            const {hex, weight} = c;
            return <SingleColor key={i}  i={i} hex={hex} weight={weight}  />
        })}
    </section>
}

    function SingleColor({i, hex, weight}) {
        return <article key={i} 
            className={i > 10 ? 'color color-light' : 'color'} 
            style={{background: `#${hex}`}}>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>#{hex}</p>
        </article>
    }
