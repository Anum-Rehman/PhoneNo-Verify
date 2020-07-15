import { PHONE_GET, PHONE_SET } from "../types";

export const getPhoneNo = (resp) => {
    console.log("Action")
    return {
        type: PHONE_GET,
        payload: resp
    }
}

export const setPhoneNo = (payload) => {
    console.log("Action", payload)
    return {
        type: PHONE_SET,
        payload: payload
    }
}
