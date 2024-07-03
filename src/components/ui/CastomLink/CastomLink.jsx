import { Link, useLocation } from "react-router-dom";

export default function CastomLink({ to, children, srcDisabled, srcActive }) {
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
  let match = useLocation();
  return (
    <Link
      onClick={handlerVibrationTg}
      to={to}
      className={`${match.pathname === `/${to}` ? "active" : ""}`}
    >
      <div>
        <img
          src={`${match.pathname === `/${to}` ? srcActive : srcDisabled}`}
          alt="icon"
        />
      </div>
      <span>{children}</span>
    </Link>
  );
}
