import { useState } from "react";

export default function useStepper(pages) {
  const [currentPosition, setCurrentPosition] = useState(0);

  const isFirstPage = currentPosition === 0;
  const isFinalPage = currentPosition === Object.keys(pages).length - 1;

  const navigateTo = (position) => {
    setCurrentPosition(position);
  };

  return {
    pageName: Object.keys(pages)[currentPosition],
    CurrentPage: pages[Object.keys(pages)[currentPosition]],
    next: () => {
      if (!isFinalPage) navigateTo(currentPosition + 1);
    },
    back: () => {
      if (!isFirstPage) navigateTo(currentPosition - 1);
    },
    goTo: (position) => navigateTo(position),
    isFirstPage,
    isFinalPage,
    pageNames: Object.keys(pages),
    position: currentPosition,
  };
}
