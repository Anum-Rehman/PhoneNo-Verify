import { combineReducers } from "redux";
import { numReducer } from "./phoneno";

const appReducer = combineReducers({
    phoneRes: numReducer,
});

export default appReducer;