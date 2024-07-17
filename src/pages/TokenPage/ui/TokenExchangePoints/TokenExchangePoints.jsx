import styled from "./TokenExchangePoints.module.scss";

export default function TokenExchangePoints() {
  return (
    <div className={styled.wrapper}>
      <p className={styled.title}>Обмен баллов</p>
      <div className={styled["select-wrapper"]}>
        <div className={styled.select}>
          <span>Your points</span>
          <input type="number" placeholder="0" />
        </div>
        <div className={styled.swap}>
          <img src="/icon/wrap.svg" alt="wrap" />
        </div>
        <div className={styled.select}>
          <span>Token</span>
          <input type="number" placeholder="0" />
        </div>
      </div>
      <button className={styled["point-bnt"]}>
        <span>Поменять</span>
      </button>
    </div>
  );
}
