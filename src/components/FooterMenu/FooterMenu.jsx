import styled from "./FooterMenu.module.scss";
import CastomLink from "../ui/CastomLink/CastomLink";
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
      <CastomLink
        srcDisabled="/newUI/token.svg"
        srcActive="/newUI/token-active.svg"
        to="token"
      >
        token
      </CastomLink>
      <CastomLink
        to="plan"
        srcDisabled="/newUI/plan.svg"
        srcActive="/newUI/plan-active.svg"
      >
        plan
      </CastomLink>
      <CastomLink
        to=""
        srcDisabled="/newUI/home.svg"
        srcActive="/newUI/home-active.svg"
      >
        home
      </CastomLink>
      <CastomLink
        srcDisabled="/newUI/friend.svg"
        srcActive="/newUI/friend-active.svg"
        to="friends"
      >
        friend
      </CastomLink>
      <CastomLink
        srcDisabled="/newUI/earn.svg"
        srcActive="/newUI/earn-active.svg"
        to="earn"
      >
        earn
      </CastomLink>
    </nav>
  );
}
