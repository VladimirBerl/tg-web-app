import { Link } from "react-router-dom";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const CastomLink = ({ to, children, srcIcon, style }) => {
  return (
    <Link onClick={handlerVibrationTg} to={to}>
      {srcIcon && (
        <div>
          <img src={srcIcon} alt="icon" />
        </div>
      )}
      <span className={style}>{children}</span>
    </Link>
  );
};

export default CastomLink;
