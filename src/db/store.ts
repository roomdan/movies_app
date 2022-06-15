import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

// reeducers list
const reducers:any = combineReducers({});

// app store
const store:any = createStore(reducers, applyMiddleware(thunk));

export default store;