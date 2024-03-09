import React, { useEffect, useContext, useState } from "react";
import styles from "./Options.module.css";
import QuestionContext from "../../QuestionContext";

const Options = (props) => {
  const [mark, setMark] = useState(false);
  const [optValue, setOptValue] = useState("");
  const ctx = useContext(QuestionContext);

  useEffect(() => {
    if (ctx.AllQuestions[props.currentQuestion.id].answer === null) {
      setOptValue("");
    } else {
      setOptValue(ctx.AllQuestions[props.currentQuestion.id].answer.ansValue);
    }
  }, []);
  
  useEffect(() => {
    props.onChecked(optValue, mark);
  }, [optValue,mark]);

  const changeHandler = (value, index) => {
    setOptValue(value);
    setMark(index);
    console.log("runn");
  };

  return (
    <>
      <div className={styles.options}>
        {Object.values(props.currentQuestion.options).map((opt, index) => {
          console.log("First: ", opt);
          console.log("second : ", optValue);
          return (
            <div className={styles.option} key={index}>
              <label>
                <input
                  type="radio"
                  name={props.currentQuestion.id}
                  checked={opt === optValue}
                  onChange={() => changeHandler(opt, index)}
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
