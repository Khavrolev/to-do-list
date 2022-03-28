import { useSelector } from "react-redux";
import AddToDo from "./components/todo/addtodo/AddToDo";
import ToDoList from "./components/todo/todolist/ToDoList";
import LoginUser from "./components/users/LoginUser";
import classes from "./App.module.css";

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className={classes.container}>
      <LoginUser />
      {user && <AddToDo />}
      <ToDoList />
    </div>
  );
};

export default App;
