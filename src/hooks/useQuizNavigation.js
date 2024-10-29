import { useEffect, useRef, useState } from "react";
function useQuizNavigation(questions) {
  const questionRefs = useRef([]);
  // const [isUserScrolling, setIsUserScrolling] = useState(false);

  const scrollToNextQuestion = (index) => {
    const isLastQuestion = index == questions.length - 1;
    // if (isUserScrolling || isLastQuestion) return;
    if (isLastQuestion) return;

    const nextQuestionRef = questionRefs.current[index + 1];

    nextQuestionRef?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // useEffect(() => {
  //   let scrollTimeout;

  //   const handleScroll = () => {
  //     setIsUserScrolling(true);

  //     clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(() => {
  //       setIsUserScrolling(false);
  //     }, 200);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return { questionRefs, scrollToNextQuestion };
}

export default useQuizNavigation;
