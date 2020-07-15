import { takeEvery, all } from 'redux-saga/effects';

import { PHONE_GET } from '../types';
import { getPhoneNoSaga } from './phoneno';

export function* watchPhoneNo() {
    yield all([
        takeEvery(PHONE_GET, getPhoneNoSaga())
    ]);
}