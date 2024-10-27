function AnswerContainer({
  children,
  userAnswered,
  secondAnimation,
  handleClick,
}) {
  const style = `
    ${
      userAnswered.correct &&
      !secondAnimation &&
      "animate-rubber-band duration-700"
    }
    ${
      userAnswered.incorrect &&
      !secondAnimation &&
      "animate-wobble duration-700"
    }
    ${
      secondAnimation &&
      " animate-backgroundColor bg-gradient-to-r from-veryLightPurple  to-lightPurple bg-opacity-30  "
    }  
    ${
      !userAnswered.correct &&
      !userAnswered.incorrect &&
      "bg-purple-50 bg-opacity-35"
    }
     hover:border-lightPurple border-regularPurple
    cursor-pointer flex hover:scale-[101%] items-center gap-3 p-4 transition-transform duration-75 border border-solid rounded-2xl
      `;

  return (
    <div onClick={handleClick} className={style}>
      {children}
    </div>
  );
}
export default AnswerContainer;
