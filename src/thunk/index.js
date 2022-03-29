import axios from "axios";

export const fetchUsers = async (dispatch) => {
  const response = await axios.get(process.env.REACT_APP_GET_USERS);
  dispatch({ type: "LOAD_USERS", payload: response.data });
};

export const fetchToDos = async (dispatch) => {
  const response = await axios.get(process.env.REACT_APP_GET_TODOS);
  dispatch({ type: "LOAD_TODOS", payload: response.data });
};
