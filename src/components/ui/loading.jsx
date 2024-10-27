import QuizBackground from "./quiz/quizBackground";

function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center ">
      <QuizBackground />
      <span className="loader"></span>
    </div>
  );
}
export default Loading;
