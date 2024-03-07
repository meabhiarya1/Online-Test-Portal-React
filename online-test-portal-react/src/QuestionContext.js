import { createContext } from "react";

const QuestionContext = createContext({
  AllQuestions: [],
  visited:()=>{}
});

export default QuestionContext;
