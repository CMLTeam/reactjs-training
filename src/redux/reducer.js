import {createPerson} from "../People";
import {PERSON_ADDED, PERSON_REMOVED} from "./actionTypes";
import {combineReducers} from "redux";

const initialState = {
    people: [createPerson('Aaaaa', 'Bbbbb')]
};

const people = (state = initialState.people, action) => {
    console.info('ACTION:', action);
    switch (action.type) {
        case PERSON_ADDED:
            return [...state, createPerson(action.firstName, action.lastName)];
        case PERSON_REMOVED:
            const people = [...state];
            people.splice(action.idx, 1);
            return people;
        default:
            return state;
    }
};

const reducer = combineReducers({
    people
});

export default reducer;