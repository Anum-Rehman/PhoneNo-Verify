import { combineReducers } from "redux";
import { rateReducer } from "./phoneno";

const appReducer = combineReducers({
    rate: rateReducer
});

export default appReducer;