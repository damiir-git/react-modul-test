import {PUT_DATA} from '../store/actions';

const initialState = {
    companies: [],
    agentTypes: []
  };

export function reducer(state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        case PUT_DATA:
            console.log('PUT_DATA', { ...state, ...{ companies: action.payload } });
            return { ...state, ...{ companies: action.payload } }
        default:
            return state;
    }
}