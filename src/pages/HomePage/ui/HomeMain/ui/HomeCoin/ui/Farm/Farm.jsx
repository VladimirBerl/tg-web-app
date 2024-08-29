import { useEffect, useState } from "react";
import styled from "./Farm.module.scss";
import { useChangeUserCountMutation } from "@/app/api";
import { useUser } from "@/app/context/UserContext";

const Farm = () => {
  const { user } = useUser();
  const [changeUserCount] = useChangeUserCountMutation();

  // Состояния для таймера
  const [text, setText] = useState("Farming");
  const [timeLeft, setTimeLeft] = useState(0); // Время, оставшееся до конца таймера
  const [timerActive, setTimerActive] = useState(false);
  const [timerFinish, setTimerFinish] = useState(false); // Флаг активности таймера

  // Загружаем состояние таймера из localStorage при монтировании компонента
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

  // Сохраняем состояние таймера в localStorage при каждом изменении времени
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      localStorage.setItem("farmingTimer", Date.now() + timeLeft);
      const timerInterval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1000) {
            setTimerFinish(true);
            clearInterval(timerInterval);
            setTimerActive(false);
            setText("Get farming");
            localStorage.removeItem("farmingTimer");
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timerActive, timeLeft]);

  const udateCoins = async () => {
    try {
      const token = await changeUserCount({
        id: user.id_telegram,
        body: {
          amount: user.count_pharmd,
          add: true,
        },
      }).unwrap();
      console.log("Accepted", token);
    } catch (error) {
      console.error("Failed to update tokens:", error);
    }
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const changeCoins = () => {
    if (timerFinish) {
      udateCoins();
      setTimerFinish(false);
      setText("Farming");
      return
    }
    if (!timerActive) {
      setTimeLeft(6000);
      setTimerActive(true);
    }
  };

  return (
    <button
      onClick={changeCoins}
      className={`${styled.farm} background-br`}
      disabled={timerActive} // Отключаем кнопку, если таймер активен
    >
      <span>{timerActive ? `Farming... ${formatTime(timeLeft)}` : text}</span>
    </button>
  );
};

export default Farm;
