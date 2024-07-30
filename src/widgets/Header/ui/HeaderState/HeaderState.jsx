import styled from "./HeaderState.module.scss";
const HeaderState = ({ isHome }) => {
  return (
    <div style={isHome ? {} : { fontSize: "12px" }} className={styled.state}>
      <div style={isHome ? {} : { fontSize: "14px" }} className={styled.name}>
        <span>2B</span>
        <img src="/icon/rub.svg" alt="rub" />
        <span>BMP</span>
      </div>
      <div className={styled.procent}>
        <span>68.213%</span>
        <span>Mined</span>
      </div>
      <div className={styled.time}>
        <img
          style={isHome ? {} : { width: "14px", height: "14px" }}
          src="/icon/time.svg"
          alt="time"
        />
        <span>30d 17h</span>
      </div>
    </div>
  );
};

export default HeaderState;
