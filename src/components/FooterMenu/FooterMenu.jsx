import styled from "./FooterMenu.module.scss";
import { NavLink } from "react-router-dom";

export default function FooterMenu() {
  function handlerVibrationTg() {
    if (
      window.Telegram &&
      window.Telegram.WebApp &&
      window.Telegram.WebApp.HapticFeedback
    ) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred("medium");
    } else {
      console.warn("Telegram WebApp HapticFeedback API is not available.");
    }
  }
  return (
    <nav className={styled.menu}>
      <NavLink onClick={handlerVibrationTg} className={styled.link} to="token">
        <div>
          <img src="/newUI/token.svg" alt="icon" />
        </div>
        <span>token</span>
      </NavLink>
      <NavLink onClick={handlerVibrationTg} className={styled.link} to="plan">
        <div>
          <img src="/newUI/plan.svg" alt="icon" />
        </div>
        <span>plan</span>
      </NavLink>
      <NavLink onClick={handlerVibrationTg} className={styled.link} to="/">
        <div>
          <img src="/newUI/home.svg" alt="icon" />
        </div>
        <span>home</span>
      </NavLink>
      <NavLink
        onClick={handlerVibrationTg}
        className={styled.link}
        to="friends"
      >
        <div>
          <img src="/newUI/friend.svg" alt="icon" />
        </div>
        <span>friend</span>
      </NavLink>
      <NavLink onClick={handlerVibrationTg} className={styled.link} to="earn">
        <div>
          <img src="/newUI/earn.svg" alt="icon" />
        </div>
        <span>earn</span>
      </NavLink>
    </nav>
  );
}
