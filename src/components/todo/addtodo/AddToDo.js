import { useDispatch } from "react-redux";
import { addToDo } from "../../../actions";
import classes from "../../input/Input.module.css";

const AddToDo = () => {
  const dispatch = useDispatch();
  let input;

  const onSubmit = (event) => {
    event.preventDefault();

    if (!input.value.trim()) {
      return;
    }

    dispatch(addToDo(input.value));

    input.value = "";
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <input
        className={classes.field}
        type="text"
        name="todo"
        ref={(element) => (input = element)}
      />
      <input className={classes.btn} type="submit" value="Add ToDo" />
    </form>
  );
};

export default AddToDo;
