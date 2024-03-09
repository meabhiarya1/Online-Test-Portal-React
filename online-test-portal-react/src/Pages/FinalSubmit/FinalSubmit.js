import React, { useContext, useState } from "react";
import styles from "./FinalSubmit.module.css"; // Import the CSS module
import QuestionContext from "../../QuestionContext";

const FinalSubmit = () => {
  const ctx = useContext(QuestionContext);

  let skipCounter = 0;
  let attemptedCounter = 0;
  let notvisitedCounter = 0;

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>
        Thankyou !!! The test has been Submitted Succesfully..
      </h4>
      <div>
        <h1>Your Submission</h1>
        <div>
          {ctx.AllQuestions.map((question, index) => {
            if (question.submit && question.visited) {
              attemptedCounter++;
            } else if (question.visited && !question.submit) {
              skipCounter++;
            } else if (!question.visited && !question.submitted) {
              notvisitedCounter++;
            }
          })}
            <div className={styles.results}>Attempted: {skipCounter}</div>
            <div className={styles.results}>Submitted : {attemptedCounter}</div>
            <div className={styles.results}>Not Visited: {notvisitedCounter}</div>
        </div>
      </div>
    </div>
  );
};

export default FinalSubmit;
