import { useSelector } from "react-redux";
import ToDo from "../todo/ToDo";
import classes from "./ToDoList.module.css";

const ToDoList = () => {
  const toDoS = useSelector((state) => state.toDoS);

  return (
    <ul className={classes.list}>
      {toDoS.map((item) => (
        <ToDo key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default ToDoList;
