import { RadioGroup } from "@/components/ui/radio-group";
import Answer from "../answer";
import { useState } from "react";

function Answers({
  questionsLength,
  answers,
  correctAnswer,
  setCorrectAnswers,
  scrollToNextQuestion,
  index,
  handleFinishQuiz,
}) {
  const [disableClick, setDisableClick] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const isCorrectAnswer = (clickedAnswer) => correctAnswer === clickedAnswer;
  const handleCorrectAnswer = () => setCorrectAnswers((prev) => prev + 1);

  const revealAnswer = () => setShowAnswer(true);

  const handleAnswerClick = (clickedAnswer) => {
    setDisableClick(true);
    isCorrectAnswer(clickedAnswer) ? handleCorrectAnswer() : revealAnswer();
    const ISLASTQUESTION = questionsLength - 1 == index;
    if (ISLASTQUESTION) handleFinishQuiz();
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
