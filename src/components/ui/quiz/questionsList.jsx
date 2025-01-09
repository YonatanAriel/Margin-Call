import Question from "./question";
import { forwardRef, useEffect } from "react";

// eslint-disable-next-line react/display-name
const QuestionsList = forwardRef(
  ({ showPopupAfterDelay, currentQuestions, scrollToNextQuestion }, ref) => {

      //   You are missing a dependency here (scrollToNextQuestion), you should add it
    useEffect(() => {
      const scrollToFirstQuestion = () => {
        scrollToNextQuestion(-1);
      };
      scrollToFirstQuestion();
    }, []);

    // The ref subject is little problematic for beginner, can you explain why you use it here?
    return (
      <ul className="w-11/12 sm:w-8/12 lg:w-6/12 ">
        {currentQuestions?.map((question, index) => (
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
