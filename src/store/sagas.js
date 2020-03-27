import { all } from 'redux-saga/effects';
import { watchLoadData } from '../store/list/sagas';
import { watchLoadDataOne, watchSaveOne } from '../store/card/sagas';

export default function* rootSaga() {
    yield all([watchLoadData(), watchLoadDataOne(), watchSaveOne()])
}