export const users = (state = [], action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return action.payload;
    default:
      return state;
  }
};
