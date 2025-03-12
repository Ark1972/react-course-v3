import { useState } from "react";
import {people } from "../../../data"

const UseStateArray = () => {
  const [persons, setPersons] = useState(people)

  
  const removeOne = () => {
    const one = persons.pop()
    console.log(one)
    console.log(persons)
    setPersons([...persons])
  }

  const clearList = () => {
    setPersons([])
  }

  return (
    <>
      <h2>useState array example</h2>
      {persons.map((p) => {
        return <li key={p.id}>{p.name}</li>
      })}
      <button className="btn" onClick={removeOne}>Remove 1</button>
      <button className="btn" onClick={clearList}>Clear list</button>
    </>
  );
};

export default UseStateArray;
