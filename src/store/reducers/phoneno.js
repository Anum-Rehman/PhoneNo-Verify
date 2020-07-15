import { PHONE_SET, PHONE_ERROR, PHONE_GET } from "../types";

const initialState = {
    rates: null,
    loading: true,
    error: null
};

export const rateReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHONE_SET:
            return { ...state, rates: action.payload, loading: false };
        case PHONE_GET:
            return { ...state, rates: action.payload, loading: false };
        case PHONE_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}