import { useState, useEffect } from "react";
import { data } from "../../../data";

const UserChallenge = () => {

    const [name, setName] = useState('');
    const [users, setUsers] = useState(data)

    const handleSubmit = (e) => {
        e.preventDefault();
        const nextId = Math.max(0, ...users.map(u =>u .id)) + 1;
        name && setUsers([...users, { id: nextId, name: name }])
    }

    const removeUser = (id) => {
        setUsers(users.filter(u => u.id !== id))
    }

    useEffect(() => {
        setName('')
    }, [users])

    return (
        <div>
        <form className='form'>
            <h4>Add User</h4>
            <div className='form-row'>
            <label htmlFor='name' className='form-label'>
                Name
            </label>
            <input type='text' className='form-input' id='name' value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>

            <button type='submit' className='btn btn-block' onClick={(e) => handleSubmit(e)}>
            submit
            </button>
        </form>
        {
            users.map(u => 
                <div key={u.id}> <h4>{u.name}</h4>
                    <button onClick={() => removeUser(u.id)} className='btn'>remove</button>
                </div>)
        }

        </div>
    );
};
export default UserChallenge;
