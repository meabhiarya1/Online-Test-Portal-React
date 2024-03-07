import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import QuestionContext from "../../QuestionContext";
import Indicators from "../../Components/Indicators/Indicators";

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(false);

  const ctx = useContext(QuestionContext);
  const questions = ctx.AllQuestions;
  const currentQuestion = questions[currentQuestionIndex];
  // console.log(ctx.AllQuestions)

  // useEffect(() => {
  //   ctx.visited(0);
  // }, []);

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
      setSelected(false);
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

  const onChecked = (id) => {
    setSelected(true);
  };

  const changeStateHandler = (id) => {
    setCurrentQuestionIndex(id);
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
                <label>
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    onChange={onChecked}
                  />
                  {currentQuestion.options.opt1}{" "}
                </label>
              </div>
              <div className={styles.option}>
                <label>
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    onChange={onChecked}
                  />
                  {currentQuestion.options.opt2}
                </label>
              </div>

              <div className={styles.option}>
                <label>
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    onChange={onChecked}
                  />
                  {currentQuestion.options.opt3}
                </label>
              </div>

              <div className={styles.option}>
                <label>
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    onChange={onChecked}
                  />
                  {currentQuestion.options.opt4}
                </label>
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

            {!selected ? (
              <button style={{ background: "blue" }} className={styles.button}>
                Next
              </button>
            ) : (
              <button
                style={{ background: "blue" }}
                className={styles.button}
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>

        <Indicators changeStateHandler={changeStateHandler} />
      </div>
    </>
  );
};

export default Home;
