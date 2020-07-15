import { PHONE_GET, PHONE_SET, PHONE_ERROR } from "../types";

//action for getting PhoneNo 
export const getPhoneNo = (resp) => {
    return {
        type: PHONE_GET,
        payload: resp
    }
}

//action for setting PhoneNo
export const setPhoneNo = (payload) => {
    return {
        type: PHONE_SET,
        payload: payload
    }
}

//action for catching error
export const getError = (error) => {
    return {
        type: PHONE_ERROR,
        payload: error
    }
}