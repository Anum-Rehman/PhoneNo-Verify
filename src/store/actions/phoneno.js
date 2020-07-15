import { PHONE_GET, PHONE_SET, PHONE_ERROR } from "../types";

export const getPhoneNo = (resp) => {
    return {
        type: PHONE_GET,
        payload: resp
    }
}

export const setPhoneNo = (payload) => {
    return {
        type: PHONE_SET,
        payload: payload
    }
}

export const getError = (error) => {
    return {
        type: PHONE_ERROR,
        payload: error
    }
}