import { PHONE_SET, PHONE_ERROR, PHONE_GET } from "../types";

const initialState = {
    numRes: null,
    loading: true,
    error: null
};

//functions for reducers 
export const numReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHONE_SET:
            return { ...state, numRes: action.payload, loading: false };
        case PHONE_GET:
            return { ...state, numRes: action.payload, loading: false };
        case PHONE_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}