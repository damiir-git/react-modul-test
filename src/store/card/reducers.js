import { PUT_DATA_ONE } from '../../store/card/actions';
import { UPDATE_COMPANIES } from '../../store/list/actions';

export function reducer(state = {}, action) {
    switch (action.type) {
        case PUT_DATA_ONE:
            return { ...state, ...action.payload };
        case UPDATE_COMPANIES:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}