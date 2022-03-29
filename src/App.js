import { useDispatch, useSelector } from "react-redux";
import AddToDo from "./components/todo/addtodo/AddToDo";
import ToDoList from "./components/todo/todolist/ToDoList";
import LoginUser from "./components/users/LoginUser";
import classes from "./App.module.css";
import { useEffect } from "react";
import { fetchUsers } from "./thunk";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchUsers), [dispatch]);
  const user = useSelector((state) => state.user);

  return (
    <div className={classes.container}>
      <LoginUser />
      <div className={classes.mainframe}>
        {user && <AddToDo />}
        <ToDoList />
      </div>
    </div>
  );
};

export default App;
