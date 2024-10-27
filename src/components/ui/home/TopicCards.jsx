import TopicCard from "./topicCard";

function TopicCards() {
  return (
    <div className="flex flex-wrap w-full h-full gap-2 overflow-hidden rounded-3xl border-strongPurple border-3 ">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => (
        <TopicCard key={v + i} />
      ))}
    </div>
  );
}
export default TopicCards;
