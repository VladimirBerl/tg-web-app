import styled from "./PriceCoin.module.scss";

const PriceCoin = ({ price, icon, color }) => {
  return (
    <div
      className={`
      ${styled.info} background-br
    `}
    >
      <span style={{ color: color[0] }}>
        {icon !== "" && <img src={icon} alt="coin" />}
        {icon !== "" && price}
      </span>
    </div>
  );
};

export default PriceCoin;
