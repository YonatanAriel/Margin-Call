import { topics } from "@/data";
import TopicCard from "./topicCard";

function TopicCards() {
  const uniqueTopics = new Set(topics);

  return (
    <div className="flex flex-wrap w-full h-full gap-2 overflow-hidden rounded-3xl border-strongPurple border-3 ">
      {[...uniqueTopics].map((topic) => (
        <TopicCard topic={topic} key={topic} />
      ))}
    </div>
  );
}
export default TopicCards;
