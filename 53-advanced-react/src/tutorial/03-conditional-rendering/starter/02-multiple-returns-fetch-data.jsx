import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarsonXX';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState({})

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data);
        setData(data)
      } catch (error) {
        console.log("Shit happens")
        console.log(error)
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchData();
  }, [])

  if(isLoading) {
    return <h2>Loading..</h2>;
  } 
  
  if(isError) {
    return <h2>Error..</h2>;
  } 

  return (
    <>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} style={{width: "200px"}} />
      <article>
        {data.bio}
      </article>
      <h3>{data.company}</h3>
      <h4>{data.location}</h4>
      

    </>
  );
  
};

export default MultipleReturnsBasics;
