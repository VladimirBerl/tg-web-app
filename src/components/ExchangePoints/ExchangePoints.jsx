import styled from "./ExchangePoints.module.scss";

export default function ExchangePoints() {
  return (
    <div className={styled.wrapper}>
      <p className={styled.title}>Обмен баллов</p>
      <div className={styled["select-wrapper"]}>
        <div className={styled.select}>
          <span>Your points</span>
          <input type="number" placeholder="0" />
        </div>
        <div className={styled.swap}>
          <img src="/ui/vertical.svg" alt="vertical" />
        </div>
        <div className={styled.select}>
          <span>Token</span>
          <input type="number" placeholder="0" />
        </div>
      </div>
      <button className={styled["point-bnt"]}>Поменять</button>
    </div>
  );
}
