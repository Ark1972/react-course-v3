import { useState } from "react";


const UseStateGotcha = () => {

  const [count, setCount] = useState(0)


  const handleClick = () => {
    console.log("Click...")
    setTimeout(()=>{
      setCount((currentCount) => currentCount + 1)
    }, 3000)


/*     setCount((currentState) => {
      console.log(currentState)
      const nextState = currentState + 1  
      console.log(nextState)
      return nextState
    })
 */    
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick} className='btn'>Click me</button>
    </>
  );
};

export default UseStateGotcha;
