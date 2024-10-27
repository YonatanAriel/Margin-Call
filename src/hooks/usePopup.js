import { useState } from "react";

function usePopup() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopupAfterDelay = (timer) => {
    setTimeout(() => setIsPopupVisible(true), timer);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  return { isPopupVisible, showPopupAfterDelay, hidePopup };
}
export default usePopup;
