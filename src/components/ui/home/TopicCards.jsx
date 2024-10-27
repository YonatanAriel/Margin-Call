import { topics } from "@/data";
import TopicCard from "./topicCard";

function TopicCards() {
  return (
    <div className="flex flex-wrap w-full h-full gap-2 overflow-hidden rounded-3xl border-strongPurple border-3 ">
      {topics?.map((topic, i) => (
        <TopicCard topic={topic} key={topic + i} />
      ))}
    </div>
  );
}
export default TopicCards;
