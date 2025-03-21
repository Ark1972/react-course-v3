import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer"
const url = 'https://www.course-api.com/react-tabs-project';


const App = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [companies, setCompanies] = useState([])
    const [currentItem, setCurrentItem] = useState({})

    const fetchData = () => {
        fetch(url).then(response => {response.json()
            .then(json => {
                console.log(json) 
                setData(json)
                const comps = [...new Set(json.map(item => item.company))]
                setCompanies(comps)
                console.log(comps)
                setCurrentItem(json[0])
            }).finally(()=>setLoading(false))
        })
    }

    const chooseItem = (company) => setCurrentItem(data.find(item => item.company === company))

    useEffect(() => fetchData(), [])


    return (
        loading ? <h2>Loading</h2> : 
        (
            <>
                <BtnContainer companies={companies}  currentItem={currentItem} chooseItem={chooseItem} />
                <h2>
                    Tabs Starter
                </h2>
                <JobInfo {...currentItem} />
            </>
        )
    );

};
export default App;
