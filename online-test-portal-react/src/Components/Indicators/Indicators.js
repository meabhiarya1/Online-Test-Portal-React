import React, { useContext } from "react";
import QuestionContext from "../../QuestionContext";
import styles from "./Indicators.module.css";

const Indicators = (props) => {
  const ctx = useContext(QuestionContext);
  const questions = ctx.AllQuestions;

  const jumpHandler = (index) => {
    ctx.visited(index);
    props.changeStateHandler(index);
  };

  return (
    <div className={styles.indicator}>
      {questions.map((current, index) => {
        let backGroundColorOfDiv = "red";
        if (current.visited && !current.submit) {
          backGroundColorOfDiv = "gold";
        } else if (current.visited && current.submit) {
          backGroundColorOfDiv = "green";
          // console.log("true")
        }
        return (
          <div
            key={index}
            className={styles.indicatorDiv}
            onClick={() => jumpHandler(index)}
            style={{ backgroundColor: backGroundColorOfDiv }}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default Indicators;
