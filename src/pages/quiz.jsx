import FinishPopup from "../components/popups/finishPopup/finishPopup";
import QuestionsList from "@/components/ui/quiz/questionsList";
import QuizBackground from "@/components/ui/quiz/quizBackground";
import { Context } from "@/context/mainContext";
import usePopup from "@/hooks/usePopup";
import useQuizNavigation from "@/hooks/useQuizNavigation";
import { useContext } from "react";

function Quiz() {
  const { isPopupVisible, showPopupAfterDelay, hidePopup } = usePopup();

  const { currentQuestions } = useContext(Context);

  const { scrollToNextQuestion, questionRefs } =
    useQuizNavigation(currentQuestions);
  return (
    <div className="flex justify-center w-full min-h-screen ">
      <QuizBackground />
      <QuestionsList
        ref={questionRefs}
        showPopupAfterDelay={showPopupAfterDelay}
        currentQuestions={currentQuestions}
        scrollToNextQuestion={scrollToNextQuestion}
      />
      {isPopupVisible && (
        <FinishPopup
          scrollToNextQuestion={scrollToNextQuestion}
          hidePopup={hidePopup}
        />
      )}
    </div>
  );
}

export default Quiz;
