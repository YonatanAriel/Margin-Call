import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useState } from "react";

export const Context = createContext(undefined);

function MainContext({ children }) {
  const [currentQuestions, setCurrentQuestions, removeCurrentQuestions] =
    useLocalStorage("currentQuestions", []);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isTriedAgain, setIsTriedAgain] = useState(false);
  const contextValue = {
    currentQuestions,
    setCurrentQuestions,
    removeCurrentQuestions,
    correctAnswers,
    setCorrectAnswers,
    isTriedAgain,
    setIsTriedAgain,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default MainContext;
