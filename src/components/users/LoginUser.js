import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { loginUser, logoutUser } from "../../actions";
import classes from "./LoginUser.module.css";

const LoginUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  let inputId = -1;

  const selectOptions = useMemo(
    () =>
      users.map((item) => {
        return { value: item.id, label: item.username };
      }),
    [users],
  );

  const handleLogin = (event) => {
    event.preventDefault();

    if (inputId < 0) {
      return;
    }

    dispatch(loginUser(users.find((item) => item.id === inputId)));

    inputId = -1;
  };

  const handleLogout = (event) => {
    event.preventDefault();

    dispatch(logoutUser());
  };

  const handleSelectChange = (event) => {
    inputId = event.value;
  };

  return (
    <div className={classes.sidebar}>
      {user ? (
        <div className={classes.form}>
          <div className={classes.field}>{user.username}</div>
          <button className={classes.btn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form className={classes.form} onSubmit={handleLogin}>
          <Select
            className={classes.select}
            options={selectOptions}
            onChange={handleSelectChange}
          />
          <input className={classes.btn} type="submit" value="Login" />
        </form>
      )}
    </div>
  );
};

export default LoginUser;
