import { combineReducers } from "redux";
import { toDoS } from "./toDoS";
import { user } from "./user";

export const rootReducer = combineReducers({ toDoS, user });
