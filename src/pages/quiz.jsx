import FinishPopup from "../components/popups/finishPopup";
import QuestionsList from "@/components/ui/quiz/questionsList";
import QuizBackground from "@/components/ui/quiz/quizBackground";
import usePopup from "@/hooks/usePopup";

function Quiz() {
  const { isPopupVisible, showPopupAfterDelay, hidePopup } = usePopup();

  return (
    <div className="flex justify-center w-full min-h-screen ">
      <QuizBackground />
      <QuestionsList showPopupAfterDelay={showPopupAfterDelay} />
      {isPopupVisible && <FinishPopup hidePopup={hidePopup} />}
    </div>
  );
}

export default Quiz;
