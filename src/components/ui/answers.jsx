import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Answer from "../answer";
import { useState } from "react";

function Answers({
  answers,
  correctAnswer,
  setCorrectAnswers,
  scrollToNextQuestion,
  index,
}) {
  const [disableClick, setDisableClick] = useState(false);
  const isCorrectAnswer = (clickedAnswer) => correctAnswer === clickedAnswer;
  const handleCorrectAnswer = () => setCorrectAnswers((prev) => prev + 1);

  const handleAnswerClick = (clickedAnswer) => {
    setDisableClick(true);
    isCorrectAnswer(clickedAnswer) && handleCorrectAnswer();
    setTimeout(() => scrollToNextQuestion(index), 1500);
  };
  return (
    <>
      <RadioGroup
        className={`${
          disableClick && "pointer-events-none"
        } flex flex-col gap-5`}
      >
        {answers.map((answer) => (
          <Answer
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
