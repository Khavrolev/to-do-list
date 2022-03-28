import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../actions";
import classes from "../input/Input.module.css";

const LoginUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let input;

  const onSubmit = (event) => {
    event.preventDefault();

    if (!input.value.trim()) {
      return;
    }

    dispatch(loginUser(input.value));

    input.value = "";
  };

  const onClick = (event) => {
    event.preventDefault();

    dispatch(logoutUser());
  };

  return (
    <div>
      {user ? (
        <div className={classes.form}>
          <div className={classes.field}>{user.name}</div>
          <button className={classes.btn} onClick={onClick}>
            Logout
          </button>
        </div>
      ) : (
        <form className={classes.form} onSubmit={onSubmit}>
          <input
            className={classes.field}
            type="text"
            name="user"
            ref={(element) => (input = element)}
          />
          <input className={classes.btn} type="submit" value="Login" />
        </form>
      )}
    </div>
  );
};

export default LoginUser;
