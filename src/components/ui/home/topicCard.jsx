import { Context } from "@/context/mainContext";
import { useContext } from "react";
import { questions } from "@/data";
import { useNavigate } from "react-router-dom";

function TopicCard({ topic }) {
  const { setCurrentQuestions } = useContext(Context);
  const navigate = useNavigate();

  const startQuiz = () => {
    setCurrentQuestions(questions[topic]);
    navigate("/quiz");
  };

  return (
    <div
      onClick={startQuiz}
      className="cursor-pointer hover:scale-[0.99] transition-transform ease-in-out text-center  bg-veryLightPurple bg-opacity-50 flex justify-center items-center min-h-[max(10vw,200px)] min-w-[max(10vw,200px)] lg:md:min-h-[max(10vw,140px)] lg:md:min-w-[max(10vw,140px)] md:min-h-[max(10vw,180px)] md:min-w-[max(10vw,180px)] p-4 flex-grow"
    >
      <span className="text-lg font-semibold text-center text-lightPurple ">
        {topic}
      </span>
    </div>
  );
}
export default TopicCard;
