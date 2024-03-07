import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import QuestionContext from "../../QuestionContext";
import Indicators from "../../Components/Indicators/Indicators";
import Options from "../../Components/Options/Options";
import Button from "../../Components/Buttons/Button";

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(false);

  const ctx = useContext(QuestionContext);
  const questions = ctx.AllQuestions;
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

  const onChecked = () => {
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

            <div>
              {/* <div className={styles.option}>
                <label>
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    onChange={onChecked}
                  />
                  {currentQuestion.options.opt1}{" "}
                </label>
              </div> */}

              {/* <div className={styles.option}>
                <label>
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    onChange={onChecked}
                  />
                  {currentQuestion.options.opt2}
                </label>
              </div> */}

              {/* <div className={styles.option}>
                <label>
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    onChange={onChecked}
                  />
                  {currentQuestion.options.opt3}
                </label>
              </div> */}

              {/* {Object.values(currentQuestion.options).map((opt, index) => {
                return (
                  <div className={styles.option} key={index}>
                    <label>
                      <input
                        type="radio"
                        name={currentQuestion.id}
                        onChange={onChecked}
                      />
                      {opt}
                    </label>
                  </div>
                );
              })} */}
            </div>

            <Options currentQuestion={currentQuestion} onChecked={onChecked} />
          </div>

          {/* buttons for prev skip next */}
          <div className={styles.buttonContainer}>
            <div>
              <Button
                // className={styles.button}
                handleFunc={handlePrev}
              >
                Prev
              </Button>
            </div>

            <div style={{ background: "orange" }} className={styles.button} >
              <Button handleFunc={handleSkip}>Skip</Button>
            </div>

            {!selected ? (
              <Button style={{ background: "blue" }} className={styles.button}>
                Next
              </Button>
            ) : (
              <Button
                style={{ background: "blue" }}
                className={styles.button}
                handleFunc={handleNext}
              >
                Next
              </Button>
            )}
          </div>
        </div>

        <Indicators changeStateHandler={changeStateHandler} />
      </div>
    </>
  );
};

export default Home;
