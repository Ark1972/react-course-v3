import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <div>
          <h2>{user && 'Hello ' + user.name}</h2>
          <article>
            <h4>Age: {user.age}</h4>
            <h4>Email: {user.email}</h4>
          </article>
          <button className='btn' onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
          <button className='btn' onClick={() => setUser({name: 'John', age: 20, email: 'john@gmail.com'})}>Login</button>
        </div>
      )}
    </>
  )
};

export default UserChallenge;
