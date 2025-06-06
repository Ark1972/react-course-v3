import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];

const OtherInputs = () => {

    const [shipping, setShipping] = useState(false)
    const [framework, setFramework] = useState('react')

    const handleShipping = (e) => {
        console.log(e.target.checked)
        setShipping(e.target.checked)
    }

    const handleFramework = (e) => {
        console.log(e.target.value)
        setFramework(e.target.value)
    }


    return (
        <div>
        <form className='form'>
            <h4>Other Inputs</h4>
            {/* name */}
            <div className='form-row' style={{ textAlign: 'left' }}>
            <label htmlFor='shipping'> Free Shipping </label>
            <input type='checkbox' name='shipping' id='shipping'
                onChange={handleShipping} checked={shipping}
            />
            </div>
            <div className='form-row' style={{ textAlign: 'left' }}>
            <label htmlFor='framework' className='form-label'>
                Framework
            </label>
            <select name="framework" id="framework"
                onChange={handleFramework}
            >
                {frameworks.map(f => <option key={f}>{f}</option>)}
            </select>
            </div>
            <button type='submit' className='btn btn-block'>
            submit
            </button>
        </form>
        </div>
    );
};
export default OtherInputs;
