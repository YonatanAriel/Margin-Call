// import QuestionMarks from "@/components/ui/home/questionMarks";
import Titles from "@/components/ui/home/titles";
import TopicCards from "@/components/ui/home/TopicCards";

function Home() {
  return (
    <>
      <div className="fixed inset-0 w-full h-screen animate-backgroundColor bg-gradient-to-br from-veryLightPurple to-lightPurple"></div>
      <div className=" w-11/12 md:w-7/12 min-h-[60vh] relative my-20  mx-auto ">
        {/* <QuestionMarks /> */}
        <Titles />
        <TopicCards />
      </div>
    </>
  );
}
export default Home;
