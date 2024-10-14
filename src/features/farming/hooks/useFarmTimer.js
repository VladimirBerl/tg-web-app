import { useEffect, useRef, useState } from "react";
import { TELEGRAM } from "@/shared/const/telegramApi";

export const useFarmTimer = (totalTime, incrementPerSecond) => {
  const lineRef = useRef(null);
  const timerRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerFinish, setTimerFinish] = useState(
    JSON.parse(localStorage.getItem("farminFinish")) || false
  );

  // Checking timer state on initialization
  useEffect(() => {
    const savedEndTime = localStorage.getItem("farmingEndTime");
    if (savedEndTime) {
      const currentTime = Date.now();
      if (currentTime >= parseInt(savedEndTime, 10)) {
        // Timer has already finished
        setTimerFinish(true);
        setTimerActive(false);
        localStorage.setItem("farminFinish", true);
        localStorage.removeItem("farmingEndTime");
        localStorage.removeItem("farmingTimer");
      } else {
        // Timer is still running
        const remainingTime = parseInt(savedEndTime, 10) - currentTime;
        setTimeLeft(remainingTime);
        setTimerActive(true);
      }
    }
  }, []);

  // When timer starts
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const endTime = Date.now() + timeLeft;
      localStorage.setItem("farmingEndTime", endTime); // Save the end time

      timerRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1000;

          const progress = ((newTimeLeft / totalTime) * 100).toFixed(0);
          if (lineRef.current) {
            lineRef.current.style.right = `${progress}%`;
          }
          if (newTimeLeft <= 0) {
            clearInterval(timerRef.current);
            setTimerFinish(true);
            setTimerActive(false);
            localStorage.setItem("farminFinish", true);
            localStorage.removeItem("farmingEndTime");
            localStorage.removeItem("farmingTimer");
            if (lineRef.current) {
              lineRef.current.style.right = "100%";
            }
            return 0;
          }

          return newTimeLeft;
        });
      }, 1000);

      return () => clearInterval(timerRef.current);
    }
  }, [timerActive, timeLeft, totalTime, incrementPerSecond]);

  return {
    timeLeft,
    timerActive,
    timerFinish,
    lineRef,
    setTimerActive,
    setTimeLeft,
    setTimerFinish,
  };
};
