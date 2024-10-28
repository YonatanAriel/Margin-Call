import { createContext, useState } from "react";

export const Context = createContext(undefined);

function MainContext({ children }) {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isTriedAgain, setIsTriedAgain] = useState(false);
  const contextValue = {
    currentQuestions,
    setCurrentQuestions,
    correctAnswers,
    setCorrectAnswers,
    isTriedAgain,
    setIsTriedAgain,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default MainContext;
