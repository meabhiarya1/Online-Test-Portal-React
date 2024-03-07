import { createContext } from "react";

const QuestionContext = createContext({
  AllQuestions: [],
  visited: () => {},
  submitted: () => {},
});

export default QuestionContext;
