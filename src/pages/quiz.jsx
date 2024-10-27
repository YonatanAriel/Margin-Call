import { useState } from "react";
import FinishPopup from "../components/popups/finishPopup";
import QuestionsList from "@/components/ui/quiz/questionsList";
import QuizBackground from "@/components/ui/quiz/quizBackground";

function Quiz() {
  const [showFinishPopUp, setShowFinishPopUp] = useState(false);

  const handleFinishQuiz = () =>
    setTimeout(() => setShowFinishPopUp(true), 1500);
  return (
    <div className="flex justify-center w-full min-h-screen ">
      <QuizBackground />
      {showFinishPopUp && (
        <FinishPopup setShowFinishPopUp={setShowFinishPopUp} />
      )}
      <QuestionsList handleFinishQuiz={handleFinishQuiz} />
    </div>
  );
}

export default Quiz;
