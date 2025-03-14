import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';


const FetchData = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <img src={user.avatar_url} alt={user.login} style={{ width: '200px' }} />
            <div>
              <h5>
                <a href={user.html_url}>{user.login}</a>
              </h5>
            </div>
          </div>
        );
      })};
    </section>
  );
};

export default FetchData;
