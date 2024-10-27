import { questions } from "@/data";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(undefined);

function MainContext({ children }) {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => console.log(questions), []);

  const contextValue = {
    currentQuestions,
    setCurrentQuestions,
    correctAnswers,
    setCorrectAnswers,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default MainContext;
