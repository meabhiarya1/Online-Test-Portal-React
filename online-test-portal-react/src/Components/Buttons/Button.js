import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div onClick={props.handleFunc}>
      {/* <button
        // className={styles.button}
        
    //   > */}
        {props.children}
   
    </div>
  );
};

export default Button;
