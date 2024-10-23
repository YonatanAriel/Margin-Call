import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function Answers({ answers }) {
  return (
    <>
      <RadioGroup className="flex flex-col gap-5">
        {answers.map((answer) => (
          <div
            key={answer}
            className="flex items-center gap-3 p-4 rounded-2xl bg-purple-50 bg-opacity-35 border hover:border-lightPurple hover:scale-[101%] duration-75 transition-transform border-regularPurple border-solid"
          >
            <RadioGroupItem
              value={answer}
              id={answer}
              className="w-6 h-6 color-strongPurple"
            />
            <Label className="text-base  text-strongPurple" htmlFor={answer}>
              {answer}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
}

export default Answers;
