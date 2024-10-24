import { useEffect, useRef, useState } from "react";
import "./App.css";
import Answers from "./components/ui/answers";
import { questions } from "./data";

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  useEffect(() => console.log(correctAnswers), [correctAnswers]);
  const questionRefs = useRef([]);
  // const scrollToNextQuestion = (index) => {
  //   if (index < questions.length - 1) {
  //     const nextQuestionRef = questionRefs.current[index + 1];
  //     nextQuestionRef?.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };
  const scrollToNextQuestion = (index) => {
    const ISLASTQUESTION = !(index < questions.length - 1);
    if (ISLASTQUESTION) return;
    const nextQuestionRef = questionRefs.current[index + 1];
    nextQuestionRef?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="flex justify-center w-full min-h-screen ">
      <img
        // src="\light_purple.webp"
        src="\light_purple2.jpg"
        alt=""
        className="fixed w-full h-screen -z-10"
      />
      <ul className="w-10/12 sm:w-8/12 lg:w-6/12 ">
        {questions.map((q, i) => (
          <li
            ref={(domElement) => (questionRefs.current[i] = domElement)}
            key={q.question}
            className="flex flex-col justify-center h-screen "
          >
            <div className="p-5 rounded-md h-fit ">
              <h3 className=" text-xl min-[400px]:text-2xl mb-8 text-strongPurple font-bold">
                <span className="text-regularPurple">{`${i + 1}. `}</span>
                {q.question}
              </h3>
              <Answers
                index={i}
                scrollToNextQuestion={scrollToNextQuestion}
                answers={q.answers}
                correctAnswer={q.correctAnswer}
                setCorrectAnswers={setCorrectAnswers}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
