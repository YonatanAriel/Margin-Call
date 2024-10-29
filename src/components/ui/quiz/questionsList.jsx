import Question from "./question";
import { forwardRef, useEffect } from "react";

// eslint-disable-next-line react/display-name
const QuestionsList = forwardRef(
  ({ showPopupAfterDelay, currentQuestions, scrollToNextQuestion }, ref) => {
    useEffect(() => {
      const scrollToFirstQuestion = () => {
        scrollToNextQuestion(-1);
      };
      scrollToFirstQuestion();
    }, []);

    return (
      <ul className="w-11/12 sm:w-8/12 lg:w-6/12 ">
        {currentQuestions.map((question, index) => (
          <Question
            ref={(domElement) => (ref.current[index] = domElement)}
            scrollToNextQuestion={scrollToNextQuestion}
            key={question + index}
            q={question}
            index={index}
            showPopupAfterDelay={showPopupAfterDelay}
          />
        ))}
      </ul>
    );
  }
);

export default QuestionsList;
