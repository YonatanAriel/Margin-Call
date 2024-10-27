import { useRef } from "react";
function useQuizNavigation(questions) {
  const questionRefs = useRef([]);

  const scrollToNextQuestion = (index) => {
    const isLastQuestion = index == questions.length - 1;
    if (isLastQuestion) return;

    const nextQuestionRef = questionRefs.current[index + 1];
    console.log(questionRefs);
    nextQuestionRef?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { questionRefs, scrollToNextQuestion };
}

export default useQuizNavigation;
