import {takeEvery, put, call} from 'redux-saga/effects';
import {LOAD_DATA, putData} from '../store/actions';
import {getCompanies, getAgentTypes} from '../api';

function* workerLoadData() {
    const data = yield call(getCompanies);
    yield put(putData(data));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData);
}