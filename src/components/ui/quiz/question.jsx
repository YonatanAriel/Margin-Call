/* eslint-disable react/display-name */
import { forwardRef } from "react";
import Answers from "./answers";

const Question = forwardRef(
  ({ q, index, scrollToNextQuestion, showPopupAfterDelay }, ref) => (
    <li
      ref={ref}
      key={q.question}
      className="flex flex-col justify-center h-screen "
    >
      <div className="p-5 rounded-md h-fit ">
        <h3 className=" text-xl min-[400px]:text-2xl mb-8 text-strongPurple font-bold">
          <span className="text-regularPurple">{`${index + 1}. `}</span>
          {q.question}
        </h3>
        <Answers
          showPopupAfterDelay={showPopupAfterDelay}
          index={index}
          scrollToNextQuestion={scrollToNextQuestion}
          answers={q.answers}
          correctAnswer={q.correctAnswer}
        />
      </div>
    </li>
  )
);

export default Question;
