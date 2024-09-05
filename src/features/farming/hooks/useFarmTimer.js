import { useEffect, useRef, useState } from "react";

export const useFarmTimer = (totalTime, incrementPerSecond) => {
  const lineRef = useRef(null);
  const timerRef = useRef(null);

  const [coins, setCoins] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerFinish, setTimerFinish] = useState(false);

  useEffect(() => {
    const savedTime = localStorage.getItem("farmingTimer");
    if (savedTime) {
      const remainingTime = parseInt(savedTime, 10) - Date.now();
      if (remainingTime > 0) {
        setTimeLeft(remainingTime);
        setTimerActive(true);
      }
    }
  }, []);

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      localStorage.setItem("farmingTimer", Date.now() + timeLeft);

      timerRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1000;

          const progress = ((newTimeLeft / totalTime) * 100).toFixed(0);
          lineRef.current.style.right = `${progress}%`;

          setCoins((prev) => prev + +incrementPerSecond);

          if (newTimeLeft <= 0) {
            clearInterval(timerRef.current);
            setTimerFinish(true);
            setTimerActive(false);
            setCoins(0);
            localStorage.removeItem("farmingTimer");
            lineRef.current.style.right = "100%";
            return 0;
          }

          return newTimeLeft;
        });
      }, 1000);

      return () => clearInterval(timerRef.current);
    }
  }, [timerActive, timeLeft, totalTime, incrementPerSecond]);

  return {
    coins,
    timeLeft,
    timerActive,
    timerFinish,
    lineRef,
    setTimerActive,
    setTimeLeft,
    setTimerFinish,
  };
};
