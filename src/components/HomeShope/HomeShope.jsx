import styled from "./HomeShope.module.scss";

export default function HomeShope() {
  return (
    <div className={styled.wrapper}>
      <div>
        <span>Купить</span>
        <div>
          <img src="/newUI/buy.svg" alt="icon" />
        </div>
      </div>
      <div>
        <span>Продать</span>
        <div>
          <img src="/newUI/sale.svg" alt="icon" />
        </div>
      </div>
    </div>
  );
}
