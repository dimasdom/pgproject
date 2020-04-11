import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import UserReducer, {initialStateType} from "./reducers/UsersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
export interface stateType {
    Users:initialStateType
}
let state = createStore(combineReducers({
Users:UserReducer
}),composeWithDevTools(applyMiddleware(thunk)));

export default state