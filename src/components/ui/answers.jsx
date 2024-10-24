import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Answer from "../answer";

function Answers({
  answers,
  correctAnswer,
  setCorrectAnswers,
  scrollToNextQuestion,
  index,
}) {
  const isCorrectAnswer = (clickedAnswer) => correctAnswer === clickedAnswer;
  const handleCorrectAnswer = () => setCorrectAnswers((prev) => prev + 1);
  const handleClick = (clickedAnswer) => {
    isCorrectAnswer(clickedAnswer) && handleCorrectAnswer();
    setTimeout(() => scrollToNextQuestion(index), 1000);
  };
  return (
    <>
      <RadioGroup className="flex flex-col gap-5">
        {answers.map((answer) => (
          <Answer
            key={answer}
            answer={answer}
            handleClick={handleClick}
            scrollToNextQuestion={scrollToNextQuestion}
          />
        ))}
      </RadioGroup>
    </>
  );
}

export default Answers;
