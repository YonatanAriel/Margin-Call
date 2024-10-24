import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

function Answer({ answer, handleClick }) {
  return (
    <div
      key={answer}
      ///hover:scale-[101%]
      onClick={() => handleClick(answer)}
      className="flex hover:scale-[101%] items-center gap-3 p-4 transition-transform duration-75 border border-solid rounded-2xl bg-purple-50 bg-opacity-35 hover:border-lightPurple border-regularPurple"
    >
      <RadioGroupItem
        value={answer}
        id={answer}
        className={` w-6 h-6 color-strongPurple `}
      />
      <Label className="text-base text-strongPurple" htmlFor={answer}>
        {answer}
      </Label>
    </div>
  );
}

export default Answer;
