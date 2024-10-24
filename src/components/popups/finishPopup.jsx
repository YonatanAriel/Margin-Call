import { useEffect } from "react";

function FinishPopup({ correctAnswersSum, questionsSum, setShowFinishPopUp }) {
  return (
    <div
      onClick={() => setShowFinishPopUp(false)}
      className="fixed z-10 flex items-center justify-center w-full h-screen backdrop-blur-sm "
    >
      <div className="flex justify-center w-11/12 px-4 border-2 border-solid rounded-2xl py-28 bg-veryLightPurple lg:w-6/12 sm:w-10/12 md:w-8/12 border-strongPurple">
        <h1 className="text-4xl font-bold text-strongPurple ">{`${correctAnswersSum}/${questionsSum}`}</h1>
      </div>
    </div>
  );
}

export default FinishPopup;
