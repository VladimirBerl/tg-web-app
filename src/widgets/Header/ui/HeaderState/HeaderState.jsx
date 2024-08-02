import styled from "./HeaderState.module.scss";

const HeaderState = ({ isHome }) => {
  return (
    <div className={`${styled.state} background-br`}>
      <div style={isHome ? { fontSize: "10px" } : {}} className={styled.name}>
        <span>2B</span>
        <img src="/icon/rub.svg" alt="rub" />
        <span>BMP</span>
      </div>
      <div
        style={isHome ? { fontSize: "10px" } : {}}
        className={`${styled.procent} background-br`}
      >
        <span>68.213%</span>
        <span>Mined</span>
      </div>
      {!isHome && (
        <div className={`${styled.time} background-br`}>
          <img src="/icon/time.svg" alt="time" />
          <span>30d 17h</span>
        </div>
      )}
    </div>
  );
};

export default HeaderState;
