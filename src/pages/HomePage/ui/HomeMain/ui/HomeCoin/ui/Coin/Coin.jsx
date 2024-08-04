import styled from "./Coin.module.scss";

const Coin = () => {
  return (
    <div className={styled.count}>
      <img src="/icon/coin-min.png" alt="coin" />
      <span>1</span>
    </div>
  );
};

export default Coin;
