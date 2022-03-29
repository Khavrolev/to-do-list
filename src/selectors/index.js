import { createSelector } from "reselect";

const getUser = (state) => state.user;
const getToDoS = (state) => state.toDoS;

export const getUsersToDo = createSelector([getUser, getToDoS], (user, toDoS) =>
  user ? toDoS.filter((item) => item.userId === user.id) : [],
);
