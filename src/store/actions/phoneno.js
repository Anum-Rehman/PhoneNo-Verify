import { PHONE_GET, PHONE_SET } from "../types";

export const getPhoneNo = () => {
    return {
        type: PHONE_GET
    }
}

export const setPhoneNo = (phoneNo) => {
    return {
        type: PHONE_SET,
        payload: phoneNo
    }
}
