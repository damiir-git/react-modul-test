import {takeEvery, put, call, all} from 'redux-saga/effects';
import {LOAD_DATA, requestData, requestDataError, putData, putAgentTypes} from '../store/actions';
import {getCompanies, getAgentTypes} from '../api';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* workerLoadData() {
    try {
        yield put(requestData());
        yield call(delay, 1000);
        const data = yield call(getCompanies);
        yield put(putData(data));
        const agentTypeData = yield call(getAgentTypes);
        yield put(putAgentTypes(agentTypeData));
    } catch (error) {
        yield put(requestDataError(error));
    }
}

export default function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData);
}

// export default function* rootSaga() {
//     yield all([
//         watchLoadData
//     ]);
// }