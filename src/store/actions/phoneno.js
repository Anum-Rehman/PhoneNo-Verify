import { PHONE_GET, PHONE_SET } from "../types";

export const getPhoneNo = (phoneNo) => {
    return {
        type: PHONE_GET,
        payload: phoneNo
    }
}

export const setPhoneNo = (phoneNo) => {
    return {
        type: PHONE_SET,
        payload: phoneNo
    }
}
