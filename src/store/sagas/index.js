import { takeEvery, all } from 'redux-saga/effects';

import { PHONE_SET } from '../types';
import { setPhoneNoSaga } from './phoneno';

export function* watchPhoneNo() {
    yield all([
        takeEvery(PHONE_SET, setPhoneNoSaga)
    ]);
}