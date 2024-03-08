import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import QuestionContext from "../../QuestionContext";
import Indicators from "../../Components/Indicators/Indicators";
import Options from "../../Components/Options/Options";
import Button from "../../Components/Buttons/Button";
import Timer from "../../Components/Timer/Timer";

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(false);
  const [results, setResult] = useState([]);
  const [value, setValue] = useState();
  const [opt, setOpt] = useState("");

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

  const handleNext = (opt) => {
    setResult((result) => {
      const existingQuestionIndex = result.findIndex(
        (question) => question.quesNo === currentQuestionIndex + 1
      );

      if (existingQuestionIndex !== -1) {
        return result.map((question, index) =>
          index === existingQuestionIndex
            ? { ...question, quesAns: opt, optNo: value }
            : question
        );
      } else {
        return [
          ...result,
          { quesNo: currentQuestionIndex + 1, quesAns: opt, optNo: value },
        ];
      }
    });
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
  // console.log(results);
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

  const onChecked = (opt, index) => {
    setValue(index);
    setOpt(opt);
    setSelected(true);
  };

  const changeStateHandler = (id) => {
    setCurrentQuestionIndex(id);
  };

  return (
    <>
    <Timer/>
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

            <Options
              currentQuestion={currentQuestion}
              onChecked={onChecked}
              optNoIndex={results.map((result) => {
                if (result.optNo) {
                  return result.optNo;
                }
              })}
            />
          </div>

          {/* buttons for prev skip next */}
          <div className={styles.buttonContainer}>
            <div style={{ background: "green" }} className={styles.button}>
              <Button handleFunc={handlePrev}>Prev</Button>
            </div>

            <div style={{ background: "orange" }} className={styles.button}>
              <Button handleFunc={handleSkip}>Skip</Button>
            </div>

            <div style={{ background: "blue" }} className={styles.button}>
              {!selected ? (
                <Button>Next</Button>
              ) : (
                <Button
                  handleFunc={() => {
                    handleNext(opt);
                  }}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>

        <Indicators changeStateHandler={changeStateHandler} />
      </div>
    </>
  );
};

export default Home;
