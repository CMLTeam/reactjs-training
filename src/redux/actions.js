import {PERSON_ADDED, PERSON_REMOVED} from "./actionTypes";


export const personAdded = (firstName, lastName) => ({
    type: PERSON_ADDED,
    firstName,
    lastName
});

export const personRemoved = (idx) => ({
    type: PERSON_REMOVED,
    idx
});