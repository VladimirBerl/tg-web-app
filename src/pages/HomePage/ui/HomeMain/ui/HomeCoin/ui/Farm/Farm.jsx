import styled from "styled-components";
import { useUpdateUserCoins } from "@/entities/user/api.js";
import { useFarmTimer } from "@/features/farming/hooks/useFarmTimer.js";
import { formatTime } from "@/shared/lib/formatTime.js";

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
  const { updateCoins, user } = useUpdateUserCoins();

  const totalCoins = user.count_pharmd;
  const time = 6000;
  const incrementPerSecond = (totalCoins / time).toFixed(3);

  const {
    coins,
    timeLeft,
    timerActive,
    timerFinish,
    lineRef,
    setTimerActive,
    setTimeLeft,
    setTimerFinish,
  } = useFarmTimer(time, incrementPerSecond);

  const handleButtonClick = () => {
    if (timerFinish) {
      updateCoins();
      setTimerFinish(false);
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
            <span>{coins}</span>
          </Farming>
        ) : timerFinish ? (
          <Farming>
            <span>Claim</span>
            <img src="/icon/coin-farm.svg" alt="coin-farm" />
            <span>{totalCoins.toLocaleString("de-DE")}</span>
          </Farming>
        ) : (
          "Farming"
        )}
      </WrapperText>
      {timerActive && <Timer>{formatTime(timeLeft)}</Timer>}
      <Line timerActive={timerActive} ref={lineRef}></Line>
    </Button>
  );
};

export default Farm;