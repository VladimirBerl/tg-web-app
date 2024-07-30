import styled from "./Header.module.scss";
import HeaderState from "./ui/HeaderState/HeaderState";
import HeaderTopUser from "./ui/HeaderTopUser/HeaderTopUser";
import { useLocation } from "react-router-dom";

const HomeTop = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div className={styled.wrapper}>
      {isHome && <HeaderTopUser />}
      <HeaderState isHome={isHome} />
    </div>
  );
};

export default HomeTop;
