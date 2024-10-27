import { useState } from "react";

function useAnswerAnimation() {
  const [userAnswered, setUserAnswered] = useState({
    correct: false,
    incorrect: false,
  });
  const [secondAnimation, setSecondAnimation] = useState(false);

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
  return { userAnswered, secondAnimation, handleAnimation };
}
export default useAnswerAnimation;
