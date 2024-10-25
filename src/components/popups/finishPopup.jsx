import { useEffect, useState } from "react";

function FinishPopup({ correctAnswersSum, questionsSum, setShowFinishPopUp }) {
  const [resultMessage, setResultMessage] = useState();
  function getResultMessage() {
    const PERCENTAGE = (correctAnswersSum / questionsSum) * 100;
    if (PERCENTAGE === 100) return "Wow, you’re a master! Full marks!";
    else if (PERCENTAGE >= 80) {
      return "Awesome effort! You’re so close to perfection!";
    } else if (PERCENTAGE >= 50) {
      return "Good work! You’re getting there!";
    } else return "Don’t give up! Every attempt makes you better!";
  }

  useEffect(() => {
    const resultMessage = getResultMessage();
    setResultMessage(resultMessage);
  }, [questionsSum, correctAnswersSum]);

  return (
    <div
      onClick={() => setShowFinishPopUp(false)}
      className="fixed z-10 flex items-center justify-center w-full h-screen backdrop-blur-sm animate-tada "
    >
      <div className="flex flex-col items-center justify-center w-11/12 gap-4 px-4 text-center border-2 border-solid rounded-2xl py-28 bg-veryLightPurple lg:w-6/12 sm:w-10/12 md:w-8/12 border-strongPurple">
        <h1 className="text-4xl font-bold animate-zoom-in text-strongPurple ">{`${correctAnswersSum}/${questionsSum}`}</h1>
        <h3 className="text-2xl text-strongPurple animate-zoom-in">
          {resultMessage}
        </h3>
      </div>
    </div>
  );
}

export default FinishPopup;
