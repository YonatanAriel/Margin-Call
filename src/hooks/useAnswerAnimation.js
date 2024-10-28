import { useState } from "react";

function useAnswerAnimation() {
  const [userAnswered, setUserAnswered] = useState({
    correct: false,
    incorrect: false,
  });
  const [secondAnimation, setSecondAnimation] = useState(false);

  const startAnimation = (isUserCorrect) => {
    setTimeout(() => {
      setSecondAnimation(true);
    }, 1000);
    if (isUserCorrect) {
      setUserAnswered((prev) => ({ ...prev, correct: true }));
    } else {
      setUserAnswered((prev) => ({ ...prev, incorrect: true }));
    }
  };

  const finishAnimation = () => {
    setSecondAnimation(false);
    setUserAnswered({ correct: false, incorrect: false });
  };

  return { userAnswered, secondAnimation, startAnimation, finishAnimation };
}
export default useAnswerAnimation;
