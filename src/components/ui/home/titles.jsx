import useScreenWidth from "@/hooks/useScreenWidth";

function Titles() {
  const screenWidth = useScreenWidth();

  //  move this to 'constants' file
  const titleFontSize =
    screenWidth > 950
      ? "6rem"
      : screenWidth > 580
      ? "5rem"
      : screenWidth > 450
      ? "4rem"
      : screenWidth > 350
      ? "3.5rem"
      : "3rem";
  const titleMarginBottom =
    screenWidth > 950
      ? "-2rem"
      : screenWidth > 580
      ? "-1.7rem"
      : screenWidth > 450
      ? "-1.5rem"
      : "-1.3rem";
  const subTitleFontSize =
    screenWidth > 950
      ? "1rem"
      : screenWidth > 580
      ? ".8rem"
      : screenWidth > 450
      ? ".7rem"
      : screenWidth > 350
      ? ".6rem"
      : ".5rem";

  return (
    <>
      <div
        style={{ marginBottom: titleMarginBottom }}
        className="-mb-8 text-transparent bg-lightPurple opacity-80 lg:bg-gradient-to-r from-lightPurple via-lightPurple to-veryLightPurple bg-clip-text"
      >
        <h1
          className="font-bold "
          style={{
            fontSize: titleFontSize,
          }}
        >
          Margin Call
        </h1>
      </div>
      <h3
        style={{ fontSize: subTitleFontSize }}
        className="p-0 pl-1 mb-4 text-base font-bold sm:pl-2 text-strongPurple"
      >
        Cascade Me If You Can
      </h3>
    </>
  );
}
export default Titles;
