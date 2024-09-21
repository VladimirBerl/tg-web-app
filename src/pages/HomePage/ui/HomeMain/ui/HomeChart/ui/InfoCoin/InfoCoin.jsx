import styled from "./InfoCoin.module.scss";

const InfoCoin = ({ data }) => {
  return (
    <div className={`${styled.info} background-br`}>
      {data.map((item) => (
        <span key={item.datasets[0].name}>{item.datasets[0].name}</span>
      ))}
    </div>
  );
};

export default InfoCoin;
