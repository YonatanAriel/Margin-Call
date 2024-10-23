import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function Answers({ answers }) {
  return (
    <>
      <RadioGroup>
        {answers.map((answer) => (
          <div key={answer}>
            <RadioGroupItem value={answer} id={answer} />
            <Label htmlFor={answer}>{answer}</Label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
}

export default Answers;
