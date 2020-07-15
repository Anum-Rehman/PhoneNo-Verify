import { reject } from "q";
import { put, takeLatest, fork } from "redux-saga/effects";

import * as actions from "../actions";
import { setPhoneNo } from "../../utils/consts/api";

export function* getPhoneNoSaga(phoneNo) {
  try {
    const resp = yield setPhoneNo(phoneNo);
    yield put(actions.getPhoneNo(resp));
  } catch (error) {
    reject(error);
  }
}