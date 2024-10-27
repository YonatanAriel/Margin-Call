function TopicCard() {
  return (
    <div className="cursor-pointer hover:scale-[0.99] transition-transform ease-in-out text-center  bg-veryLightPurple bg-opacity-50 flex justify-center items-center min-h-[max(10vw,200px)] min-w-[max(10vw,200px)] lg:md:min-h-[max(10vw,140px)] lg:md:min-w-[max(10vw,140px)] md:min-h-[max(10vw,180px)] md:min-w-[max(10vw,180px)] p-4 flex-grow">
      <span className="text-lg font-semibold text-center text-lightPurple ">
        {"CSS variables"}
      </span>
    </div>
  );
}
export default TopicCard;
