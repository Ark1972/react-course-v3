import { useState } from "react";

const UseStateBasics = () => {

  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log(counter)
    setCounter(counter + 1)
  }


  return (
    <>
      <h4>useState basics {counter}</h4>
      <button onClick={handleClick} className="btn">Click</button>
    </>
  );
};

export default UseStateBasics;
