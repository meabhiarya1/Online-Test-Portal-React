import React from "react";

const Button = (props) => {
  return (
    <div onClick={props.handleFunc} >
      {props.children}
    </div>
  );
};

export default Button;
