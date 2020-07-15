import { combineReducers } from "redux";
import { numReducer } from "./phoneno";

//function for all reducers
const appReducer = combineReducers({
    phoneRes: numReducer,
});

export default appReducer;