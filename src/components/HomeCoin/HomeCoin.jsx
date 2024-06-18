import styled from "./HomeCoin.module.scss";
import { user } from "../../storage/storage";
import { useState } from "react";
import { useEffect } from "react";

export default function HomeCoin() {
  const [userCoin, setUserCoin] = useState(user.coin);
  const [userTime, setUserTime] = useState(user.time);
  const [userFarm, setUserFarm] = useState(user.farm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [clickBtn, setClickBtn] = useState(false);

  useEffect(() => {
    if (userTime !== 0) {
      const timeout = setTimeout(
        () => setUserTime((prev) => prev - 1),
        1000
      );
      return () => clearTimeout(timeout);
    } else {
      setIsDisabled((prev) => !prev)
    }
  }, [userTime]);

  function buttonClick () {
    setIsDisabled((prev) => !prev)
    setUserCoin((prev) => prev + userFarm)
    setUserTime(user.time)
  }
  return (
    <div className={styled.wrapper}>
      <div className={styled.count}>
        <img src="src\assets\ui\coin.svg" alt="coin" />
        <span>{userCoin.toLocaleString("de-DE")}</span>
      </div>
      <div className={styled.farm}>
        <div className={styled.timer}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.85786 0.5C4.41015 0.5 4.85786 0.947715 4.85786 1.5V3.63377C6.77904 1.99236 9.27439 0.999992 12 0.999992C18.0751 0.999992 23 5.92486 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 11.4477 1.44772 11 2 11C2.55228 11 3 11.4477 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 2.99999 12 2.99999C9.85627 2.99999 7.88879 3.74851 6.34257 4.99999H8.36006C8.91235 4.99999 9.36006 5.44771 9.36006 5.99999C9.36006 6.55228 8.91235 6.99999 8.36006 6.99999H3.85786C3.30558 6.99999 2.85786 6.55228 2.85786 5.99999V1.5C2.85786 0.947715 3.30558 0.5 3.85786 0.5Z"
              fill="#1c1f24"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 5.6C12.4971 5.6 12.9001 6.00294 12.9001 6.5V11.6272L15.6365 14.3636C15.9879 14.7151 15.9879 15.2849 15.6365 15.6364C15.285 15.9879 14.7151 15.9879 14.3637 15.6364L11.3637 12.6364C11.1949 12.4676 11.1001 12.2387 11.1001 12V6.5C11.1001 6.00294 11.503 5.6 12.0001 5.6Z"
              fill="#1c1f24"
            />
          </svg>
          <span className={styled.clik}>{userTime}</span>
          {}
        </div>
        <button onClick={buttonClick} type="submit" disabled={isDisabled}>
          <span>{userFarm.toLocaleString("de-DE")}</span>
          Click
        </button>
      </div>
    </div>
  );
}
