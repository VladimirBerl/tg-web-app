import { useEffect, useRef, useState } from "react";
import { useChangeUserCountMutation } from "@/app/api";
import { useUser } from "@/app/context/UserContext";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  font-family: "UltramonoWide", sans-serif;
  width: 100%;
  height: 50px;
  border-radius: var(--border-8px);
  background: ${({ timerFinish }) =>
    timerFinish
      ? "linear-gradient(90deg, rgb(48, 104, 208) 0%, rgb(131, 107, 175) 50%, rgb(151, 130, 98) 100%)"
      : "transparent"};
  &:disabled {
    color: #717171;
    border: none;
    background-color: hsla(0, 0%, 100%, 0.3);
  }
`;

const WrapperText = styled.div`
  text-transform: uppercase;
  font-size: 15px;
  background: linear-gradient(
    90deg,
    rgb(48, 104, 208) 0%,
    rgb(131, 107, 175) 50%,
    rgb(151, 130, 98) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ timerActive, timerFinish }) =>
    timerActive || timerFinish ? "#fff" : "transparent"};
`;

const Farming = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  & span {
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
  }

  & span:last-child {
    font-family: "Bicubik", sans-serif;
  }

  & img {
    width: 17px;
    height: 17px;
  }
`;

const Timer = styled.div`
  font-family: "Involve", sans-serif;
  font-size: 10px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

const Line = styled.div`
  visibility: ${({ timerActive }) => (timerActive ? "visible" : "hidden")};
  position: absolute;
  left: 0;
  top: 0;
  right: 100%;
  bottom: 0;
  transition: 0.4s right;
  border-radius: var(--border-8px);
  background-color: hsla(0, 0%, 100%, 0.3);
`;

const Farm = () => {
  const { user } = useUser();
  const [changeUserCount] = useChangeUserCountMutation();
  const lineRef = useRef(null);
  const timerRef = useRef(null);

  const [text, setText] = useState("Farming");
  const [time] = useState(6000);
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

          const progress = ((newTimeLeft / time) * 100).toFixed(0);
          lineRef.current.style.right = `${progress}%`;

          if (newTimeLeft <= 0) {
            clearInterval(timerRef.current);
            setTimerFinish(true);
            setTimerActive(false);
            setText("Claim");
            localStorage.removeItem("farmingTimer");
            lineRef.current.style.right = "100%";
            return 0;
          }

          return newTimeLeft;
        });
      }, 1000);

      return () => clearInterval(timerRef.current);
    }
  }, [timerActive, timeLeft, time]);

  const updateCoins = async () => {
    try {
      await changeUserCount({
        id: user.id_telegram,
        body: {
          amount: user.count_pharmd,
          add: true,
        },
      }).unwrap();
    } catch (error) {
      console.error("Failed to update tokens:", error);
    }
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
  };

  const handleButtonClick = () => {
    if (timerFinish) {
      updateCoins();
      setTimerFinish(false);
      setText("Farming");
    } else if (!timerActive) {
      setTimeLeft(time);
      setTimerActive(true);
    }
  };

  return (
    <Button
      timerFinish={timerFinish}
      onClick={handleButtonClick}
      className="background-br"
      disabled={timerActive}
    >
      <WrapperText timerActive={timerActive} timerFinish={timerFinish}>
        {timerActive ? (
          <Farming>
            <span>Farming</span>
            <img src="/icon/coin-farm.svg" alt="coin-farm" />
            <span>{user.count_pharmd.toLocaleString("de-DE")}</span>
          </Farming>
        ) : timerFinish ? (
          <Farming>
            <span>Claim</span>
            <img src="/icon/coin-farm.svg" alt="coin-farm" />
            <span>{user.count_pharmd.toLocaleString("de-DE")}</span>
          </Farming>
        ) : (
          text
        )}
      </WrapperText>
      {timerActive && <Timer>{formatTime(timeLeft)}</Timer>}
      <Line timerActive={timerActive} ref={lineRef}></Line>
    </Button>
  );
};

export default Farm;
