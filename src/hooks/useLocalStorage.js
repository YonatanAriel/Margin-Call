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

  const [value, setValue] = useState(getUseStateValue);

  useEffect(() => {
    const addToLS = () => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error writing to localStorage: ${error}`);
      }
    };

    addToLS();
  }, [key, value]);

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
