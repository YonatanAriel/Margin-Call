import { RadioGroup } from "@/components/ui/radio-group";
import { useContext, useState } from "react";
import { Context } from "@/context/mainContext";
import Answer from "./answer";

function Answers({
  answers,
  correctAnswer,
  index,
  scrollToNextQuestion,
  showPopupAfterDelay,
}) {
  const { currentQuestions, setCorrectAnswers } = useContext(Context);
  const [disableClick, setDisableClick] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const isCorrectAnswer = (clickedAnswer) => correctAnswer === clickedAnswer;
  const handleCorrectAnswer = () => setCorrectAnswers((prev) => prev + 1);
  const revealAnswer = () => setShowAnswer(true);

  const handleAnswerClick = (clickedAnswer) => {
    setDisableClick(true);
    isCorrectAnswer(clickedAnswer) ? handleCorrectAnswer() : revealAnswer();
    const isLastQuestion = currentQuestions?.length - 1 == index;
    if (isLastQuestion) showPopupAfterDelay(1500);
    setTimeout(() => scrollToNextQuestion(index), 1500);
  };
  return (
    <>
      <RadioGroup
        className={`${
          disableClick && "pointer-events-none"
        } flex flex-col gap-5`}
      >
        {answers?.map((answer) => (
          <Answer
            showAnswer={showAnswer}
            isCorrectAnswer={isCorrectAnswer}
            key={answer}
            answer={answer}
            handleAnswerClick={handleAnswerClick}
            scrollToNextQuestion={scrollToNextQuestion}
          />
        ))}
      </RadioGroup>
    </>
  );
}

export default Answers;
