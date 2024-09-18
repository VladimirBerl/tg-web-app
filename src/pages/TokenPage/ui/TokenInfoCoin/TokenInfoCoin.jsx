import styled from "./TokenInfoCoin.module.scss";
export default function TokenInfo() {
  return (
    <div className={styled.wrapper}>
      <p className={styled["bnt-title"]}>Стоимость</p>
      <div className={styled["bnt-coin"]}>
        <div className={styled["bnt-wrapper"]}>
          <div className={styled["btn-usdt"]}>
            <span>USDT</span>
            <span>0.23</span>
          </div>
          <div className={styled["img-token"]}>
            <img src="/icon/bmt-token-min.png" alt="" />
          </div>
          <div className={styled["btn-ton"]}>
            <span>TON</span>
            <span>0.23</span>
          </div>
        </div>
      </div>
      <p className={styled["bnt-title"]}>Информация</p>
      <div className={`${styled["bnt-coin-info"]} background-br`}>
        <div>
          <span>Сеть</span>
          <span>TON</span>
        </div>
        <div>
          <span>Адрес контакта</span>
          <span style={{ color: "#00a3ff" }}>AGF53G</span>
        </div>
        <div>
          <span>Всего токенов</span>
          <span style={{ color: "#03CEA4" }}>20.000.000</span>
        </div>
        <div>
          <span>Токенов в обработке</span>
          <span style={{ color: "#ff5a30" }}>8.500.000</span>
        </div>
      </div>
    </div>
  );
}
