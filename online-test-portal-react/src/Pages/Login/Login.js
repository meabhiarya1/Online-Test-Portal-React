import React, { useRef } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [username, setUserName] = useState("");
  // const [warning, setWarning] = useState("");

  // const userNameHandler = (e) => {
  //   console.log(e.target.value);
  //   if (!e.target.value.includes("@")) {
  //     console.log("executed");
  //     setWarning("no @ added in field");
  //   } else {
  //     setWarning("");
  //   }
  // };

  const UserRef = useRef();
  const PassRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your are Logged In!!");
    console.log(UserRef.current.value, PassRef.current.value);
    UserRef.current.value = "";
    PassRef.current.value = "";
    navigate("/home");
  };

  return (
    <div className={classes.loginform}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formgroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            ref={UserRef}
            // onChange={userNameHandler}
          />
        </div>
        {/* <p>{warning}</p> */}
        <div className={classes.formgroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            ref={PassRef}
          />
        </div>
        <button type="submit" className={classes.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
