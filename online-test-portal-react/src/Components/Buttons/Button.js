import React from "react";

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
