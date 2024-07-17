import styled from "./TokenButtonTop.module.scss";

const TokenButtonTop = () => {
  return (
    <div className={styled.wrapper}>
      <button>
        <img src="/icon/wallet.svg" alt="wallet" />
      </button>
      <button>
        <span>BUY</span>
        <img src="/icon/shop.svg" alt="shop" />
      </button>
    </div>
  );
};

export default TokenButtonTop;
