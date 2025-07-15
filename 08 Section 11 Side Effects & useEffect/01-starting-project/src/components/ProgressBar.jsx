import { useState, useEffect } from "react";

const TIMER = 3000;

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval); // very important to clear the timer and interval when finish
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
