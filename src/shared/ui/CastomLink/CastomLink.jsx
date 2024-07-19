import { Link, useLocation } from "react-router-dom";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const CastomLink = ({ to, children, srcIcon, style }) => {
  let match = useLocation();
  return (
    <Link
      onClick={handlerVibrationTg}
      to={to}
      className={`${match.pathname === `/${to}` ? "active" : ""}`}
    >
      {srcIcon && (
        <div>
          <img src={srcIcon} alt="icon" />
        </div>
      )}
      <span className={style} >{children}</span>
    </Link>
  );
};

export default CastomLink;
