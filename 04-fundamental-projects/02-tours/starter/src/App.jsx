import Tours from "./Tours";
import Loading from "./Loading";
import { useState, useEffect } from 'react'

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    const removeTour = (id) => {
        const newTours = data.filter((tour) => tour.id !== id);
        setData(newTours);
    };

    const fetchTours = async () => {
        fetch(url).then(resp => {
            if(!resp.ok) {
                log.error("ERROR: Cannot fetch tours.")
            }
            return resp.json()
        }).then(data => {
            console.log(data);
            setData(data)
        })
        setIsLoading(false)
    };

    useEffect(() => {
        fetchTours();
    }, []);
    
    console.log(isLoading)
    console.log(data.length)

    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    } 
    if (!isLoading && data.length === 0) {
        return (
            <main>
                <div className='title'>
                <h2>no tours left</h2>
                <button className='btn' onClick={() => fetchTours()} style={{marginTop: '50px'}}>
                    refresh
                </button>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Tours tours={data} removeTour={removeTour} />
        </main>
    );
};

export default App;
