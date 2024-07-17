import styled from "./PlanTopSwiper.module.scss";
const PlanTopSwiper = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.item}>
        <img src="/images/plan-Iphone.png" alt="Iphone" />
        <span>описание задачи</span>
      </div>
      <div className={styled.absolut}>
        <div className={styled.item}>
          <img src="/images/plan-Iphone.png" alt="Iphone" />
          <span>описание<br /> задачи</span>
        </div>
        <div className={styled.item}>
          <img src="/images/plan-Iphone.png" alt="Iphone" />
          <span>описание<br /> задачи</span>
        </div>
      </div>
    </div>
  );
};

export default PlanTopSwiper;
