import React from "react";
import QuestionContext from "./QuestionContext";
import questions from "./Components/Questions/Questions";

const QuestionProvider = (props) => {
  let initialData = questions;

  let updatedData = initialData.map((item) => {
    return { ...item, answer: null };
  });

  // console.log(updatedData);

  const questionVisitedHandler = (id) => {
    const newQuestionArray = updatedData;
    newQuestionArray[id].visited = true;
    updatedData = newQuestionArray;
    // console.log(initialData)
  };

  const submitQuestionHandler = (id) => {
    const newQuestionArray = updatedData;
    newQuestionArray[id].visited = true;
    newQuestionArray[id].submit = true;
    updatedData = newQuestionArray;
  };

  const submitAnswerHandler = (id, ans, selectedOption) => {
    const newQuestionArray = updatedData;
    const obj = {
      ansNo: selectedOption,
      ansValue: ans,
    };
    newQuestionArray[id].answer = obj;
    updatedData = newQuestionArray;
  };

  const contextQuestions = {
    AllQuestions: updatedData,
    visited: questionVisitedHandler,
    submitted: submitQuestionHandler,
    modifyAllQuestions: submitAnswerHandler,
  };

  return (
    <div>
      <QuestionContext.Provider value={contextQuestions}>
        {props.children}
      </QuestionContext.Provider>
    </div>
  );
};

export default QuestionProvider;
