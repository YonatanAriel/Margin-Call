import "./App.css";
import Answers from "./components/ui/answers";
import { questions } from "./data";

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center ">
      <ul className="w-9/12 bg-orange-600">
        {questions.map((q) => (
          <li key={q.question} className="bg-red-400 h-screen">
            <h3>{q.question}</h3>
            <Answers answers={q.answers} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
