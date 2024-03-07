import React from "react";
import styles from "./Options.module.css";

const Options = (props) => {
  return (
    <>
      <div className={styles.options}>
        {Object.values(props.currentQuestion.options).map((opt, index) => {
          return (
            <div className={styles.option} key={index}>
              <label>
                <input
                  type="radio"
                  name={props.currentQuestion.id}
                  onChange={props.onChecked}
                />
                {opt}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Options;
