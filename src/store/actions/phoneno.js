import { PHONE_GET, PHONE_SET } from "../types";

export const getPhoneNo = (resp) => {
    console.log("Action")
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
