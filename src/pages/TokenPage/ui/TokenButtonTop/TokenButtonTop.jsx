import styled from "./TokenButtonTop.module.scss";

const TokenButtonTop = () => {
  return (
    <div className={styled.wrapper}>
      <button className="background-br">
        <img src="/icon/wallet.svg" alt="wallet" />
      </button>
      <button className="background-br">
        <span>BUY</span>
        <img src="/icon/shop.svg" alt="shop" />
      </button>
    </div>
  );
};

export default TokenButtonTop;
