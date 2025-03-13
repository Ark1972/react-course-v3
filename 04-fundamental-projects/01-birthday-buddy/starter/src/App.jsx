import data from './data'
import PersonList from './PersonList'
import { useState } from 'react'

const App = () => {
  const [people, setPeople] = useState(data)

  console.log(people)

  return (
    <main>
      <div className='container'>
        <h3 className='title'>Birthday Reminder</h3>
        <PersonList persons={people} />
        <p className='text'>Amount of people: {people.length}</p>
        <button type='button' className='btn btn-block' onClick={() => setPeople([])}>Clear All</button>
      </div>
    </main>
  )
  
};
export default App;
