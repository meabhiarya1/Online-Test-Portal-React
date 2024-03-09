import { createContext } from "react";

const QuestionContext = createContext({
  AllQuestions: [],
  visited: () => {},
  submitted: () => {},
  modifyAllQuestions: () => {},
});

export default QuestionContext;
