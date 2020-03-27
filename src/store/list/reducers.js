import { REQUEST_DATA, REQUEST_DATA_ERROR, PUT_DATA, PUT_AGENT_TYPES_DATA, UPDATE_COMPANIES } from '../../store/list/actions';

const initialState = {
    loading: true,
    error: false,
    companies: [],
    agentTypes: []
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return { ...state, ...{ loading: true, error: false } };
        case REQUEST_DATA_ERROR:
            return { ...state, ...{ loading: false, error: action.payload } };
        case PUT_DATA:
            return { ...state, ...{ loading: false, error: false, companies: action.payload } }
        case PUT_AGENT_TYPES_DATA:
            return { ...state, ...{ loading: false, error: false, agentTypes: action.payload } }
        case UPDATE_COMPANIES:
            let companies = [...state.companies];
            companies.forEach((value, index) => {
                if (value.Id == action.payload.Id) {
                    companies[index] = action.payload
                }
            });
            return { ...state, ...{ companies } }
        default:
            return state;
    }
}