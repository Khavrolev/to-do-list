import { useDispatch, useSelector } from "react-redux";
import { toggleToDo } from "../../../actions";
import classes from "./ToDo.module.css";

const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onClick = (event) => {
    if (!user) {
      return;
    }
    event.preventDefault();
    dispatch(toggleToDo(todo.id));
  };

  return (
    <li
      className={classes.list_item}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
      onClick={onClick}
    >
      {todo.text}
    </li>
  );
};

export default ToDo;
