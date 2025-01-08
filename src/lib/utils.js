import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getRandomArrayItem(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
  const randomItem = array[randomNumber];
  return randomItem;
}
