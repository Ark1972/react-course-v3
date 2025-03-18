import { useState, useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  const toggleShow = () => {
    setToggle(!toggle);
  }

  return (
    <div>
      <h2>cleanup function</h2>
      <button className='btn' onClick={toggleShow}>Toggle</button>
      {toggle && <ToggleElement />}
    </div>
  )
};

const ToggleElement = () => {

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const someFunc = () => {
      console.log('resize..')
    };
    window.addEventListener('resize', someFunc)
    return () => {
      window.removeEventListener('resize', someFunc)
    }
  }, [counter]);

  return <h2>Toggled Element {counter}</h2>;
}

export default CleanupFunction;
