import { PHONE_GET, PHONE_SET, PHONE_ERROR } from "../types";

//action for getting PhoneNo 
export const getPhoneNo = (resp) => ({
    type: PHONE_GET,
    payload: resp
});

//action for setting PhoneNo
export const setPhoneNo = (payload) => ({
    type: PHONE_SET,
    payload: payload
});


//action for catching error
export const getError = (error) => ({
    type: PHONE_ERROR,
    payload: error
});
