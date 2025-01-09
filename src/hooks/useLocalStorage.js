import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const getUseStateValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading from localStorage: ${error}`);
      return initialValue;
    }
  };

  // hooks belong at the top level of the component (not functional problem, but a best practice)
  const [value, setValue] = useState(getUseStateValue);

  useEffect(() => {

    // every time the useEffect hook runs, the function re-creates the addToLS function, which is unnecessary.
    // option 1: move this function outside the useEffect hook and rename it to addToLocalStorage, call it from the useEffect hook.
    // option 2: remove the function and use IIIFE (Immediately Invoked Function Expression) directly in the useEffect hook.
    // option 3: just write the code directly in the useEffect hook without the function.
    const addToLS = () => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error writing to localStorage: ${error}`);
      }
    };

    addToLS();
  }, [key, value]);

  // update the name of the function to removeFormLocalStorage, to be more descriptive
  const remove = () => {
    try {
      localStorage.removeItem(key);
      setValue(initialValue);
    } catch (error) {
      console.error(`Error removing from localStorage: ${error}`);
    }
  };

  return [value, setValue, remove];
};

export default useLocalStorage;
