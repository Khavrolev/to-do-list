let idToDoCounter = 201;

export const addToDo = (title, userId) => ({
  type: "ADD_TODO",
  payload: {
    id: idToDoCounter++,
    title,
    userId,
  },
});

export const toggleToDo = (id) => ({
  type: "TOGGLE_TODO",
  payload: {
    id,
  },
});

export const loginUser = (user) => ({
  type: "LOGIN_USER",
  payload: { ...user },
});

export const logoutUser = () => ({
  type: "LOGOUT_USER",
});
