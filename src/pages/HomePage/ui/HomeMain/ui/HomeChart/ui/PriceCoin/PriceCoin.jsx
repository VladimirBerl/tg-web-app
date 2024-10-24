import styled from "./PriceCoin.module.scss";

const PriceCoin = ({ price, icon, color }) => {
  return (
    <div className={styled.info}>
      <div className={styled["chart-bg"]}>
        <img src="/images/chart-bg.svg" alt="" />
      </div>
      <div className={styled["button-left"]}>
        <img src="/icon/rows.svg" alt="" />
      </div>
      <span style={{ color: color[0] }}>
        {icon !== "" && <img src={icon} alt="coin" />}
        {icon !== "" && price}
      </span>
      <div className={styled["button-right"]}>
        <img src="/icon/rows.svg" alt="" />
      </div>
    </div>
  );
};

export default PriceCoin;
