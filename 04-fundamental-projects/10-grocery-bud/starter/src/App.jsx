import { useState } from "react";
import Items from "./Items";
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        list = JSON.parse(localStorage.getItem('list'));
    } else {
        list = [];
    }
    return list;
};

const setLocalStorage = (items) => {
    localStorage.setItem('list', JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {

    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newId = Math.max(-1,...items.map(i => {return i.id})) + 1
        setItems([...items, {id: newId, name: newItem, completed: false}])
    }

    const handleItemChange = (e) => {
        setNewItem(e.target.value)
    }

    return <section className='section-center'>
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud - Starter</h4>
            <div className='form-control'>
                <input type="text" name="item" id="item" 
                    className='form-input' onChange={handleItemChange} />
                <input type="submit" value="Add" className="btn" />
            </div>
        </form>
        <Items items={items} />
    </section>;
};

export default App;
