let idToDoCounter = 0;
let idUserCounter = 0;

export const addToDo = (text) => ({
  type: "ADD_TODO",
  id: idToDoCounter++,
  text,
});

export const toggleToDo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const loginUser = (name) => ({
  type: "LOGIN_USER",
  id: idUserCounter++,
  name,
});

export const logoutUser = () => ({
  type: "LOGOUT_USER",
});
