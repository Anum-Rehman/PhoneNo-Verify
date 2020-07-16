import { reject } from "q";
import { put } from "redux-saga/effects";

import * as actions from "../actions";
import { setPhoneNo } from "../../utils/consts/api";

//calling saga functions 
export function* setPhoneNoSaga(action) {
  try {
    const resp = yield setPhoneNo(action.payload);
    yield put(actions.getPhoneNo(resp.data));
  } catch (error) {
    yield put(actions.getError(error));
    reject(error);
  }
}