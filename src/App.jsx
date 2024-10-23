import "./App.css";
import Answers from "./components/ui/answers";
import { questions } from "./data";

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center ">
      <img
        // src="\light_purple.webp"
        src="\light_purple2.jpg"
        alt=""
        className="fixed h-screen w-full -z-10"
      />
      <ul className="w-10/12 sm:w-8/12 lg:w-6/12 ">
        {questions.map((q, i) => (
          <li
            key={q.question}
            className=" h-screen flex flex-col justify-center "
          >
            <div className="rounded-md p-5  h-fit ">
              <h3 className=" text-xl min-[400px]:text-2xl mb-8 text-strongPurple font-bold">
                <span className="text-regularPurple">{`${i + 1}. `}</span>
                {q.question}
              </h3>
              <Answers answers={q.answers} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
