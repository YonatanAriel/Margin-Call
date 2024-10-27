import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import AnswerContainer from "./answerContainer";
import useAnswerAnimation from "@/hooks/useAnswerAnimation";

function Answer({ answer, handleAnswerClick, isCorrectAnswer, showAnswer }) {
  // const [userAnswered, setUserAnswered] = useState({
  //   correct: false,
  //   incorrect: false,
  // });
  // const [secondAnimation, setSecondAnimation] = useState(false);
  const { userAnswered, secondAnimation, handleAnimation } =
    useAnswerAnimation();

  const circleColor =
    userAnswered.correct || (showAnswer && isCorrectAnswer(answer))
      ? "bg-[#66FF00]"
      : userAnswered.incorrect
      ? "bg-[#FF003F]"
      : "color-strongPurple";

  // const handleAnimation = (isUserCorrect) => {
  //   setTimeout(() => {
  //     setSecondAnimation(true);
  //   }, 1000);
  //   if (isUserCorrect) {
  //     setUserAnswered((prev) => ({ ...prev, correct: true }));
  //   } else {
  //     setUserAnswered((prev) => ({ ...prev, incorrect: true }));
  //   }
  // };

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
