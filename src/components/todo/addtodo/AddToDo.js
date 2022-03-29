import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../../actions";
import { fetchToDos } from "../../../thunk";
import classes from "./AddToDo.module.css";

const AddToDo = () => {
  const [getDataVisible, setGetDataVisible] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let input;

  const handleAddToDo = (event) => {
    event.preventDefault();

    if (!input.value.trim()) {
      return;
    }

    dispatch(addToDo(input.value, user.id));

    input.value = "";
  };

  const handleClickGetData = () => {
    setGetDataVisible(false);
    dispatch(fetchToDos);
  };

  return (
    <div className={classes.control}>
      <form className={classes.form} onSubmit={handleAddToDo}>
        <input
          className={classes.field}
          type="text"
          name="todo"
          ref={(element) => (input = element)}
        />
        <input className={classes.btn} type="submit" value="Add ToDo" />
      </form>
      {getDataVisible && (
        <button
          style={{ marginLeft: "auto", marginTop: "10px", padding: "10px 0" }}
          className={classes.btn}
          onClick={handleClickGetData}
        >
          Get ToDos
        </button>
      )}
    </div>
  );
};

export default AddToDo;
