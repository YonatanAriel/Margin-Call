import Question from "./question";
import { useContext } from "react";
import { Context } from "@/context/mainContext";
import UseQuizNavigation from "@/hooks/useQuizNavigation";

function QuestionsList({ handleFinishQuiz }) {
  const { currentQuestions } = useContext(Context);
  const { scrollToNextQuestion, questionRefs } =
    UseQuizNavigation(currentQuestions);

  return (
    <ul className="w-10/12 sm:w-8/12 lg:w-6/12 ">
      {currentQuestions.map((question, index) => (
        <Question
          ref={(domElement) => (questionRefs.current[index] = domElement)}
          scrollToNextQuestion={scrollToNextQuestion}
          key={question + index}
          q={question}
          index={index}
          handleFinishQuiz={handleFinishQuiz}
        />
      ))}
    </ul>
  );
}
export default QuestionsList;
