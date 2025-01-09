import { Button } from "@/components/ui/button";
import { Context } from "@/context/mainContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Buttons({ hidePopup, scrollToNextQuestion }) {
  const { setCorrectAnswers, removeCurrentQuestions, setIsTriedAgain } =
    useContext(Context);

  const navigate = useNavigate();

  const resetCorrectAnswers = () => setCorrectAnswers(0);

  const handleTryAgainClick = () => {
    resetCorrectAnswers();
    hidePopup();
    setIsTriedAgain(true);
    // why the time in array?
    setTimeout(() => setIsTriedAgain(false), [1000]);
    scrollToNextQuestion(-1);
  };

  const handleHomeClick = () => {
    resetCorrectAnswers();
    removeCurrentQuestions();
    navigate("/");
  };

  return (
    <div className="flex gap-4 mt-4 animate-zoom-in">
      <Button
        onClick={handleTryAgainClick}
        variant="outline"
        className="border-2  text-[#2e073f]  transition-all hover:border-transparent hover:scale-[99.2%]  ease-in duration-75 rounded-lg hover:text-[#ebd3f8] border-[#2e073f] bg-[#ebd3f8] hover:bg-gradient-to-br from-[#2e073f] to-[#7A1CAC]"
      >
        Try Again
      </Button>
      <Button
        onClick={handleHomeClick}
        className="border-2  text-[#2e073f]  transition-all hover:border-transparent hover:scale-[99.2%]  ease-in duration-75 rounded-lg hover:text-[#ebd3f8] border-[#2e073f] bg-[#ebd3f8] hover:bg-gradient-to-br from-[#2e073f] to-[#7A1CAC]"
        variant="outline"
      >
        Home
      </Button>
    </div>
  );
}
export default Buttons;
