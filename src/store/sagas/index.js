import { takeEvery, all } from 'redux-saga/effects';

import { PHONE_GET } from '../types';
import { getPhoneNoSaga } from './phoneno';

export function* watchPhoneNo() {
    console.log("Watch")
    yield all([
        takeEvery(PHONE_GET, getPhoneNoSaga)
    ]);
}