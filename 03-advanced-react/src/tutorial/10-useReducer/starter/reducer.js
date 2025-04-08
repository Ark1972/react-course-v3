import {CLEAR_LIST, REMOVE_ITEM, RESET_LIST} from "./actions.js";


const reducer = (state, action) => {
    console.log("Reducer does something");
    console.log(action);
    console.log(state);

    if(action.type === CLEAR_LIST) {
        return {...state, people: []};
    }

    if(action.type === REMOVE_ITEM) {
        const newPeople = state.people.filter(person =>
            person.id !== action.payload.id);
        return {...state, people: newPeople};
    }

    if(action.type === RESET_LIST) {
        return {...state, people: action.payload.data};
    }

    throw new Error(`no matching "${action.type}" - action type`);
    //return state;
}

export default reducer;
