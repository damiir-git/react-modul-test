import { takeEvery, put, call } from 'redux-saga/effects';
import { putDataOne, LOAD_ONE, SAVE_ONE } from '../../store/card/actions';
import { updateCompanies } from '../../store/list/actions';
import { putAgentTypes } from '../../store/list/actions';
import { getCompaniesById, getAgentTypes, setCompanies } from '../../api';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* workerLoadOne(action) {
    yield call(delay, 500);
    const data = yield call(getCompaniesById, action.payload);
    yield put(putDataOne(data));
    const agentTypeData = yield call(getAgentTypes);
    yield put(putAgentTypes(agentTypeData));

}

function* workerSaveOne(action) {
    yield call(delay, 500);
    const data = yield call(setCompanies, action.payload);
    yield put(updateCompanies(data));

}

export function* watchLoadDataOne() {
    yield takeEvery(LOAD_ONE, workerLoadOne)
}

export function* watchSaveOne() {
    yield takeEvery(SAVE_ONE, workerSaveOne)
}