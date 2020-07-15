import { takeEvery, all } from 'redux-saga/effects';

import { PHONE_GET } from '../types';
import { getPhoneNoSaga } from './phoneno';

export function* watchPhoneNo(phoneNo) {
    yield all([
        takeEvery(PHONE_GET, getPhoneNoSaga(phoneNo))
    ]);
}