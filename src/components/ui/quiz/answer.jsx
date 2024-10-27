import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

function Answer({ answer, handleAnswerClick, isCorrectAnswer, showAnswer }) {
  const [userAnswered, setUserAnswered] = useState({
    correct: false,
    incorrect: false,
  });
  const [secondAnimation, setSecondAnimation] = useState(false);

  const circleColor =
    userAnswered.correct || (showAnswer && isCorrectAnswer(answer))
      ? "bg-[#66FF00]"
      : userAnswered.incorrect
      ? "bg-[#FF003F]"
      : "color-strongPurple";

  const handleAnimation = (isUserCorrect) => {
    setTimeout(() => {
      setSecondAnimation(true);
    }, 1000);
    if (isUserCorrect) {
      setUserAnswered((prev) => ({ ...prev, correct: true }));
    } else {
      setUserAnswered((prev) => ({ ...prev, incorrect: true }));
    }
  };

  const handleClick = () => {
    const ISUSERCORRECT = isCorrectAnswer(answer);
    if (ISUSERCORRECT) handleAnimation(true);
    else handleAnimation(false);
    handleAnswerClick(answer);
  };

  return (
    <div
      key={answer}
      onClick={handleClick}
      className={`
        ${
          userAnswered.correct &&
          !secondAnimation &&
          "animate-rubber-band duration-700"
        }
        ${
          userAnswered.incorrect &&
          !secondAnimation &&
          "animate-wobble duration-700"
        }
        ${
          secondAnimation &&
          " animate-backgroundColor bg-gradient-to-r from-veryLightPurple  to-lightPurple bg-opacity-30  "
        }  
        ${
          !userAnswered.correct &&
          !userAnswered.incorrect &&
          "bg-purple-50 bg-opacity-35"
        }
         hover:border-lightPurple border-regularPurple
        cursor-pointer flex hover:scale-[101%] items-center gap-3 p-4 transition-transform duration-75 border border-solid rounded-2xl
          `}
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
    </div>
  );
}

export default Answer;
