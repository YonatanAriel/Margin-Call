import {topics} from "@/data";
import TopicCard from "./topicCard";


function TopicCards() {
    // convert topics to Set (make sure that topics is an array of strings without duplicates) and then you can remove i from the map
    return (
        <div className="flex flex-wrap w-full h-full gap-2 overflow-hidden rounded-3xl border-strongPurple border-3 ">
            {topics?.map((topic, i) => (
                <TopicCard topic={topic} key={topic + i}/>
            ))}
        </div>
    );
}

export default TopicCards;
