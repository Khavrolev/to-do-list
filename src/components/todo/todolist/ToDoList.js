import { useSelector } from "react-redux";
import { getUsersToDo } from "../../../selectors";
import ToDo from "../todo/ToDo";
import classes from "./ToDoList.module.css";

const ToDoList = () => {
  const filtredToDoS = useSelector((state) => getUsersToDo(state));

  return (
    <ul className={classes.list}>
      {filtredToDoS.map((item) => (
        <ToDo key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default ToDoList;
