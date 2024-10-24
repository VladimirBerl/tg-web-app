import styled from "./PriceCoin.module.scss";

const PriceCoin = ({ price, icon, color, nextSlide, prevSlide }) => {
  return (
    <div className={styled.info}>
      <div onClick={prevSlide} className={styled["chart-bg"]}>
        <img src="/images/chart-bg.png" alt="" />
      </div>
      <div className={styled["button-left"]}>
        <img src="/icon/rows.png" alt="" />
      </div>
      <span style={{ color: color[0] }}>
        {icon !== "" && <img src={icon} alt="coin" />}
        {icon !== "" && price}
      </span>
      <div onClick={nextSlide} className={styled["button-right"]}>
        <img src="/icon/rows.png" alt="" />
      </div>
    </div>
  );
};

export default PriceCoin;
