import React from "react";
import QuestionContext from "./QuestionContext";
import questions from "./Components/Questions/Questions";

const QuestionProvider = (props) => {
  let initialData = questions;
  const questionVisitedHandler = (id) => {
    const newQuestionArray = initialData;
    newQuestionArray[id].visited = true;
    initialData = newQuestionArray;
    // console.log(initialData)
  };

  const submitQuestionHandler = (id) => {
    const newQuestionArray = initialData;
    newQuestionArray[id].visited = true;
    newQuestionArray[id].submit = true;
    initialData = newQuestionArray;
  };

  const contextQuestions = {
    AllQuestions: initialData,
    visited: questionVisitedHandler,
    submitted: submitQuestionHandler,
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
