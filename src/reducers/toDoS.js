export const toDoS = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { id, title, userId } = action.payload;
      return [...state, { id, title, userId, completed: false }];
    }
    case "TOGGLE_TODO":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item,
      );
    case "LOAD_TODOS": {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};
