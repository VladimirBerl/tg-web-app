import styled from "./Header.module.scss";
import HomeTopUser from "./ui/HomeTopUser/HomeTopUser";
import { useLocation } from "react-router-dom";

const HomeTop = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div className={styled.wrapper}>
      {isHome && <HomeTopUser />}
      <div style={isHome ? {} : { fontSize: "12px" }} className={styled.state}>
        <div  style={isHome ? {} : { fontSize: "14px" }}  className={styled.name}>
          <span>2B</span>
          <img src="/icon/rub.svg" alt="rub" />
          <span>BMP</span>
        </div>
        <div className={styled.procent}>
          <span>68.213%</span>
          <span>Mined</span>
        </div>
        <div className={styled.time}>
          <img src="/icon/time.svg" alt="time" />
          <span>30d 17h</span>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
