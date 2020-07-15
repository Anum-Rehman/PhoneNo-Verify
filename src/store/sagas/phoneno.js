import { reject } from "q";
import { put, takeLatest, fork } from "redux-saga/effects";

import * as actions from "../actions";
import { getPhoneNo, setPhoneNo } from "../../utils/consts/api";

export function* getPhoneNoSaga() {
  try {
    const resp = yield getPhoneNo();
    yield put(actions.setPhoneNo(resp.phoneno));
  } catch (error) {
    reject(error);
  }
}