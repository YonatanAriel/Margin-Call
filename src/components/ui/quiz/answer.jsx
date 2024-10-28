import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import AnswerContainer from "./answerContainer";
import useAnswerAnimation from "@/hooks/useAnswerAnimation";
import { useContext, useEffect } from "react";
import { Context } from "@/context/mainContext";

function Answer({
  answer,
  handleAnswerClick,
  isCorrectAnswer,
  showAnswer,
  setShowAnswer,
  setDisableClick,
}) {
  const { userAnswered, secondAnimation, startAnimation, finishAnimation } =
    useAnswerAnimation();

  const { isTriedAgain } = useContext(Context);

  useEffect(() => {
    const hideAnswer = () => {
      setShowAnswer(false);
      finishAnimation();
      setDisableClick(false);
    };
    if (isTriedAgain) hideAnswer();
  }, [isTriedAgain]);

  const circleColor =
    userAnswered.correct || (showAnswer && isCorrectAnswer(answer))
      ? "bg-[#66FF00]"
      : userAnswered.incorrect
      ? "bg-[#FF003F]"
      : "color-strongPurple";

  const handleClick = () => {
    const isUserCorrect = isCorrectAnswer(answer);
    if (isUserCorrect) startAnimation(true);
    else startAnimation(false);
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
