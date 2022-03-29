import { combineReducers } from "redux";
import { toDoS } from "./toDoS";
import { user } from "./user";
import { users } from "./users";

export const rootReducer = combineReducers({ toDoS, user, users });
