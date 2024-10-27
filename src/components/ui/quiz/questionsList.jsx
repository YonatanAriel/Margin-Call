// import Answers from "../answers";

// function QuestionsList({ questions }) {
//   return (
//     <ul className="w-10/12 sm:w-8/12 lg:w-6/12 ">
//       {questions.map((q, i) => (
//         <li
//           ref={(domElement) => (questionRefs.current[i] = domElement)}
//           key={q.question}
//           className="flex flex-col justify-center h-screen "
//         >
//           <div className="p-5 rounded-md h-fit ">
//             <h3 className=" text-xl min-[400px]:text-2xl mb-8 text-strongPurple font-bold">
//               <span className="text-regularPurple">{`${i + 1}. `}</span>
//               {q.question}
//             </h3>
//             <Answers
//               handleFinishQuiz={handleFinishQuiz}
//               questionsLength={questions.length}
//               index={i}
//               scrollToNextQuestion={scrollToNextQuestion}
//               answers={q.answers}
//               correctAnswer={q.correctAnswer}
//               setCorrectAnswers={setCorrectAnswers}
//             />
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }
// export default QuestionsList;
