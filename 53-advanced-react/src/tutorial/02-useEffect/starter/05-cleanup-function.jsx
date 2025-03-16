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

  useEffect(() => {
    console.log('hello world');
    return () => console.log('cleanup');
  }, []);

  return <h2>Toggled Element</h2>;
}

export default CleanupFunction;
