import styled from "./PriceCoin.module.scss";

const CHART_ICONS = {
  0: "/icon/bmt-min.png",
  1: "/icon/coin-min.png",
  2: "/icon/rub-min.png",
};

const PriceCoin = ({ data }) => {
  return (
    <div
      className={`
      ${styled.info} background-br
    `}
    >
      {data.map((item, index) => (
        <span key={index}>
          <img src={CHART_ICONS[index]} alt="coin" />
          {item.datasets[0].price}
        </span>
      ))}
    </div>
  );
};

export default PriceCoin;
