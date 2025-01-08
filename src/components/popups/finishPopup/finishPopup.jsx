import { Context } from "@/context/mainContext";
import { useContext, useMemo } from "react";
import Buttons from "./buttons";

function FinishPopup({ hidePopup, scrollToNextQuestion }) {
  const { currentQuestions, correctAnswers } = useContext(Context);
  const percentage = useMemo(
    () => (correctAnswers / currentQuestions.length) * 100,
    [correctAnswers, currentQuestions]
  );

  function getResultMessage() {
    if (percentage === 100) return "Wow, you’re a master! Full marks!";
    else if (percentage >= 80) {
      return "Awesome effort! You’re so close to perfection!";
    } else if (percentage >= 45) {
      return "Good work! You’re getting there!";
    } else return "Don’t give up! Every attempt makes you better!";
  }

  const resultMessage = useMemo(
    () => getResultMessage(),
    [correctAnswers, currentQuestions.length]
  );

  const animation =
    percentage >= 80 ? "tada" : percentage >= 45 ? "jump" : "pulse-fade-in";

  return (
    <div
      className={`fixed z-10 flex items-center justify-center w-full h-screen backdrop-blur-sm animate-${animation} `}
    >
      <div className="flex flex-col w-11/12 gap-4 px-6 py-8 pr-4 shadow-xl sm:py-12 md:pl-14 rounded-2xl bg-veryLightPurple lg:w-6/12 sm:w-10/12 md:w-8/12 ">
        <h1 className="text-4xl font-bold animate-zoom-in text-strongPurple ">{`${correctAnswers}/${currentQuestions.length}`}</h1>
        <h3 className="text-xl text-strongPurple animate-zoom-in">
          {resultMessage}
        </h3>
        <Buttons
          hidePopup={hidePopup}
          scrollToNextQuestion={scrollToNextQuestion}
        />
      </div>
    </div>
  );
}

export default FinishPopup;
