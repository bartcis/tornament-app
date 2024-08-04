import { useEffect, useState } from "react";
import { useCurrentGame } from "../context/current-game";

const baseCount = 10;
export const useCounter = () => {
  const { game } = useCurrentGame();
  const [seconds, setSeconds] = useState(baseCount);

  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0 || !game) {
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [seconds, game]);

  useEffect(() => {
    if (game) {
      setSeconds(baseCount);
    }
  }, [game]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return {
    formatTime,
    seconds,
  };
};
