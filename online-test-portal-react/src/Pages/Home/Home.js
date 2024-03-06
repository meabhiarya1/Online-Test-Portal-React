import React, { useState } from "react";
import questions from "../../Components/Questions/Questions";
import styles from "./Home.module.css";

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [selectedAnswer, setSelectedAnswer] = useState(null);
  const currentQuestion = questions[currentQuestionIndex];

  const handlePrev = () => {
    setCurrentQuestionIndex((value) => {
      if (value > 0) {
        return value - 1;
      } else {
        return questions.length - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentQuestionIndex((value) => {
      if (value < questions.length - 1) {
        return value + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div key={currentQuestion.id} className={styles.question}>
          <div className={styles.questionText}>{currentQuestion.question}</div>

          <div className={styles.options}>
            <div className={styles.option}>
              <input type="radio" name={currentQuestion.id} />
              <label>{currentQuestion.options.opt1} </label>
            </div>
            <div className={styles.option}>
              <input type="radio" name={currentQuestion.id} />
              <label>{currentQuestion.options.opt2}</label>
            </div>
            <div className={styles.option}>
              <input type="radio" name={currentQuestion.id} />
              <label>{currentQuestion.options.opt3}</label>
            </div>
            <div className={styles.option}>
              <input type="radio" name={currentQuestion.id} />
              <label>{currentQuestion.options.opt4}</label>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            style={{ background: "green" }}
            className={styles.button}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            style={{ background: "orange" }}
            className={styles.button}
            onClick={handleNext}
          >
            Skip
          </button>
          <button
            style={{ background: "blue" }}
            className={styles.button}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
      <div>hello</div>
    </>
  );
};

export default Home;
