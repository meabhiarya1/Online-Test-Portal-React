import React, { useContext, useState } from "react";
import styles from "./Home.module.css";
import QuestionContext from "../../QuestionContext";

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const ctx = useContext(QuestionContext);
  const questions = ctx.AllQuestions;
  const currentQuestion = questions[currentQuestionIndex];
  // console.log(ctx.AllQuestions)

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
      ctx.visited(value);
      ctx.submitted(value);
      if (value < questions.length - 1) {
        return value + 1;
      } else {
        return 0;
      }
    });
  };

  const handleSkip = () => {
    setCurrentQuestionIndex((value) => {
      ctx.visited(value);
      if (value < questions.length - 1) {
        return value + 1;
      } else {
        return 0;
      }
    });
  };

  const jumpHalder = (index) => {
    ctx.visited(index);
    setCurrentQuestionIndex(index);
  };

  const onChecked = (id) => {
    // console.log(id);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.questionContainer}>
          <div key={currentQuestion.id} className={styles.question}>
            <div className={styles.questionText}>
              Q{currentQuestion.id}. {currentQuestion.question}
            </div>

            <div className={styles.options}>
              <div className={styles.option}>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  onChange={onChecked(currentQuestion.id)}
                />
                <label>{currentQuestion.options.opt1} </label>
              </div>
              <div className={styles.option}>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  onChange={onChecked(currentQuestion.id)}
                />
                <label>{currentQuestion.options.opt2}</label>
              </div>
              <div className={styles.option}>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  onChange={onChecked(currentQuestion.id)}
                />
                <label>{currentQuestion.options.opt3}</label>
              </div>
              <div className={styles.option}>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  onChange={onChecked(currentQuestion.id)}
                />
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
              onClick={handleSkip}
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
                onClick={() => jumpHalder(index)}
                style={{ backgroundColor: backGroundColorOfDiv }}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
