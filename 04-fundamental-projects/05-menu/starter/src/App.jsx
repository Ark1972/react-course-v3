import menu from './data'

import { useState } from 'react';
import Title from './Title';
import Menu from './Menu';
import Categories from './Categories';

const App = () => {

    const [data, setData] = useState(menu)

    const filterData = (category) => {
        console.log(category)
        setData(menu.filter((item) => 
            category ? item.category === category : true
        ))
    }

    return (
        <main>
            <section className='menu'>
                <Title text="Our menu"/>
                <Categories filter={filterData}/>
                <Menu data={data}/>
            </section>
        </main>
    );
};
export default App;
