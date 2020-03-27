import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as listReducer } from '../store/list/reducers';
import { reducer as cardReducer } from '../store/card/reducers';

export default combineReducers({
    list: listReducer,
    card: cardReducer,
    form: formReducer,
});