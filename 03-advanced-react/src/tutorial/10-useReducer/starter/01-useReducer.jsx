import {data} from '../../../data';
import {CLEAR_LIST, REMOVE_ITEM, RESET_LIST} from "./actions.js";
import reducer from "./reducer.js";
import {useReducer} from "react";

const ReducerBasics = () => {

    const [state, dispatch] = useReducer(reducer, {people: data});

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: {id: id }});
    };

    const clearList = () => {
        dispatch({type: CLEAR_LIST});
    }

    const resetList = () => {
        dispatch({type: RESET_LIST, payload: {data: data}});
    }

    console.log(state);

    return (
        <div>
            {state.people.map((person) => {
                const {id, name} = person;
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}

            {
                state.people.length < 1 || <button className='btn' style={{marginTop: '2rem'}}
                                             onClick={clearList}>clear items</button>
            }

            {
                state.people.length < 4 && <button className='btn' style={{marginTop: '2rem', marginLeft: '2rem'}}
                                             onClick={resetList}>reset items</button>
            }

        </div>
    );
};

export default ReducerBasics;
