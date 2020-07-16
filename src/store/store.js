import createSagaMiddleware from "redux-saga";
import { watchPhoneNo } from "./sagas";
import appReducer from "./reducers";
import { compose, applyMiddleware, createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware();

//calling store functions
const store = createStore(
    appReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

sagaMiddleware.run(watchPhoneNo);

export default store;