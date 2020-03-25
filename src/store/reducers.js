import {REQUEST_DATA, REQUEST_DATA_ERROR, PUT_DATA, PUT_AGENT_TYPES_DATA} from '../store/actions';

const initialState = {
    companies: [],
    agentTypes: []
  };

export function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_DATA: 
            return {...state, ...{loading: true, error: false}};
        case REQUEST_DATA_ERROR:
            return {...state, ...{loading: false, error: action.payload}};
        case PUT_DATA:
            return { ...state, ...{loading: false, error: false, companies: action.payload } }
        case PUT_AGENT_TYPES_DATA:
            return { ...state, ...{loading: false, error: false, agentTypes: action.payload } }
        default:
            return state;
    }
}