import styled from "./HomeShope.module.scss";

const HomeShope = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.button}>
        <span>Купить</span>
        <div>
          <img src="src/shared/assets/icon/buy.svg" alt="icon" />
        </div>
      </div>
      <div className={styled.button}>
        <span>Продать</span>
        <div>
          <img src="src/shared/assets/icon/sale.svg" alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default HomeShope;
