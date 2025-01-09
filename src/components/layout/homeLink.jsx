import { getRandomArrayItem } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { topics } from "@/data";
import { useContext, useMemo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Context } from "@/context/mainContext";

function HomeLink() {
  const { setCorrectAnswers, removeCurrentQuestions } = useContext(Context);
  const currentPath = useLocation().pathname;

  const funnyTooltips = useMemo(
    () => ["Roulette!", "Brave?", "Don't Click"],
    []
  );
  const randomTopic = useMemo(() => getRandomArrayItem(topics), [currentPath]);

  const tooltipContent = useMemo(
    () => (currentPath === "/" ? getRandomArrayItem(funnyTooltips) : "Home"),
    [currentPath, funnyTooltips]
  );

  const target = currentPath === "/" ? `/quiz/?topic=${randomTopic}` : "/";

  const handleClick = () => {
    if (currentPath === "/") return;
    setCorrectAnswers(0);
    removeCurrentQuestions();
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            onClick={handleClick}
            className="fixed z-10 left-9 bottom-9"
            aria-label={`${
              currentPath === "/" ? "Random Quiz Link" : "Link to home"
            }`}
            to={target}
          >
            <img
              className="h-10 border-black hover:animate-jelly animate-spin-slow"
              src="\question-mark.png"
              alt={currentPath === "/" ? "Random Quiz Link" : "Link to home"}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          className="mb-2 text-lightPurple bg-veryLightPurple "
        >
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
export default HomeLink;
