import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import AnswerContainer from "./answerContainer";
import useAnswerAnimation from "@/hooks/useAnswerAnimation";

function Answer({ answer, handleAnswerClick, isCorrectAnswer, showAnswer }) {
  const { userAnswered, secondAnimation, handleAnimation } =
    useAnswerAnimation();

  const circleColor =
    userAnswered.correct || (showAnswer && isCorrectAnswer(answer))
      ? "bg-[#66FF00]"
      : userAnswered.incorrect
      ? "bg-[#FF003F]"
      : "color-strongPurple";

  const handleClick = () => {
    const isUserCorrect = isCorrectAnswer(answer);
    if (isUserCorrect) handleAnimation(true);
    else handleAnimation(false);
    handleAnswerClick(answer);
  };

  return (
    <AnswerContainer
      userAnswered={userAnswered}
      secondAnimation={secondAnimation}
      handleClick={handleClick}
    >
      <RadioGroupItem
        value={answer}
        id={answer}
        className={` w-6 h-6 
          ${circleColor}`}
      />
      <Label className={`text-base text-strongPurple `} htmlFor={answer}>
        {answer}
      </Label>
    </AnswerContainer>
  );
}

export default Answer;
